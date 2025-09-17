import Link from 'next/link';
import { notFound } from 'next/navigation';

// 擴展的新聞資料
const allNews = [
  {
    id: 1,
    title: "2024年春季愛心助學計畫啟動",
    excerpt: "我們將為偏鄉地區的孩子提供教育資源，讓每個孩子都有學習的機會。",
    content: `
      <h2>計畫背景</h2>
      <p>教育是改變命運的希望之光。在台灣的偏鄉地區，許多孩子因為家庭經濟困難或教育資源不足，面臨求學路上的重重挑戰。為了讓每個孩子都能享有平等的學習機會，我們啟動了2024年春季愛心助學計畫。</p>
      
      <h2>計畫內容</h2>
      <p>本年度的愛心助學計畫將涵蓋全台15個偏鄉地區，預計幫助超過500名學童：</p>
      <div class="program-features bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg my-6">
        <div class="features-grid grid md:grid-cols-2 gap-4">
          <div class="feature-item bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-blue-700 mb-2">學費補助</h4>
            <p class="text-sm text-gray-600">提供學雜費、書籍費用補助，減輕家庭經濟負擔</p>
          </div>
          <div class="feature-item bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-green-700 mb-2">課後輔導</h4>
            <p class="text-sm text-gray-600">安排志工老師進行課後陪讀，加強學習成效</p>
          </div>
          <div class="feature-item bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-orange-700 mb-2">營養午餐</h4>
            <p class="text-sm text-gray-600">確保孩子們有充足的營養，健康成長</p>
          </div>
          <div class="feature-item bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-700 mb-2">數位學習</h4>
            <p class="text-sm text-gray-600">提供平板電腦及網路設備，縮短數位落差</p>
          </div>
          <div class="feature-item bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-pink-700 mb-2">才藝培養</h4>
            <p class="text-sm text-gray-600">開設音樂、美術等才藝課程，發掘孩子潛能</p>
          </div>
        </div>
      </div>
      
      <h2>服務地區</h2>
      <p>本計畫服務的偏鄉地區包括：</p>
      <div class="service-regions grid md:grid-cols-2 gap-4 my-6">
        <div class="region bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">北部地區</h4>
          <ul class="text-sm space-y-1">
            <li>新北市雙溪區</li>
            <li>宜蘭縣大同鄉</li>
            <li>桃園市復興區</li>
          </ul>
        </div>
        <div class="region bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">中部地區</h4>
          <ul class="text-sm space-y-1">
            <li>苗栗縣泰安鄉</li>
            <li>台中市和平區</li>
            <li>南投縣信義鄉</li>
          </ul>
        </div>
        <div class="region bg-orange-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">南部地區</h4>
          <ul class="text-sm space-y-1">
            <li>嘉義縣阿里山鄉</li>
            <li>高雄市茂林區</li>
            <li>屏東縣霧台鄉</li>
          </ul>
        </div>
        <div class="region bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">東部及離島</h4>
          <ul class="text-sm space-y-1">
            <li>花蓮縣萬榮鄉、卓溪鄉</li>
            <li>台東縣海端鄉</li>
            <li>澎湖縣、金門縣、連江縣</li>
          </ul>
        </div>
      </div>
      
      <h2>預期效益</h2>
      <p>透過這項計畫，我們期待能夠：</p>
      <div class="expected-benefits grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div class="benefit-card bg-emerald-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-emerald-600 mb-2">< 5%</div>
          <div class="text-sm text-gray-600">偏鄉學童輟學率</div>
        </div>
        <div class="benefit-card bg-blue-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-blue-600 mb-2">+15分</div>
          <div class="text-sm text-gray-600">學習成績提升</div>
        </div>
        <div class="benefit-card bg-purple-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-purple-600 mb-2">100名</div>
          <div class="text-sm text-gray-600">在地青年志工</div>
        </div>
        <div class="benefit-card bg-orange-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-orange-600 mb-2">5個</div>
          <div class="text-sm text-gray-600">永續服務據點</div>
        </div>
      </div>
      
      <h2>如何參與</h2>
      <p>歡迎各界愛心人士共同參與：</p>
      <div class="participation-ways grid md:grid-cols-2 gap-4 my-6">
        <div class="way-item bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg">
          <h4 class="font-semibold text-amber-700 mb-2">💰 捐款支持</h4>
          <p class="text-sm text-gray-600">每月300元即可資助一名孩子的學習</p>
        </div>
        <div class="way-item bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-emerald-700 mb-2">🤝 志工服務</h4>
          <p class="text-sm text-gray-600">加入我們的志工團隊，直接服務偏鄉學童</p>
        </div>
        <div class="way-item bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
          <h4 class="font-semibold text-cyan-700 mb-2">🏢 企業合作</h4>
          <p class="text-sm text-gray-600">提供實習機會或職業體驗課程</p>
        </div>
        <div class="way-item bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-pink-700 mb-2">📚 物資捐贈</h4>
          <p class="text-sm text-gray-600">書籍、文具、電腦設備等學習用品</p>
        </div>
      </div>
      
      <div class="call-to-action bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-400 p-6 rounded-lg my-6">
        <p class="text-lg font-medium text-indigo-800">讓我們攜手為偏鄉孩子點亮希望之光，用愛心築起他們通往未來的橋樑！</p>
      </div>
    `,
    image: "/images/兒童伴讀.jpg",
    date: "2024-03-15",
    category: "教育支持",
    author: "教育發展部",
    tags: ["教育", "偏鄉", "助學", "志工"],
    readTime: "5分鐘",
  },
  {
    id: 2,
    title: "環保淨灘活動圓滿結束",
    excerpt: "感謝300位志工的參與，我們成功清理了海岸線，守護美麗的海洋環境。",
    content: `
      <h2>活動回顧</h2>
      <p>3月10日上午，在溫暖的春日陽光下，我們的環保淨灘活動在全台5個美麗的海岸同時展開。這次活動吸引了300位熱心志工的參與，大家齊心協力，為守護海洋環境貢獻心力。</p>
      
      <h2>活動成果</h2>
      <p>經過一整天的努力，我們取得了令人振奮的成果：</p>
      <div class="achievement-stats grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div class="stat-item bg-blue-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">2噸+</div>
          <div class="text-sm text-gray-600">海洋垃圾清理量</div>
        </div>
        <div class="stat-item bg-green-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">15公里</div>
          <div class="text-sm text-gray-600">海岸線清潔長度</div>
        </div>
        <div class="stat-item bg-orange-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-orange-600 mb-2">300公斤</div>
          <div class="text-sm text-gray-600">回收可利用物品</div>
        </div>
        <div class="stat-item bg-purple-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">300位</div>
          <div class="text-sm text-gray-600">熱心志工參與</div>
        </div>
        <div class="stat-item bg-teal-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-teal-600 mb-2">5個</div>
          <div class="text-sm text-gray-600">同步清理海岸</div>
        </div>
        <div class="stat-item bg-rose-50 p-4 rounded-lg text-center">
          <div class="text-3xl font-bold text-rose-600 mb-2">1個</div>
          <div class="text-sm text-gray-600">垃圾分布資料庫</div>
        </div>
      </div>
      
      <h2>活動地點</h2>
      <p>本次淨灘活動選擇了5個具代表性的海岸：</p>
      <div class="locations-grid grid md:grid-cols-2 gap-4 my-6">
        <div class="location-card bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">新北市萬里區翡翠灣</h4>
          <div class="location-stats flex justify-between text-sm">
            <span class="text-gray-600">志工：60位</span>
            <span class="text-blue-600 font-medium">清理：0.5噸</span>
          </div>
        </div>
        <div class="location-card bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">桃園市大園區竹圍漁港</h4>
          <div class="location-stats flex justify-between text-sm">
            <span class="text-gray-600">志工：55位</span>
            <span class="text-green-600 font-medium">清理：0.4噸</span>
          </div>
        </div>
        <div class="location-card bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">台中市梧棲區梧棲漁港</h4>
          <div class="location-stats flex justify-between text-sm">
            <span class="text-gray-600">志工：65位</span>
            <span class="text-purple-600 font-medium">清理：0.6噸</span>
          </div>
        </div>
        <div class="location-card bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">高雄市旗津區旗津海岸</h4>
          <div class="location-stats flex justify-between text-sm">
            <span class="text-gray-600">志工：70位</span>
            <span class="text-orange-600 font-medium">清理：0.3噸</span>
          </div>
        </div>
        <div class="location-card bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg">
          <h4 class="font-semibold text-teal-700 mb-2">花蓮縣新城鄉七星潭</h4>
          <div class="location-stats flex justify-between text-sm">
            <span class="text-gray-600">志工：50位</span>
            <span class="text-teal-600 font-medium">清理：0.2噸</span>
          </div>
        </div>
      </div>
      
      <h2>發現與省思</h2>
      <p>在清理過程中，我們發現了許多值得省思的問題：</p>
      <div class="waste-analysis bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-red-700 mb-4">垃圾組成分析</h3>
        <div class="waste-breakdown grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="waste-type text-center">
            <div class="text-2xl font-bold text-red-600 mb-1">40%</div>
            <div class="text-sm text-gray-600">塑膠瓶和寶特瓶</div>
          </div>
          <div class="waste-type text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">25%</div>
            <div class="text-sm text-gray-600">漁業廢棄物</div>
          </div>
          <div class="waste-type text-center">
            <div class="text-2xl font-bold text-orange-600 mb-1">20%</div>
            <div class="text-sm text-gray-600">菸蒂和食品包裝</div>
          </div>
          <div class="waste-type text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">15%</div>
            <div class="text-sm text-gray-600">其他生活垃圾</div>
          </div>
        </div>
      </div>
      
      <h2>環境教育</h2>
      <p>活動現場邀請海洋生物專家進行導覽，志工們學習到：</p>
      <div class="education-points grid md:grid-cols-2 gap-4 my-6">
        <div class="point-item bg-indigo-50 p-4 rounded-lg">
          <h4 class="font-semibold text-indigo-700 mb-2">🌊 生態影響</h4>
          <p class="text-sm text-gray-600">海洋垃圾對生態環境的嚴重影響</p>
        </div>
        <div class="point-item bg-red-50 p-4 rounded-lg">
          <h4 class="font-semibold text-red-700 mb-2">🔬 食物鏈危害</h4>
          <p class="text-sm text-gray-600">塑膠微粒進入食物鏈的危害</p>
        </div>
        <div class="point-item bg-emerald-50 p-4 rounded-lg">
          <h4 class="font-semibold text-emerald-700 mb-2">🏃‍♂️ 急迫性</h4>
          <p class="text-sm text-gray-600">海洋保護的重要性和急迫性</p>
        </div>
        <div class="point-item bg-amber-50 p-4 rounded-lg">
          <h4 class="font-semibold text-amber-700 mb-2">♻️ 減塑實踐</h4>
          <p class="text-sm text-gray-600">日常生活中的減塑實踐方法</p>
        </div>
      </div>
      
      <h2>後續行動</h2>
      <p>淨灘活動只是開始，我們將持續推動：</p>
      <div class="future-actions grid md:grid-cols-2 gap-4 my-6">
        <div class="action-item bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-700 mb-2">🌊 定期淨灘</h4>
          <p class="text-sm text-gray-600">每季舉辦一次大型淨灘活動</p>
        </div>
        <div class="action-item bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-700 mb-2">🏫 校園宣導</h4>
          <p class="text-sm text-gray-600">進入學校推廣海洋環保教育</p>
        </div>
        <div class="action-item bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-700 mb-2">🤝 企業合作</h4>
          <p class="text-sm text-gray-600">邀請企業共同參與海洋保護</p>
        </div>
        <div class="action-item bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-700 mb-2">📜 政策倡議</h4>
          <p class="text-sm text-gray-600">推動減塑相關法規制定</p>
        </div>
      </div>
      
      <div class="gratitude-message bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400 p-6 rounded-lg my-6">
        <p class="text-lg font-medium text-cyan-800">感謝每一位參與的志工朋友，你們的行動讓海洋更美麗，讓地球更健康！讓我們繼續攜手保護這片美麗的藍色家園。</p>
      </div>
    `,
    image: "/images/sand.jpg", 
    date: "2024-03-10",
    category: "環境保護",
    author: "環境保護部",
    tags: ["環保", "淨灘", "海洋", "志工"],
    readTime: "4分鐘",
  },
  {
    id: 3,
    title: "老人關懷服務持續擴展",
    excerpt: "新增三個服務據點，為更多長者提供溫暖的陪伴與照護服務。",
    content: `
      <h2>服務擴展背景</h2>
      <p>隨著台灣人口高齡化趨勢日益明顯，長者照護需求不斷增加。我們深刻體認到，除了提供基本的生活協助外，更重要的是給予長者們心靈上的陪伴與關懷。因此，我們決定擴展服務據點，讓更多長者能夠感受到社會的溫暖。</p>
      
      <h2>新增服務據點</h2>
      <div class="service-locations bg-gray-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-blue-600 mb-4">台中市西區服務中心</h3>
        <p><strong>服務範圍：</strong>西區、中區、南區</p>
        <p><strong>服務內容：</strong>居家關懷、健康檢查、復健陪伴、心理支持</p>
        <p><strong>服務人數：</strong>預計服務120位長者</p>
        
        <h3 class="text-lg font-semibold text-blue-600 mb-4 mt-6">高雄市前金區服務站</h3>
        <p><strong>服務範圍：</strong>前金區、新興區、苓雅區</p>
        <p><strong>服務內容：</strong>送餐服務、陪伴就醫、生活協助、社交活動</p>
        <p><strong>服務人數：</strong>預計服務150位長者</p>
        
        <h3 class="text-lg font-semibold text-blue-600 mb-4 mt-6">花蓮縣吉安鄉據點</h3>
        <p><strong>服務範圍：</strong>吉安鄉、壽豐鄉周邊地區</p>
        <p><strong>服務內容：</strong>健康促進、文化活動、技能培訓、代購服務</p>
        <p><strong>服務人數：</strong>預計服務80位長者</p>
      </div>
      
      <h2>多元服務內容</h2>
      <ul>
        <li><strong>居家關懷訪視：</strong>定期探訪獨居或高風險長者，評估生活需求</li>
        <li><strong>健康促進活動：</strong>安排健康檢查、運動課程、營養諮詢</li>
        <li><strong>心理支持服務：</strong>提供傾聽陪伴、心理諮商、憂鬱篩檢</li>
        <li><strong>社交互動機會：</strong>舉辦聚會、才藝課程、慶生會等活動</li>
        <li><strong>生活協助服務：</strong>協助購物、就醫陪伴、居家修繕</li>
        <li><strong>緊急支援系統：</strong>24小時緊急聯絡、醫療協助、家屬通知</li>
      </ul>
      
      <h2>服務成效</h2>
      <p>自服務擴展以來，我們已經看到顯著的成效：</p>
      <div class="stats-grid grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div class="stat-item bg-blue-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-blue-600">85%</div>
          <div class="text-sm text-gray-600">長者生活滿意度提升</div>
        </div>
        <div class="stat-item bg-green-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-green-600">70%</div>
          <div class="text-sm text-gray-600">健康狀況改善率</div>
        </div>
        <div class="stat-item bg-yellow-50 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-yellow-600">95%</div>
          <div class="text-sm text-gray-600">家屬滿意度</div>
        </div>
      </div>
      
      <p>讓每一位長者都能在熟悉的環境中安心老化，享受有尊嚴、有品質的晚年生活，是我們不變的使命與承諾。</p>
    `,
    image: "/images/關懷送暖.jpg",
    date: "2024-03-05",
    category: "社會關懷",
    author: "社會關懷部",
    tags: ["社會關懷", "長者", "健康", "照護"],
    readTime: "4分鐘",
  },
  {
    id: 4,
    title: "青年志工培訓計畫開始報名",
    excerpt: "培養下一代的公益領袖，讓愛心傳承延續。",
    content: `
      <h2>培訓計畫簡介</h2>
      <p>青年是社會的未來棟樑，也是推動公益事業發展的重要力量。我們深信透過系統性的培訓，能夠培養出具備專業素養、服務熱忱和領導能力的青年志工。本計畫結合理論學習與實務操作，為青年朋友提供全方位的成長機會。</p>
      
      <h2>培訓目標</h2>
      <ul>
        <li><strong>培養服務精神：</strong>建立正確的志工服務理念與價值觀</li>
        <li><strong>提升專業技能：</strong>學習溝通技巧、團隊合作、問題解決能力</li>
        <li><strong>發展領導能力：</strong>培養組織管理、活動企劃、人際領導技巧</li>
        <li><strong>增進社會責任感：</strong>深化對社會議題的認知與關懷</li>
        <li><strong>建立服務網絡：</strong>連結志同道合的夥伴，擴展服務影響力</li>
      </ul>
      
      <h2>課程規劃</h2>
      <div class="training-schedule bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-indigo-700 mb-4">第一階段：基礎訓練（4週）</h3>
        <ul class="space-y-2">
          <li><strong>志工服務導論：</strong>志工精神、服務倫理、法律知識</li>
          <li><strong>溝通表達技巧：</strong>有效溝通、傾聽技巧、衝突處理</li>
          <li><strong>團隊合作能力：</strong>團隊動力、協作技巧、角色認知</li>
          <li><strong>服務技能實務：</strong>基本服務技能、安全注意事項</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-indigo-700 mb-4 mt-6">第二階段：進階培訓（4週）</h3>
        <ul class="space-y-2">
          <li><strong>領導力發展：</strong>領導理論、領導風格、決策技巧</li>
          <li><strong>活動企劃執行：</strong>專案管理、活動設計、資源整合</li>
          <li><strong>社會議題探討：</strong>社會問題分析、解決方案思考</li>
          <li><strong>創新服務模式：</strong>服務創新、科技應用、影響評估</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-indigo-700 mb-4 mt-6">第三階段：實務實習（4週）</h3>
        <ul class="space-y-2">
          <li><strong>服務實作體驗：</strong>實際參與服務活動、現場學習</li>
          <li><strong>專案獨立執行：</strong>設計並執行小型服務專案</li>
          <li><strong>反思與督導：</strong>定期督導會談、經驗分享交流</li>
          <li><strong>成果發表準備：</strong>整理學習成果、準備結業報告</li>
        </ul>
      </div>
      
      <h2>培訓成果</h2>
      <p>參與培訓的青年志工將獲得：</p>
      <ul>
        <li>正式的志工培訓認證證書</li>
        <li>完整的服務學習紀錄</li>
        <li>優先參與重要服務機會</li>
        <li>持續的督導與支持系統</li>
        <li>終身的志工夥伴網絡</li>
      </ul>
      
      <p>我們相信每一個參與的青年都能在這個過程中找到自己的使命，成為推動社會正向改變的重要力量！</p>
    `,
    image: "/images/青少年.jpg",
    date: "2024-02-28",
    category: "志工培訓",
    author: "志工發展部",
    tags: ["志工培訓", "青年", "領導力", "服務學習"],
    readTime: "5分鐘",
  },
  {
    id: 5,
    title: "偏鄉數位學習資源建置完成",
    excerpt: "協助偏鄉學校建立數位學習環境，縮短城鄉教育差距。",
    content: `
      <h2>計畫背景</h2>
      <p>在數位化快速發展的時代，資訊科技已成為學習的重要工具。然而，偏鄉地區因為基礎建設不足、經濟條件限制，往往面臨嚴重的數位落差。為了讓偏鄉孩子也能享受到優質的數位教育資源，我們啟動了這項重要的建置計畫。</p>
      
      <h2>建置成果</h2>
      <div class="achievement-summary bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg my-6">
        <h3 class="text-lg font-semibold text-emerald-700 mb-4">硬體設備建置</h3>
        <ul class="space-y-2 mb-6">
          <li><strong>電腦教室：</strong>完成8所學校共240台電腦設備更新</li>
          <li><strong>網路設施：</strong>建置高速光纖網路，頻寬提升至100M</li>
          <li><strong>互動設備：</strong>安裝智慧電子白板及投影設備</li>
          <li><strong>平板電腦：</strong>提供160台平板供學生個人學習使用</li>
          <li><strong>周邊設備：</strong>印表機、掃描器、視訊設備等配套設施</li>
        </ul>
        
        <h3 class="text-lg font-semibold text-emerald-700 mb-4">軟體資源配置</h3>
        <ul class="space-y-2">
          <li><strong>教學軟體：</strong>採購正版教育軟體授權</li>
          <li><strong>數位教材：</strong>建置線上教材資料庫</li>
          <li><strong>學習平台：</strong>導入適性化學習系統</li>
          <li><strong>安全防護：</strong>建立完善的網路安全機制</li>
        </ul>
      </div>
      
      <h2>受惠學校清單</h2>
      <div class="school-list grid md:grid-cols-2 gap-6 my-6">
        <div class="region-group bg-blue-50 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-700 mb-3">北部地區</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>新北市雙溪國小：</strong>30台電腦，20台平板</li>
            <li><strong>宜蘭縣大同國中：</strong>40台電腦，25台平板</li>
          </ul>
        </div>
        
        <div class="region-group bg-purple-50 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-700 mb-3">中部地區</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>苗栗縣泰安國小：</strong>25台電腦，15台平板</li>
            <li><strong>台中市和平國中：</strong>35台電腦，20台平板</li>
            <li><strong>南投縣信義國小：</strong>30台電腦，18台平板</li>
          </ul>
        </div>
        
        <div class="region-group bg-orange-50 p-4 rounded-lg">
          <h3 class="font-semibold text-orange-700 mb-3">南部地區</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>嘉義縣阿里山國中小：</strong>40台電腦，30台平板</li>
            <li><strong>屏東縣霧台國小：</strong>20台電腦，12台平板</li>
          </ul>
        </div>
        
        <div class="region-group bg-teal-50 p-4 rounded-lg">
          <h3 class="font-semibold text-teal-700 mb-3">東部地區</h3>
          <ul class="space-y-1 text-sm">
            <li><strong>花蓮縣萬榮國小：</strong>20台電腦，20台平板</li>
          </ul>
        </div>
      </div>
      
      <h2>學習成效評估</h2>
      <p>建置完成後的初步成效評估顯示：</p>
      <div class="effectiveness-stats grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="stat-card bg-indigo-50 p-4 rounded-lg">
          <div class="text-3xl font-bold text-indigo-600 mb-2">90%</div>
          <div class="text-sm text-gray-600">學生表示對學習更有興趣</div>
        </div>
        <div class="stat-card bg-green-50 p-4 rounded-lg">
          <div class="text-3xl font-bold text-green-600">85%</div>
          <div class="text-sm text-gray-600">基本電腦技能測驗通過率</div>
        </div>
        <div class="stat-card bg-yellow-50 p-4 rounded-lg">
          <div class="text-3xl font-bold text-yellow-600">40%</div>
          <div class="text-sm text-gray-600">課堂互動增加</div>
        </div>
        <div class="stat-card bg-red-50 p-4 rounded-lg">
          <div class="text-3xl font-bold text-red-600">100%</div>
          <div class="text-sm text-gray-600">教師數位教學能力提升</div>
        </div>
      </div>
      
      <h2>未來展望</h2>
      <p>接下來我們將：</p>
      <ul>
        <li>擴展服務至更多偏鄉學校</li>
        <li>發展AI輔助教學應用</li>
        <li>建立偏鄉數位學習聯盟</li>
        <li>培育在地數位教育種子教師</li>
        <li>推動數位學習成果分享平台</li>
      </ul>
      
      <p>透過科技的力量，我們要讓每個偏鄉孩子都能站在同一個起跑線上，擁有平等的學習機會，朝著夢想勇敢前進！</p>
    `,
    image: "/images/偏鄉.jpg",
    date: "2024-02-20",
    category: "教育支持",
    author: "數位教育組",
    tags: ["教育支持", "數位學習", "偏鄉", "科技"],
    readTime: "4分鐘",
  },
  {
    id: 6,
    title: "社區長者健康促進活動",
    excerpt: "推動社區長者參與運動，促進身心健康。",
    content: `
      <h2>活動緣起</h2>
      <p>隨著高齡化社會的來臨，如何讓長者維持健康活力的生活品質，成為重要的社會議題。我們發現許多長者缺乏適當的運動習慣，容易因為身體機能退化而影響生活品質。因此，我們特別設計了這個專為長者量身打造的健康促進活動。</p>
      
      <h2>活動設計理念</h2>
      <p>本活動以「活躍老化」為核心理念，結合以下重要元素：</p>
      <ul>
        <li><strong>安全第一：</strong>所有運動項目都經過專業評估，確保安全性</li>
        <li><strong>適度漸進：</strong>根據個人體能狀況調整運動強度</li>
        <li><strong>趣味互動：</strong>透過團體活動增進社交互動</li>
        <li><strong>專業指導：</strong>由物理治療師、運動指導員專業帶領</li>
        <li><strong>持續追蹤：</strong>定期評估健康狀況與運動成效</li>
      </ul>
      
      <h2>活動內容</h2>
      <div class="activity-details bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-6">
        <div class="activity-item mb-6">
          <h3 class="text-lg font-semibold text-purple-700 mb-2">太極拳班</h3>
          <p><strong>時間：</strong>每週二、四上午9:00-10:00</p>
          <p><strong>特色：</strong>動作緩慢柔和，有助改善平衡感與肌肉協調</p>
          <p><strong>效益：</strong>降低跌倒風險、改善關節靈活度、舒緩壓力</p>
        </div>
        
        <div class="activity-item mb-6">
          <h3 class="text-lg font-semibold text-purple-700 mb-2">銀髮健康操</h3>
          <p><strong>時間：</strong>每週一、三、五上午10:00-11:00</p>
          <p><strong>特色：</strong>結合音樂律動，動作簡單易學</p>
          <p><strong>效益：</strong>增強心肺功能、提升肌力、促進血液循環</p>
        </div>
        
        <div class="activity-item mb-6">
          <h3 class="text-lg font-semibold text-purple-700 mb-2">健走活動</h3>
          <p><strong>時間：</strong>每週六上午8:00-9:30</p>
          <p><strong>特色：</strong>戶外健走搭配呼吸訓練</p>
          <p><strong>效益：</strong>增強體力、改善心血管健康、享受自然</p>
        </div>
        
        <div class="activity-item">
          <h3 class="text-lg font-semibold text-purple-700 mb-2">肌力訓練</h3>
          <p><strong>時間：</strong>每週三下午2:00-3:00</p>
          <p><strong>特色：</strong>使用輕量器材進行肌力訓練</p>
          <p><strong>效益：</strong>預防肌肉流失、增強骨密度、改善體態</p>
        </div>
      </div>
      
      <h2>參與者回饋</h2>
      <div class="participant-feedback my-6">
        <div class="feedback-stats grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div class="stat bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600">85%</div>
            <div class="text-sm text-gray-600">體力明顯增強</div>
          </div>
          <div class="stat bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600">80%</div>
            <div class="text-sm text-gray-600">睡眠品質提升</div>
          </div>
          <div class="stat bg-yellow-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-yellow-600">95%</div>
            <div class="text-sm text-gray-600">心情更加開朗</div>
          </div>
        </div>
        
        <div class="testimonials space-y-4">
          <blockquote class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p class="italic text-gray-700">「參加這個活動後，我的膝蓋疼痛改善很多，現在爬樓梯都不會喘了！」</p>
            <cite class="text-sm text-gray-500 mt-2 block">— 75歲王奶奶</cite>
          </blockquote>
          
          <blockquote class="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
            <p class="italic text-gray-700">「太極拳讓我學會放鬆，晚上睡得更好，白天精神也更好了。」</p>
            <cite class="text-sm text-gray-500 mt-2 block">— 68歲李爺爺</cite>
          </blockquote>
          
          <blockquote class="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p class="italic text-gray-700">「在這裡認識了很多朋友，大家一起運動很開心，比在家看電視有趣多了！」</p>
            <cite class="text-sm text-gray-500 mt-2 block">— 72歲陳阿姨</cite>
          </blockquote>
        </div>
      </div>
      
      <h2>未來規劃</h2>
      <p>基於良好的成效，我們計畫：</p>
      <ul>
        <li>擴大服務範圍至更多社區</li>
        <li>增設水中運動課程</li>
        <li>建立長者健康資料庫</li>
        <li>培訓社區健康促進志工</li>
        <li>發展線上健康指導服務</li>
        <li>與醫療院所建立合作機制</li>
      </ul>
      
      <p>讓每位長者都能擁有健康活力的黃金歲月，是我們持續努力的目標。健康的身體是最大的財富，讓我們一起為長者的健康加油！</p>
    `,
    image: "/images/銀髮族.jpg",
    date: "2024-02-15",
    category: "社會關懷",
    author: "健康促進組",
    tags: ["社會關懷", "銀髮族", "健康促進", "社區營造"],
    readTime: "3分鐘",
  }
];

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsId = parseInt(params.id);
  const newsItem = allNews.find(news => news.id === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header Section */}
      <section className="relative h-80 lg:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#f1c40f] text-[#333333] px-4 py-2 rounded-full text-sm font-medium">
              {newsItem.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {newsItem.title}
          </h1>
          <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
            {newsItem.excerpt}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V5a1 1 0 00-1 1v1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-2V7" />
              </svg>
              {new Date(newsItem.date).toLocaleDateString('zh-TW')}
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {newsItem.author}
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              閱讀時間：{newsItem.readTime}
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-[#333333] mb-4">相關標籤</h3>
            <div className="flex flex-wrap gap-2">
              {newsItem.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-[#3498db] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center text-[#3498db] hover:text-[#2980b9] font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回新聞列表
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}