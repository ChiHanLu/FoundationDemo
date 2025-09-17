import Link from "next/link";
import VideoCarousel from "@/components/VideoCarousel";

// 模擬最新消息資料 (未來可以從 API 或 CMS 獲取)
const latestNews = [
  {
    id: 1,
    title: "2024年春季愛心助學計畫啟動",
    excerpt: "我們將為偏鄉地區的孩子提供教育資源，讓每個孩子都有學習的機會。",
    image: "/images/兒童伴讀.jpg",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "環保淨灘活動圓滿結束",
    excerpt: "感謝300位志工的參與，我們成功清理了海岸線，守護美麗的海洋環境。",
    image: "/images/sand.jpg", 
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "老人關懷服務持續擴展",
    excerpt: "新增三個服務據點，為更多長者提供溫暖的陪伴與照護服務。",
    image: "/images/關懷送暖.jpg",
    date: "2024-03-05",
  },
];

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section - 主視覺區塊 */}
      <section className="relative h-screen overflow-hidden">
        {/* 背景影片輪播 */}
        <VideoCarousel
          videos={["/videos/cloud.mp4", "/videos/ocean.mp4"]}
          autoPlayInterval={8000}
          className="absolute inset-0 z-0"
        />

        {/* 主要內容 */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-3 sm:px-4 lg:px-6 max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            創造希望的力量
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 leading-relaxed opacity-90">
            讓愛與關懷傳遞到每個需要的角落
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/about"
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              了解更多
            </Link>
            <Link
              href="/events"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3498db] px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105"
            >
              參與活動
            </Link>
          </div>
          </div>
        </div>

        {/* 向下滾動指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section - 介紹區塊 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 文字內容 */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
                我們的使命
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                基金會成立以來，始終秉持著「傳遞愛心、創造希望」的理念，
                透過教育支持、環境保護、社會關懷等多元化的公益計畫，
                為社會上需要幫助的人們提供實質的援助與支持。
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                我們相信每一個小小的善舉，都能匯聚成改變世界的巨大力量。
                邀請您一起加入我們的行列，讓這個世界變得更加溫暖美好。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] font-medium text-lg transition-colors duration-200"
              >
                深入了解我們的理念
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* 圖片 */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/風景3.jpg"
                    alt="社群服務圖片"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - 最新消息區塊 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
              最新消息
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              了解我們最新的活動動態和社會影響力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* 圖片區域 */}
                <div className="aspect-[16/10] relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 內容區域 */}
                <div className="p-6">
                  <time className="text-sm text-[#3498db] font-medium">
                    {new Date(news.date).toLocaleDateString('zh-TW')}
                  </time>
                  <h3 className="text-xl font-bold text-[#333333] mt-2 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] font-medium mt-4 transition-colors duration-200"
                  >
                    閱讀更多
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              查看更多消息
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
