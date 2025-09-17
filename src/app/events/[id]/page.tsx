import Link from 'next/link';
import { notFound } from 'next/navigation';

// 擴展的活動資料
const allEvents = [
  {
    id: 1,
    title: "夏日海洋守護者 - 淨灘活動",
    description: "邀請您一起守護美麗的海岸線，為海洋環境盡一份心力。活動包含淨灘、環保教育及海洋生態導覽。",
    fullDescription: `
      <h2>活動簡介</h2>
      <p>夏日海洋守護者淨灘活動是我們年度重要的環保活動之一。隨著夏季的到來，海灘遊客增多，海洋垃圾問題也日益嚴重。我們希望透過這次活動，不僅清理海岸垃圾，更重要的是提升大眾對海洋保護的認知。</p>
      
      <h2>活動流程</h2>
      <div class="schedule-container bg-gradient-to-br from-ocean-50 to-blue-50 p-6 rounded-lg my-6">
        <div class="schedule-grid grid md:grid-cols-2 gap-6">
          <div class="morning-session bg-white p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-blue-700 mb-4">上午場次 (09:00-12:00)</h3>
            <div class="timeline space-y-3">
              <div class="time-slot flex items-start">
                <div class="time-badge bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">09:00-09:30</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">報到集合</h4>
                  <p class="text-sm text-gray-600">領取清潔工具及環保袋</p>
                </div>
              </div>
              <div class="time-slot flex items-start">
                <div class="time-badge bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">09:30-10:00</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">開幕式</h4>
                  <p class="text-sm text-gray-600">安全說明與分組</p>
                </div>
              </div>
              <div class="time-slot flex items-start">
                <div class="time-badge bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">10:00-11:30</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">淨灘行動</h4>
                  <p class="text-sm text-gray-600">分組進行海岸清理</p>
                </div>
              </div>
              <div class="time-slot flex items-start">
                <div class="time-badge bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">11:30-12:00</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">成果統計</h4>
                  <p class="text-sm text-gray-600">垃圾分類及數據記錄</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="afternoon-session bg-white p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-emerald-700 mb-4">下午場次 (13:00-15:00)</h3>
            <div class="timeline space-y-3">
              <div class="time-slot flex items-start">
                <div class="time-badge bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">13:00-13:30</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">環保午餐</h4>
                  <p class="text-sm text-gray-600">享用無塑環保餐點</p>
                </div>
              </div>
              <div class="time-slot flex items-start">
                <div class="time-badge bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">13:30-14:30</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">生態導覽</h4>
                  <p class="text-sm text-gray-600">海洋生物專家解說</p>
                </div>
              </div>
              <div class="time-slot flex items-start">
                <div class="time-badge bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-medium mr-3 mt-1">14:30-15:00</div>
                <div class="content">
                  <h4 class="font-medium text-gray-800">閉幕分享</h4>
                  <p class="text-sm text-gray-600">心得交流與頒獎</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2>活動特色</h2>
      <div class="features-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="feature-card bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">🔬 專業導覽</h4>
          <p class="text-sm text-gray-600">邀請海洋生物學家現場解說</p>
        </div>
        <div class="feature-card bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">📚 環保教育</h4>
          <p class="text-sm text-gray-600">學習海洋保護知識</p>
        </div>
        <div class="feature-card bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">🤝 團隊合作</h4>
          <p class="text-sm text-gray-600">培養環保意識與團隊精神</p>
        </div>
        <div class="feature-card bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">📊 成果展示</h4>
          <p class="text-sm text-gray-600">清理成果統計與分享</p>
        </div>
        <div class="feature-card bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
          <h4 class="font-semibold text-teal-700 mb-2">♻️ 環保餐具</h4>
          <p class="text-sm text-gray-600">全程使用可重複利用餐具</p>
        </div>
      </div>
      
      <h2>報名資格</h2>
      <div class="eligibility-section bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg my-6">
        <div class="eligibility-grid grid md:grid-cols-2 gap-4">
          <div class="requirement-item flex items-center">
            <div class="icon bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">✓</div>
            <span class="text-gray-700">年滿12歲以上身體健康者</span>
          </div>
          <div class="requirement-item flex items-center">
            <div class="icon bg-green-100 text-green-600 p-2 rounded-full mr-3">👨‍👩‍👧‍👦</div>
            <span class="text-gray-700">18歲以下需家長同意書</span>
          </div>
          <div class="requirement-item flex items-center">
            <div class="icon bg-blue-100 text-blue-600 p-2 rounded-full mr-3">🏊‍♂️</div>
            <span class="text-gray-700">具備基本游泳能力（安全考量）</span>
          </div>
          <div class="requirement-item flex items-center">
            <div class="icon bg-orange-100 text-orange-600 p-2 rounded-full mr-3">📋</div>
            <span class="text-gray-700">願意遵守活動規範</span>
          </div>
        </div>
      </div>
      
      <h2>攜帶物品</h2>
      <div class="bring-items bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
        <div class="items-grid grid md:grid-cols-2 gap-4">
          <div class="item-category">
            <h4 class="font-semibold text-amber-700 mb-3">☀️ 防曬用品</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 防曬帽或遮陽帽</li>
              <li>• 防曬乳（SPF30以上）</li>
              <li>• 太陽眼鏡</li>
            </ul>
          </div>
          <div class="item-category">
            <h4 class="font-semibold text-blue-700 mb-3">👕 服裝用品</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 適合海邊活動的服裝</li>
              <li>• 防滑運動鞋或涼鞋</li>
              <li>• 替換衣物</li>
            </ul>
          </div>
          <div class="item-category">
            <h4 class="font-semibold text-green-700 mb-3">🎒 個人用品</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 個人水瓶（環保材質）</li>
              <li>• 小毛巾</li>
              <li>• 個人常用藥品</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>注意事項</h2>
      <div class="notice-section bg-red-50 border-l-4 border-red-400 p-6 rounded-lg my-6">
        <div class="notices-grid grid md:grid-cols-2 gap-4">
          <div class="notice-item flex items-start">
            <div class="icon text-red-500 mr-2 mt-1">⚠️</div>
            <span class="text-sm text-gray-700">活動當日如遇颱風或豪雨將延期舉辦</span>
          </div>
          <div class="notice-item flex items-start">
            <div class="icon text-yellow-500 mr-2 mt-1">💎</div>
            <span class="text-sm text-gray-700">請勿攜帶貴重物品</span>
          </div>
          <div class="notice-item flex items-start">
            <div class="icon text-blue-500 mr-2 mt-1">👥</div>
            <span class="text-sm text-gray-700">活動期間請聽從工作人員指示</span>
          </div>
          <div class="notice-item flex items-start">
            <div class="icon text-green-500 mr-2 mt-1">🛡️</div>
            <span class="text-sm text-gray-700">注意個人安全，避免接觸危險物品</span>
          </div>
          <div class="notice-item flex items-start">
            <div class="icon text-purple-500 mr-2 mt-1">📸</div>
            <span class="text-sm text-gray-700">活動全程將有攝影記錄，用於推廣用途</span>
          </div>
        </div>
      </div>
    `,
    date: "2024-04-20",
    time: "09:00-15:00",
    location: "新北市萬里區翡翠灣",
    address: "新北市萬里區翡翠灣海水浴場",
    status: "即將開始",
    participants: 150,
    maxParticipants: 200,
    category: "環境保護",
    image: "/images/sand.jpg",
    organizer: "環境保護部",
    contact: "02-1234-5678",
    email: "ocean@brightfuture.org.tw",
    fee: "免費參加",
    requirements: ["年滿12歲", "身體健康", "具基本游泳能力"],
    includes: ["清潔工具", "環保餐盒", "活動T恤", "保險"],
    coordinator: "林小姐",
  },
  {
    id: 2,
    title: "偏鄉教育志工培訓營",
    description: "為期兩天的志工培訓課程，學習如何在偏鄉地區進行教育服務，培養專業的服務技能。",
    fullDescription: `
      <h2>培訓目標</h2>
      <p>偏鄉教育志工培訓營旨在培養專業的教育服務志工，透過系統性的課程訓練，讓志工具備在偏鄉地區進行教育服務的專業知識與技能。我們相信每個孩子都應該享有優質的教育機會，而志工是實現這個目標的重要力量。</p>
      
      <h2>課程內容</h2>
      <div class="curriculum-container bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg my-6">
        <div class="days-grid grid md:grid-cols-2 gap-6">
          <div class="day-one bg-white p-5 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-emerald-700 mb-4">第一天課程</h3>
            <div class="schedule-timeline space-y-4">
              <div class="time-block">
                <div class="time-header bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-sm font-medium mb-2">09:00-10:30</div>
                <h4 class="font-medium text-gray-800">偏鄉教育現況與挑戰</h4>
                <p class="text-sm text-gray-600">了解偏鄉教育環境與需求</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium mb-2">10:45-12:15</div>
                <h4 class="font-medium text-gray-800">志工服務理念與倫理</h4>
                <p class="text-sm text-gray-600">建立正確的服務態度與價值觀</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm font-medium mb-2">13:30-15:00</div>
                <h4 class="font-medium text-gray-800">教學技巧與方法</h4>
                <p class="text-sm text-gray-600">學習有效的教學策略</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium mb-2">15:15-16:45</div>
                <h4 class="font-medium text-gray-800">班級經營實務</h4>
                <p class="text-sm text-gray-600">課堂管理與學生互動技巧</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-pink-100 text-pink-700 px-3 py-1 rounded text-sm font-medium mb-2">17:00-18:00</div>
                <h4 class="font-medium text-gray-800">小組討論與經驗分享</h4>
                <p class="text-sm text-gray-600">交流學習心得與疑問</p>
              </div>
            </div>
          </div>
          
          <div class="day-two bg-white p-5 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-teal-700 mb-4">第二天課程</h3>
            <div class="schedule-timeline space-y-4">
              <div class="time-block">
                <div class="time-header bg-teal-100 text-teal-700 px-3 py-1 rounded text-sm font-medium mb-2">09:00-10:30</div>
                <h4 class="font-medium text-gray-800">多元文化教育</h4>
                <p class="text-sm text-gray-600">認識原住民文化與教育</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm font-medium mb-2">10:45-12:15</div>
                <h4 class="font-medium text-gray-800">學習輔導策略</h4>
                <p class="text-sm text-gray-600">個別化學習支援方法</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-rose-100 text-rose-700 px-3 py-1 rounded text-sm font-medium mb-2">13:30-15:00</div>
                <h4 class="font-medium text-gray-800">親師溝通技巧</h4>
                <p class="text-sm text-gray-600">與家長建立良好關係</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-amber-100 text-amber-700 px-3 py-1 rounded text-sm font-medium mb-2">15:15-16:45</div>
                <h4 class="font-medium text-gray-800">模擬教學演練</h4>
                <p class="text-sm text-gray-600">實際演練教學技巧</p>
              </div>
              <div class="time-block">
                <div class="time-header bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium mb-2">17:00-18:00</div>
                <h4 class="font-medium text-gray-800">結業式與認證</h4>
                <p class="text-sm text-gray-600">頒發志工培訓證書</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2>講師陣容</h2>
      <div class="instructors-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="instructor-card bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-1">王教授</h4>
          <p class="text-sm text-gray-600 mb-2">台灣師範大學教育系</p>
          <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">偏鄉教育專家</span>
        </div>
        <div class="instructor-card bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-1">陳主任</h4>
          <p class="text-sm text-gray-600 mb-2">資深國小校長</p>
          <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">30年教育經驗</span>
        </div>
        <div class="instructor-card bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-1">李老師</h4>
          <p class="text-sm text-gray-600 mb-2">偏鄉教學志工資深督導</p>
          <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">實務經驗豐富</span>
        </div>
        <div class="instructor-card bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-1">張社工</h4>
          <p class="text-sm text-gray-600 mb-2">社會工作師</p>
          <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">家庭關係專家</span>
        </div>
      </div>
      
      <h2>培訓特色</h2>
      <div class="features-section bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg my-6">
        <div class="features-grid grid md:grid-cols-2 gap-4">
          <div class="feature-item flex items-start">
            <div class="icon bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3 mt-1">📚</div>
            <div>
              <h4 class="font-semibold text-indigo-700 mb-1">理論與實務並重</h4>
              <p class="text-sm text-gray-600">結合學術理論與實地經驗</p>
            </div>
          </div>
          <div class="feature-item flex items-start">
            <div class="icon bg-green-100 text-green-600 p-2 rounded-full mr-3 mt-1">💬</div>
            <div>
              <h4 class="font-semibold text-green-700 mb-1">互動式教學</h4>
              <p class="text-sm text-gray-600">小組討論、角色扮演、案例分析</p>
            </div>
          </div>
          <div class="feature-item flex items-start">
            <div class="icon bg-orange-100 text-orange-600 p-2 rounded-full mr-3 mt-1">🎭</div>
            <div>
              <h4 class="font-semibold text-orange-700 mb-1">模擬演練</h4>
              <p class="text-sm text-gray-600">實際教學情境模擬</p>
            </div>
          </div>
          <div class="feature-item flex items-start">
            <div class="icon bg-purple-100 text-purple-600 p-2 rounded-full mr-3 mt-1">🤝</div>
            <div>
              <h4 class="font-semibold text-purple-700 mb-1">經驗傳承</h4>
              <p class="text-sm text-gray-600">資深志工經驗分享</p>
            </div>
          </div>
          <div class="feature-item flex items-start">
            <div class="icon bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">🏆</div>
            <div>
              <h4 class="font-semibold text-blue-700 mb-1">認證制度</h4>
              <p class="text-sm text-gray-600">完成培訓可獲得志工認證</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2>服務機會</h2>
      <p>完成培訓的志工將有機會參與：</p>
      <div class="opportunities-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="opportunity-card bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-cyan-700 mb-2">📖 偏鄉學校課後輔導</h4>
          <p class="text-sm text-gray-600">協助學童課業學習與生活適應</p>
        </div>
        <div class="opportunity-card bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
          <h4 class="font-semibold text-emerald-700 mb-2">📚 閱讀推廣活動</h4>
          <p class="text-sm text-gray-600">培養孩子閱讀興趣與習慣</p>
        </div>
        <div class="opportunity-card bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-violet-700 mb-2">💻 數位學習支援</h4>
          <p class="text-sm text-gray-600">協助學校推動數位教育</p>
        </div>
        <div class="opportunity-card bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-rose-700 mb-2">🎨 才藝課程教學</h4>
          <p class="text-sm text-gray-600">發揮專長教授音樂、美術等</p>
        </div>
        <div class="opportunity-card bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
          <h4 class="font-semibold text-amber-700 mb-2">🏕️ 營隊活動帶領</h4>
          <p class="text-sm text-gray-600">帶領學童參與多元學習營隊</p>
        </div>
      </div>
      
      <div class="call-to-action bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-green-800 mb-2">加入我們的志工行列</h3>
        <p class="text-green-700">每個孩子都值得擁有更好的教育機會，您的參與將為偏鄉教育帶來正向改變！</p>
      </div>
    `,
    date: "2024-04-15",
    time: "09:00-17:00",
    location: "台北市信義區基金會總部",
    address: "台北市信義區光復南路123號8樓",
    status: "進行中",
    participants: 45,
    maxParticipants: 50,
    category: "教育支持",
    image: "/images/志工.jpg",
    organizer: "教育發展部",
    contact: "02-8765-4321",
    email: "education@brightfuture.org.tw",
    fee: "NT$ 500（含餐費及教材）",
    requirements: ["高中職以上學歷", "熱愛教育工作", "具服務熱忱"],
    includes: ["培訓教材", "午餐便當", "志工認證", "服務機會媒合"],
    coordinator: "張老師",
  },
  {
    id: 3,
    title: "銀髮族健康促進活動",
    description: "專為長者設計的健康運動課程，包含太極拳、健康操及營養諮詢。",
    fullDescription: `
      <h2>活動簡介</h2>
      <p>銀髮族健康促進活動是專為長者設計的綜合性健康服務計畫。面對人口高齡化的趨勢，我們認為預防勝於治療，透過規律的運動、正確的營養觀念和社交互動，能夠有效提升長者的生活品質，延緩老化過程。</p>
      
      <h2>活動內容規劃</h2>
      <div class="program-schedule bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-rose-700 mb-4">健康檢測服務 (14:00-14:30)</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>基本生理檢測：</strong>血壓、血糖、體重、體脂率測量</li>
          <li><strong>肌耐力評估：</strong>握力測試、平衡能力檢測</li>
          <li><strong>健康問卷調查：</strong>生活習慣、飲食狀況評估</li>
          <li><strong>個人健康建議：</strong>根據檢測結果提供個人化建議</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-rose-700 mb-4">太極拳課程 (14:30-15:15)</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>暖身運動：</strong>關節活動、肌肉伸展</li>
          <li><strong>基礎動作教學：</strong>太極拳基本手法、步法</li>
          <li><strong>套路練習：</strong>簡化24式太極拳</li>
          <li><strong>呼吸調節：</strong>配合動作的呼吸方法</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-rose-700 mb-4">健康操訓練 (15:15-15:45)</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>音樂律動：</strong>配合輕快音樂的全身運動</li>
          <li><strong>肌力訓練：</strong>使用彈力帶進行阻力運動</li>
          <li><strong>協調訓練：</strong>手腳並用的協調性運動</li>
          <li><strong>放鬆運動：</strong>舒緩性伸展運動</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-rose-700 mb-4">營養諮詢 (15:45-16:00)</h3>
        <ul class="space-y-2">
          <li><strong>個人諮詢：</strong>一對一營養師諮詢服務</li>
          <li><strong>團體講座：</strong>銀髮族營養保健知識</li>
          <li><strong>食譜分享：</strong>適合長者的健康料理</li>
          <li><strong>用藥指導：</strong>藥物與食物的交互作用</li>
        </ul>
      </div>
      
      <h2>專業師資團隊</h2>
      <div class="team-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="team-member bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700">王復健師</h4>
          <p class="text-sm text-gray-600">20年復健經驗，專精長者運動治療</p>
        </div>
        <div class="team-member bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700">李太極教練</h4>
          <p class="text-sm text-gray-600">國家級太極拳教練，教學經驗15年</p>
        </div>
        <div class="team-member bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700">陳營養師</h4>
          <p class="text-sm text-gray-600">專業營養師證照，銀髮族營養專家</p>
        </div>
        <div class="team-member bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-semibold text-yellow-700">張護理師</h4>
          <p class="text-sm text-gray-600">社區護理專業，健康管理經驗豐富</p>
        </div>
      </div>
      
      <h2>健康效益</h2>
      <ul>
        <li><strong>預防跌倒：</strong>改善平衡感和下肢肌力</li>
        <li><strong>心血管保健：</strong>促進血液循環，降低心血管疾病風險</li>
        <li><strong>骨質保健：</strong>負重運動有助維持骨密度</li>
        <li><strong>心理健康：</strong>團體活動減少孤獨感，提升情緒</li>
        <li><strong>認知功能：</strong>複雜動作訓練有助維持大腦活力</li>
      </ul>
      
      <h2>持續關懷服務</h2>
      <p>活動結束後，我們將提供：</p>
      <ul>
        <li>個人健康記錄建檔</li>
        <li>定期電話關懷追蹤</li>
        <li>健康資訊定期分享</li>
        <li>後續活動優先報名</li>
        <li>緊急狀況協助聯絡</li>
      </ul>
    `,
    date: "2024-03-30",
    time: "14:00-16:00",
    location: "台中市西區社區活動中心",
    address: "台中市西區社區活動中心",
    status: "已結束",
    participants: 80,
    maxParticipants: 80,
    category: "社會關懷",
    image: "/images/銀髮族.jpg",
    organizer: "健康促進部",
    contact: "04-2345-6789",
    email: "health@brightfuture.org.tw",
    fee: "免費參加",
    requirements: ["年滿55歲", "身體狀況良好", "願意持續參與"],
    includes: ["專業指導", "健康檢測", "營養諮詢", "運動器材"],
    coordinator: "王護理師",
  },
  {
    id: 4,
    title: "青少年領袖培育營",
    description: "培養青少年領導能力與社會責任感，透過團體活動與服務學習建立正確價值觀。",
    fullDescription: `
      <h2>培育營理念</h2>
      <p>青少年是國家未來的希望，培養具備領導能力與社會責任感的青年領袖，是我們的重要使命。本培育營透過體驗式學習、團體活動和服務實作，協助青少年建立正確的價值觀，發展個人潛能，成為社會的正向力量。</p>
      
      <h2>培育目標</h2>
      <div class="goals-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="goal-item bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">自我認識</h4>
          <p class="text-sm text-gray-600">探索個人特質、興趣和潛能</p>
        </div>
        <div class="goal-item bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">領導能力</h4>
          <p class="text-sm text-gray-600">培養組織、溝通、決策等領導技能</p>
        </div>
        <div class="goal-item bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">團隊合作</h4>
          <p class="text-sm text-gray-600">學習與他人協作，發揮團隊力量</p>
        </div>
        <div class="goal-item bg-orange-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">社會責任</h4>
          <p class="text-sm text-gray-600">培養關懷社會、服務他人的精神</p>
        </div>
      </div>
      
      <h2>活動行程安排</h2>
      <div class="camp-schedule bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-indigo-700 mb-4">第一天：破冰與團隊建立</h3>
        <div class="schedule-grid grid md:grid-cols-2 gap-4 mb-6">
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">上午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>09:00-10:00：</strong>報到與環境介紹</li>
              <li><strong>10:00-12:00：</strong>破冰活動與自我介紹</li>
            </ul>
          </div>
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">下午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>14:00-16:00：</strong>團隊建立活動</li>
              <li><strong>16:00-17:00：</strong>領導力測評</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-lg font-semibold text-indigo-700 mb-4">第二天：挑戰與學習</h3>
        <div class="schedule-grid grid md:grid-cols-2 gap-4 mb-6">
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">上午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>08:00-09:00：</strong>晨間運動</li>
              <li><strong>09:00-12:00：</strong>戶外挑戰活動</li>
            </ul>
          </div>
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">下午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>14:00-16:00：</strong>領導力工作坊</li>
              <li><strong>16:00-17:00：</strong>服務學習規劃</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-lg font-semibold text-indigo-700 mb-4">第三天：服務與實踐</h3>
        <div class="schedule-grid grid md:grid-cols-2 gap-4">
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">上午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>08:00-09:00：</strong>晨間瑜珈</li>
              <li><strong>09:00-12:00：</strong>社區服務實作</li>
            </ul>
          </div>
          <div class="time-slot">
            <h4 class="font-medium text-indigo-600">下午</h4>
            <ul class="text-sm space-y-1">
              <li><strong>14:00-16:00：</strong>成果發表準備</li>
              <li><strong>16:00-17:00：</strong>結業典禮</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>特色活動內容</h2>
      <div class="activities-section">
        <h3 class="font-semibold text-gray-800 mb-3">戶外挑戰活動</h3>
        <div class="activities-grid grid md:grid-cols-2 gap-4 mb-6">
          <div class="activity bg-yellow-50 p-3 rounded">
            <h4 class="font-medium text-yellow-700">高空繩索</h4>
            <p class="text-sm text-gray-600">挑戰個人極限，建立自信心</p>
          </div>
          <div class="activity bg-green-50 p-3 rounded">
            <h4 class="font-medium text-green-700">團隊定向</h4>
            <p class="text-sm text-gray-600">培養團隊合作與問題解決能力</p>
          </div>
          <div class="activity bg-blue-50 p-3 rounded">
            <h4 class="font-medium text-blue-700">攀岩體驗</h4>
            <p class="text-sm text-gray-600">學習面對困難的堅持精神</p>
          </div>
          <div class="activity bg-purple-50 p-3 rounded">
            <h4 class="font-medium text-purple-700">獨木舟</h4>
            <p class="text-sm text-gray-600">體驗團隊協調的重要性</p>
          </div>
        </div>
      </div>
      
      <h2>學習成果</h2>
      <p>參與學員將獲得：</p>
      <ul>
        <li>個人領導力評估報告</li>
        <li>服務學習時數認證</li>
        <li>團隊合作能力證明</li>
        <li>終身學習夥伴網絡</li>
        <li>後續發展機會推薦</li>
      </ul>
      
      <h2>報名注意事項</h2>
      <div class="notice-box bg-amber-50 border border-amber-200 p-4 rounded-lg my-4">
        <ul class="space-y-2 text-sm">
          <li>✓ 需家長同意並簽署同意書</li>
          <li>✓ 請攜帶個人盥洗用具</li>
          <li>✓ 穿著適合戶外活動的服裝</li>
          <li>✓ 有特殊疾病請事先告知</li>
          <li>✓ 全程參與才能獲得結業證書</li>
        </ul>
      </div>
    `,
    date: "2024-05-01",
    time: "09:00-17:00",
    location: "南投縣日月潭青年活動中心",
    address: "南投縣日月潭青年活動中心",
    status: "即將開始",
    participants: 32,
    maxParticipants: 40,
    category: "青年發展",
    image: "/images/青少年.jpg",
    organizer: "青年發展部",
    contact: "049-285-5668",
    email: "youth@brightfuture.org.tw",
    fee: "NT$ 1,200（含住宿及餐費）",
    requirements: ["國高中職學生", "具服務熱忱", "願意接受挑戰"],
    includes: ["住宿費用", "三餐餐點", "活動材料", "結業證書"],
    coordinator: "陳輔導員",
  },
  {
    id: 5,
    title: "社區關懷送暖活動",
    description: "深入社區關懷獨居長者，提供生活物資、健康檢查及心靈陪伴服務。",
    fullDescription: `
      <h2>活動緣起</h2>
      <p>在現代社會中，許多長者因為子女工作繁忙或居住外地，面臨獨居的狀況。這些長者不僅在生活上需要協助，更需要的是心靈上的陪伴與關懷。我們希望透過社區關懷送暖活動，為這些長者帶去溫暖，讓他們感受到社會的關愛。</p>
      
      <h2>服務對象</h2>
      <div class="service-targets grid md:grid-cols-2 gap-4 my-6">
        <div class="target-group bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">獨居長者</h4>
          <p class="text-sm text-gray-600">65歲以上獨居或夫妻同住長者</p>
        </div>
        <div class="target-group bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">低收入戶</h4>
          <p class="text-sm text-gray-600">經濟條件較為困難的家庭</p>
        </div>
        <div class="target-group bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">身心障礙者</h4>
          <p class="text-sm text-gray-600">行動不便或需要特殊照護者</p>
        </div>
        <div class="target-group bg-orange-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">高風險家庭</h4>
          <p class="text-sm text-gray-600">社工評估需要關懷的家庭</p>
        </div>
      </div>
      
      <h2>服務內容</h2>
      <div class="service-details bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-emerald-700 mb-4">生活物資發放 (10:00-12:00)</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>民生用品：</strong>米、油、麵條等基本生活必需品</li>
          <li><strong>營養品：</strong>牛奶、燕麥、維他命等營養補充品</li>
          <li><strong>日用品：</strong>衛生紙、清潔用品、個人衛生用品</li>
          <li><strong>禦寒用品：</strong>毛毯、保暖衣物（冬季加發）</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-emerald-700 mb-4">健康關懷服務 (12:00-14:00)</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>血壓測量：</strong>專業護理師提供血壓檢測</li>
          <li><strong>血糖檢測：</strong>糖尿病患者血糖監測</li>
          <li><strong>用藥指導：</strong>藥師提供正確用藥諮詢</li>
          <li><strong>健康諮詢：</strong>基本健康問題解答</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-emerald-700 mb-4">心靈陪伴時光 (14:00-16:00)</h3>
        <ul class="space-y-2">
          <li><strong>聊天陪伴：</strong>志工與長者溫馨對話</li>
          <li><strong>生活近況關懷：</strong>了解長者最近的生活狀況</li>
          <li><strong>情緒支持：</strong>傾聽長者的心聲與煩惱</li>
          <li><strong>活動邀請：</strong>介紹適合的社區活動</li>
        </ul>
      </div>
      
      <h2>關懷流程</h2>
      <div class="care-process my-6">
        <div class="process-steps grid md:grid-cols-3 gap-4">
          <div class="step bg-yellow-50 p-4 rounded-lg">
            <h4 class="font-semibold text-yellow-700 mb-2">事前準備</h4>
            <ul class="text-sm space-y-1">
              <li>社工進行家戶訪查</li>
              <li>準備關懷物資</li>
              <li>志工行前說明</li>
              <li>聯繫服務對象</li>
            </ul>
          </div>
          <div class="step bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-700 mb-2">服務執行</h4>
            <ul class="text-sm space-y-1">
              <li>到府關懷訪視</li>
              <li>健康狀況評估</li>
              <li>物資發放說明</li>
              <li>心理支持陪伴</li>
            </ul>
          </div>
          <div class="step bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-700 mb-2">後續追蹤</h4>
            <ul class="text-sm space-y-1">
              <li>建立服務記錄</li>
              <li>定期電話關懷</li>
              <li>緊急狀況處理</li>
              <li>轉介專業服務</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>服務成效</h2>
      <p>本次活動預計達成：</p>
      <div class="effectiveness-metrics grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div class="metric bg-indigo-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-indigo-600">60個</div>
          <div class="text-sm text-gray-600">服務家戶</div>
        </div>
        <div class="metric bg-green-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-green-600">80位</div>
          <div class="text-sm text-gray-600">受惠長者及家屬</div>
        </div>
        <div class="metric bg-yellow-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-yellow-600">15萬</div>
          <div class="text-sm text-gray-600">關懷物資價值(元)</div>
        </div>
      </div>
      
      <h2>溫馨小故事</h2>
      <div class="story-box bg-gray-50 border-l-4 border-rose-400 p-4 rounded-lg my-4">
        <p class="italic text-gray-700">
          「上次活動中，我們遇到一位92歲的陳爺爺，他說：『你們來看我，比過年還開心！』這句話讓所有志工都紅了眼眶。」
        </p>
      </div>
      
      <h2>持續關懷計畫</h2>
      <p>活動不只是一天的關懷，我們建立了完整的後續服務：</p>
      <ul>
        <li>每月定期電話關懷</li>
        <li>節慶特別關懷活動</li>
        <li>緊急狀況24小時專線</li>
        <li>醫療陪伴服務</li>
        <li>社區鄰里互助網絡建立</li>
      </ul>
    `,
    date: "2024-03-25",
    time: "10:00-16:00",
    location: "高雄市前金區社區",
    address: "高雄市前金區中正四路社區",
    status: "已結束",
    participants: 60,
    maxParticipants: 60,
    category: "社會關懷",
    image: "/images/關懷送暖.jpg",
    organizer: "社會關懷部",
    contact: "07-2468-1357",
    email: "care@brightfuture.org.tw",
    fee: "免費參加",
    requirements: ["熱心公益", "有愛心耐心", "體力狀況良好"],
    includes: ["關懷物資", "交通費用", "志工餐點", "服務證明"],
    coordinator: "劉社工",
  },
  {
    id: 6,
    title: "兒童閱讀推廣活動",
    description: "透過說故事、閱讀遊戲等方式，培養兒童閱讀興趣，促進語言發展。",
    fullDescription: `
      <h2>活動宗旨</h2>
      <p>閱讀是開啟智慧之門的鑰匙，也是培養想像力與創造力的重要途徑。我們希望透過生動有趣的說故事活動和互動遊戲，激發孩子們對閱讀的興趣，讓書本成為他們最好的朋友。同時也為偏鄉地區的孩子提供更多接觸優質讀物的機會。</p>
      
      <h2>活動設計理念</h2>
      <div class="design-principles grid md:grid-cols-2 gap-4 my-6">
        <div class="principle bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">互動式學習</h4>
          <p class="text-sm text-gray-600">透過遊戲和互動增進學習效果</p>
        </div>
        <div class="principle bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">多元化內容</h4>
          <p class="text-sm text-gray-600">結合不同類型的故事和活動</p>
        </div>
        <div class="principle bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">分齡適性</h4>
          <p class="text-sm text-gray-600">根據不同年齡設計適合的內容</p>
        </div>
        <div class="principle bg-orange-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">親子共讀</h4>
          <p class="text-sm text-gray-600">鼓勵家長參與，建立家庭閱讀習慣</p>
        </div>
      </div>
      
      <h2>活動流程</h2>
      <div class="activity-schedule bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg my-6">
        <div class="time-block mb-4">
          <h3 class="text-lg font-semibold text-cyan-700 mb-3">暖身時間 (10:00-10:15)</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>歡迎歌曲：</strong>大家一起唱歡迎歌</li>
            <li><strong>自我介紹：</strong>孩子們輪流自我介紹</li>
            <li><strong>活動說明：</strong>介紹今天的活動內容</li>
          </ul>
        </div>
        
        <div class="time-block mb-4">
          <h3 class="text-lg font-semibold text-cyan-700 mb-3">故事時間 (10:15-10:45)</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>主題故事：</strong>專業說故事老師生動演講</li>
            <li><strong>互動問答：</strong>與孩子們討論故事內容</li>
            <li><strong>角色扮演：</strong>讓孩子們演出故事角色</li>
          </ul>
        </div>
        
        <div class="time-block mb-4">
          <h3 class="text-lg font-semibold text-cyan-700 mb-3">閱讀遊戲 (10:45-11:15)</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>字詞遊戲：</strong>透過遊戲學習新字彙</li>
            <li><strong>圖畫創作：</strong>畫出故事中印象深刻的場景</li>
            <li><strong>故事接龍：</strong>大家一起創作新故事</li>
          </ul>
        </div>
        
        <div class="time-block mb-4">
          <h3 class="text-lg font-semibold text-cyan-700 mb-3">親子共讀 (11:15-11:45)</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>家長參與：</strong>邀請家長一起參與閱讀</li>
            <li><strong>選書指導：</strong>教導如何為孩子選擇適合的書籍</li>
            <li><strong>共讀技巧：</strong>分享親子共讀的方法與技巧</li>
          </ul>
        </div>
        
        <div class="time-block">
          <h3 class="text-lg font-semibold text-cyan-700 mb-3">分享時光 (11:45-12:00)</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>心得分享：</strong>孩子們分享今天的收穫</li>
            <li><strong>書籍推薦：</strong>推薦適合的延伸閱讀書籍</li>
            <li><strong>贈送紀念品：</strong>每個孩子都能帶回精美繪本</li>
          </ul>
        </div>
      </div>
      
      <h2>精選故事書單</h2>
      <div class="book-selection my-6">
        <div class="age-groups grid md:grid-cols-2 gap-6">
          <div class="age-group bg-pink-50 p-4 rounded-lg">
            <h3 class="font-semibold text-pink-700 mb-3">幼兒組 (3-6歲)</h3>
            <ul class="space-y-2 text-sm">
              <li><strong>《小紅帽》：</strong>經典童話，學習自我保護</li>
              <li><strong>《三隻小豬》：</strong>培養勤勞與智慧的品格</li>
              <li><strong>《愛心樹》：</strong>體會無私奉獻的愛</li>
              <li><strong>《彩虹魚》：</strong>學習分享與友誼</li>
            </ul>
          </div>
          
          <div class="age-group bg-indigo-50 p-4 rounded-lg">
            <h3 class="font-semibold text-indigo-700 mb-3">兒童組 (7-12歲)</h3>
            <ul class="space-y-2 text-sm">
              <li><strong>《夏綠蒂的網》：</strong>友誼與生命的意義</li>
              <li><strong>《小王子》：</strong>純真與人生哲理</li>
              <li><strong>《獅子與老鼠》：</strong>助人為樂的重要</li>
              <li><strong>《台灣民間故事》：</strong>認識在地文化</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>預期效益</h2>
      <div class="benefits-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="benefit bg-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-emerald-700">培養閱讀興趣</h4>
          <p class="text-sm text-gray-600">讓孩子愛上閱讀，主動接觸書籍</p>
        </div>
        <div class="benefit bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700">提升語言能力</h4>
          <p class="text-sm text-gray-600">增進詞彙量和表達能力</p>
        </div>
        <div class="benefit bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700">促進想像力</h4>
          <p class="text-sm text-gray-600">透過故事激發創意思考</p>
        </div>
        <div class="benefit bg-rose-50 p-4 rounded-lg">
          <h4 class="font-semibold text-rose-700">建立親子關係</h4>
          <p class="text-sm text-gray-600">增進家長與孩子的互動</p>
        </div>
      </div>
      
      <h2>報名須知</h2>
      <div class="registration-info bg-amber-50 border border-amber-200 p-4 rounded-lg my-4">
        <ul class="space-y-2 text-sm">
          <li>🎈 活動完全免費，歡迎踴躍參加</li>
          <li>👨‍👩‍👧‍👦 建議家長陪同參與效果更佳</li>
          <li>👥 每場限額30名兒童</li>
          <li>🚰 請攜帶水壺和小毛巾</li>
          <li>📸 活動將進行攝影記錄用於推廣</li>
        </ul>
      </div>
      
      <h2>後續規劃</h2>
      <p>活動結束後，我們將：</p>
      <ul>
        <li>建立參與兒童的閱讀檔案</li>
        <li>提供家長閱讀指導資源</li>
        <li>定期舉辦後續閱讀活動</li>
        <li>與學校合作推動閱讀教育</li>
        <li>發展行動圖書車服務</li>
      </ul>
    `,
    date: "2024-04-28",
    time: "10:00-12:00",
    location: "花蓮縣光復鄉圖書館",
    address: "花蓮縣光復鄉圖書館",
    status: "即將開始",
    participants: 25,
    maxParticipants: 30,
    category: "教育支持",
    image: "/images/兒童伴讀.jpg",
    organizer: "教育發展部",
    contact: "03-8703-456",
    email: "reading@brightfuture.org.tw",
    fee: "免費參加",
    requirements: ["3-12歲兒童", "家長陪同", "對閱讀有興趣"],
    includes: ["精美繪本", "閱讀材料", "小點心", "紀念品"],
    coordinator: "李老師",
  }
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id);
  const event = allEvents.find(e => e.id === eventId);

  if (!event) {
    notFound();
  }

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
      {/* Header Section */}
      <section className="relative h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="bg-[#f1c40f] text-[#333333] px-4 py-2 rounded-full text-sm font-medium">
              {event.category}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusStyle(event.status)}`}>
              {event.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {event.title}
          </h1>
          <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
            {event.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                />
              </article>

              {/* Registration Button */}
              {event.status === "即將開始" && (
                <div className="mt-12 p-6 bg-gradient-to-r from-[#3498db] to-[#2980b9] rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">立即報名參加</h3>
                  <p className="mb-4 opacity-90">名額有限，請盡快報名！</p>
                  <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                    我要報名
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Event Info Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-6">活動資訊</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-2V7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">活動日期</div>
                        <div className="text-gray-600">{new Date(event.date).toLocaleDateString('zh-TW')}</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">活動時間</div>
                        <div className="text-gray-600">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">活動地點</div>
                        <div className="text-gray-600">{event.location}</div>
                        <div className="text-sm text-gray-500 mt-1">{event.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">參與人數</div>
                        <div className="text-gray-600">{event.participants}/{event.maxParticipants} 人</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-[#3498db] h-2 rounded-full" 
                            style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#3498db]/10 rounded-full mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#333333]">活動費用</div>
                        <div className="text-gray-600">{event.fee}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-4">聯絡資訊</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#3498db] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <div className="font-medium text-[#333333]">活動負責人</div>
                        <div className="text-gray-600">{event.coordinator}</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#3498db] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium text-[#333333]">聯絡電話</div>
                        <div className="text-gray-600">{event.contact}</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#3498db] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium text-[#333333]">電子信箱</div>
                        <div className="text-gray-600">{event.email}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-4">參加須知</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#333333] mb-2">報名條件</h4>
                      <ul className="space-y-1">
                        {event.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#333333] mb-2">活動包含</h4>
                      <ul className="space-y-1">
                        {event.includes.map((item, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <svg className="w-3 h-3 text-[#3498db] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/events"
              className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回活動列表
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}