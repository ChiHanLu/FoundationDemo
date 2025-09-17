'use client';

import { useState } from 'react';
import Link from 'next/link';

// 模擬活動資料
const allEvents = [
  {
    id: 1,
    title: "夏日海洋守護者 - 淨灘活動",
    description: "邀請您一起守護美麗的海岸線，為海洋環境盡一份心力。活動包含淨灘、環保教育及海洋生態導覽。",
    date: "2024-04-20",
    time: "09:00-15:00",
    location: "新北市萬里區翡翠灣",
    status: "即將開始",
    participants: 150,
    maxParticipants: 200,
    category: "環境保護",
    image: "/images/sand.jpg",
    fee: "免費參加",
    coordinator: "林小姐"
  },
  {
    id: 2,
    title: "偏鄉教育志工培訓營",
    description: "為期兩天的志工培訓課程，學習如何在偏鄉地區進行教育服務，培養專業的服務技能。",
    date: "2024-04-15",
    time: "09:00-17:00",
    location: "台北市信義區基金會總部",
    status: "進行中",
    participants: 45,
    maxParticipants: 50,
    category: "教育支持",
    image: "/images/志工.jpg",
    fee: "NT$ 500",
    coordinator: "張老師"
  },
  {
    id: 3,
    title: "銀髮族健康促進活動",
    description: "專為長者設計的健康運動課程，包含太極拳、健康操及營養諮詢。",
    date: "2024-03-30",
    time: "14:00-16:00",
    location: "台中市西區社區活動中心",
    status: "已結束",
    participants: 80,
    maxParticipants: 80,
    category: "社會關懷",
    image: "/images/銀髮族.jpg",
    fee: "免費參加",
    coordinator: "王護理師"
  },
  {
    id: 4,
    title: "青少年領袖培育營",
    description: "培養青少年領導能力與社會責任感，透過團體活動與服務學習建立正確價值觀。",
    date: "2024-05-01",
    time: "09:00-17:00",
    location: "南投縣日月潭青年活動中心",
    status: "即將開始",
    participants: 32,
    maxParticipants: 40,
    category: "青年發展",
    image: "/images/青少年.jpg",
    fee: "NT$ 1,200",
    coordinator: "陳輔導員"
  },
  {
    id: 5,
    title: "社區關懷送暖活動",
    description: "深入社區關懷獨居長者，提供生活物資、健康檢查及心靈陪伴服務。",
    date: "2024-03-25",
    time: "10:00-16:00",
    location: "高雄市前金區社區",
    status: "已結束",
    participants: 60,
    maxParticipants: 60,
    category: "社會關懷",
    image: "/images/關懷送暖.jpg",
    fee: "免費參加",
    coordinator: "劉社工"
  },
  {
    id: 6,
    title: "兒童閱讀推廣活動",
    description: "透過說故事、閱讀遊戲等方式，培養兒童閱讀興趣，促進語言發展。",
    date: "2024-04-28",
    time: "10:00-12:00",
    location: "花蓮縣光復鄉圖書館",
    status: "即將開始",
    participants: 25,
    maxParticipants: 30,
    category: "教育支持",
    image: "/images/兒童伴讀.jpg",
    fee: "免費參加",
    coordinator: "李老師"
  },
];

const statusTypes = [
  { name: "全部", value: "" },
  { name: "即將開始", value: "即將開始" },
  { name: "進行中", value: "進行中" },
  { name: "已結束", value: "已結束" },
];

const categories = [
  { name: "全部類別", value: "" },
  { name: "環境保護", value: "環境保護" },
  { name: "教育支持", value: "教育支持" },
  { name: "社會關懷", value: "社會關懷" },
  { name: "青年發展", value: "青年發展" },
];

export default function EventsPage() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // 篩選活動
  const filteredEvents = allEvents.filter((event) => {
    const statusMatch = !selectedStatus || event.status === selectedStatus;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  // 狀態樣式
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "即將開始":
        return "bg-green-100 text-green-800 border-green-200";
      case "進行中":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "已結束":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Banner Section */}
      <section className="relative h-100 lg:h-180 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sand.jpg"
            alt="活動列表主區塊"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">活動列表</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            參與我們的公益活動，一起創造正面的社會影響
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12">
            {/* Status Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#333333] mb-4">活動狀態</h3>
              <div className="flex flex-wrap gap-3">
                {statusTypes.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedStatus === status.value
                        ? "bg-[#3498db] text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-[#3498db] hover:text-white"
                    }`}
                  >
                    {status.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#333333] mb-4">活動類別</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category.value
                        ? "bg-[#f1c40f] text-[#333333] shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-[#f1c40f] hover:text-[#333333]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              找到 <span className="font-medium text-[#3498db]">{filteredEvents.length}</span> 個活動
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative">
                    <div className="aspect-[4/4] lg:aspect-[4/4] relative overflow-hidden rounded-xl"> {/* 移除 lg:h-80，讓高度由 aspect ratio 決定 */}
                      <img
                        src={event.image}
                        alt={event.title}
                        // 確保圖片完全覆蓋這個 aspect ratio 容器
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      {/* Status Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium border shadow-sm ${getStatusStyle(event.status)}`}>
                        {event.status}
                      </div>
                    </div>
                  </div>

                  {/* 內容區域 */}
                  <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                    {/* 頂部內容 */}
                    <div className="flex-grow">
                      {/* 類別標籤 */}
                      <div className="mb-4">
                        <span className="bg-[#f1c40f]/20 text-[#333333] px-4 py-2 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                      </div>

                      {/* 標題 */}
                      <h3 className="text-2xl font-bold text-[#333333] mb-4 leading-tight">
                        {event.title}
                      </h3>

                      {/* 描述 */}
                      <p className="text-gray-600 text-base mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* 活動詳情 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                            <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-2V7" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-[#333333]">活動時間</div>
                            <div className="text-sm">{new Date(event.date).toLocaleDateString('zh-TW')} {event.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                            <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-[#333333]">活動地點</div>
                            <div className="text-sm">{event.location}</div>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                            <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-[#333333]">參與人數</div>
                            <div className="text-sm">{event.participants}/{event.maxParticipants} 人</div>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                            <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-[#333333]">狀態</div>
                            <div className="text-sm">{event.status}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 底部操作按鈕 */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                      <Link
                        href={`/events/${event.id}`}
                        className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-[#333333] px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        查看詳細資訊
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                      {event.status === "即將開始" && (
                        <button className="flex-1 bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          立即報名
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-lg">沒有找到符合條件的活動</p>
              <button 
                onClick={() => {
                  setSelectedStatus("");
                  setSelectedCategory("");
                }}
                className="mt-4 text-[#3498db] hover:text-[#2980b9] font-medium"
              >
                清除所有篩選條件
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}