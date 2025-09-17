'use client';

import { useState, useEffect } from 'react';

interface VideoCarouselProps {
  videos: string[];
  autoPlayInterval?: number;
  className?: string;
}

export default function VideoCarousel({ 
  videos, 
  autoPlayInterval = 8000,
  className = ""
}: VideoCarouselProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(new Array(videos.length).fill(false));
  const [videoErrors, setVideoErrors] = useState<boolean[]>(new Array(videos.length).fill(false));

  // 確保元件初始化
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => 
          (prevIndex + 1) % videos.length
        );
        setIsTransitioning(false);
      }, 500);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [videos.length, autoPlayInterval]);

  // 移除 SSR/CSR 不一致的預載 useEffect（避免 hydration mismatch）

  const handleVideoLoad = (index: number) => {
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleVideoError = (index: number) => {
    setVideoErrors(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  if (videos.length === 0) return null;

  return (
    <div className={`relative overflow-hidden video-carousel w-full h-full ${className}`}>
      {videos.map((video, index) => (
        <div
          key={`video-${index}-${video}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentVideoIndex && isInitialized
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          style={{
            opacity: index === currentVideoIndex && isInitialized ? 1 : 0
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            key={`video-element-${index}-${video}`}
            onLoadedData={() => handleVideoLoad(index)}
            onError={(e) => {
              console.error('Video failed to load:', video, e);
              handleVideoError(index);
            }}
            onCanPlay={() => {
              console.log('Video can play:', video);
            }}
            onLoadStart={() => {
              console.log('Video load started:', video);
            }}
          >
            <source src={video} type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
          
          {/* 載入指示器 */}
          {!videosLoaded[index] && !videoErrors[index] && index === currentVideoIndex && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                <p className="text-sm">載入影片中...</p>
              </div>
            </div>
          )}
          
          {/* 錯誤指示器 */}
          {videoErrors[index] && index === currentVideoIndex && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center text-white">
                <svg className="w-12 h-12 mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm">影片載入失敗</p>
              </div>
            </div>
          )}
        </div>
      ))}
      
      {/* 漸層遮罩 */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* 影片指示器 */}
      {videos.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentVideoIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`切換到影片 ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}