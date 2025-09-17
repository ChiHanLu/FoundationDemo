import Link from 'next/link';

// 模擬新聞資料 (SSG - 靜態生成)
const allNews = [
  {
    id: 1,
    title: "2024年春季愛心助學計畫啟動",
    excerpt: "我們將為偏鄉地區的孩子提供教育資源，讓每個孩子都有學習的機會。",
    content: "本年度的愛心助學計畫將涵蓋全台15個偏鄉地區，預計幫助超過500名學童，提供學費補助、課後輔導、營養午餐等全方位支援。",
    image: "/images/兒童伴讀.jpg",
    date: "2024-03-15",
    category: "教育支持",
    readTime: "3分鐘",
    author: "教育發展部"
  },
  {
    id: 2,
    title: "環保淨灘活動圓滿結束",
    excerpt: "感謝300位志工的參與，我們成功清理了海岸線，守護美麗的海洋環境。",
    content: "本次淨灘活動在全台5個海岸同時舉行，共清理了超過2噸的海洋垃圾，並進行環境教育宣導，提升民眾環保意識。",
    image: "/images/sand.jpg", 
    date: "2024-03-10",
    category: "環境保護",
    readTime: "4分鐘",
    author: "環境保護部"
  },
  {
    id: 3,
    title: "老人關懷服務持續擴展",
    excerpt: "新增三個服務據點，為更多長者提供溫暖的陪伴與照護服務。",
    content: "隨著高齡化社會的來臨，我們在台中、高雄、花蓮新設服務據點，提供居家關懷、健康檢查、心理支持等多元服務。",
    image: "/images/關懷送暖.jpg",
    date: "2024-03-05",
    category: "社會關懷",
    readTime: "3分鐘",
    author: "社會關懷部"
  },
  {
    id: 4,
    title: "青年志工培訓計畫開始報名",
    excerpt: "培養下一代的公益領袖，讓愛心傳承延續。",
    content: "為期三個月的志工培訓課程，將包含服務技能、溝通技巧等專業訓練，培養具備專業素養的青年志工。",
    image: "/images/青少年.jpg",
    date: "2024-02-28",
    category: "志工培訓",
    readTime: "5分鐘",
    author: "志工發展部"
  },
  {
    id: 5,
    title: "偏鄉數位學習資源建置完成",
    excerpt: "協助偏鄉學校建立數位學習環境，縮短城鄉教育差距。",
    content: "透過建置電腦教室、網路設施，讓偏鄉孩子也能享受優質的數位教育，已完成8所學校的設備更新。",
    image: "/images/偏鄉.jpg",
    date: "2024-02-20",
    category: "教育支持",
    readTime: "4分鐘",
    author: "數位教育組"
  },
  {
    id: 6,
    title: "社區長者健康促進活動",
    excerpt: "推動社區長者參與運動，促進身心健康。",
    content: "結合專業物理治療師設計適合長者的運動課程，已有超過200位長者參與，顯著改善生活品質。",
    image: "/images/銀髮族.jpg",
    date: "2024-02-15",
    category: "社會關懷",
    readTime: "3分鐘",
    author: "健康促進組"
  },
];

const categories = [
  { name: "全部", value: "" },
  { name: "教育支持", value: "教育支持" },
  { name: "環境保護", value: "環境保護" },
  { name: "社會關懷", value: "社會關懷" },
  { name: "志工培訓", value: "志工培訓" },
  { name: "青年發展", value: "青年發展" },
];

export default function NewsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Banner Section */}
      <section className="relative h-100 lg:h-180 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/風景5.jpg"
            alt="最新消息主區塊"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">最新消息</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  category.value === "" 
                    ? "bg-[#3498db] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-[#3498db] hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* 圖片區域 */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#f1c40f] text-[#333333] px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </div>
                </div>

                {/* 內容區域 */}
                <div className="p-6">
                  <time className="text-sm text-[#3498db] font-medium">
                    {new Date(news.date).toLocaleDateString('zh-TW')}
                  </time>
                  <h3 className="text-xl font-bold text-[#333333] mt-2 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] font-medium transition-colors duration-200"
                  >
                    閱讀完整內容
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
              載入更多消息
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}