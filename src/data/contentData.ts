// 集中管理新聞和活動的詳細內容數據

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  fullContent?: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  tags?: string[];
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  date: string;
  time: string;
  location: string;
  address?: string;
  status: string;
  participants: number;
  maxParticipants: number;
  category: string;
  image: string;
  organizer?: string;
  contact?: string;
  email?: string;
  fee: string;
  requirements?: string[];
  includes?: string[];
  coordinator: string;
}

// 新聞詳細內容
export const newsDetailContent = {
  1: {
    tags: ["教育", "偏鄉", "助學", "志工"],
    fullContent: `
      <h2>計畫背景</h2>
      <p>教育是改變命運的希望之光。在台灣的偏鄉地區，許多孩子因為家庭經濟困難或教育資源不足，面臨求學路上的重重挑戰。為了讓每個孩子都能享有平等的學習機會，我們啟動了2024年春季愛心助學計畫。</p>
      
      <h2>計畫內容</h2>
      <p>本年度的愛心助學計畫將涵蓋全台15個偏鄉地區，預計幫助超過500名學童：</p>
      <ul>
        <li><strong>學費補助：</strong>提供學雜費、書籍費用補助，減輕家庭經濟負擔</li>
        <li><strong>課後輔導：</strong>安排志工老師進行課後陪讀，加強學習成效</li>
        <li><strong>營養午餐：</strong>確保孩子們有充足的營養，健康成長</li>
        <li><strong>數位學習：</strong>提供平板電腦及網路設備，縮短數位落差</li>
        <li><strong>才藝培養：</strong>開設音樂、美術等才藝課程，發掘孩子潛能</li>
      </ul>
      
      <h2>服務地區</h2>
      <p>本計畫服務的偏鄉地區包括：</p>
      <p>北部：新北市雙溪區、宜蘭縣大同鄉、桃園市復興區<br>
      中部：苗栗縣泰安鄉、台中市和平區、南投縣信義鄉<br>
      南部：嘉義縣阿里山鄉、高雄市茂林區、屏東縣霧台鄉<br>
      東部：花蓮縣萬榮鄉、花蓮縣卓溪鄉、台東縣海端鄉<br>
      離島：澎湖縣望安鄉、金門縣烈嶼鄉、連江縣東引鄉</p>
      
      <h2>預期效益</h2>
      <p>透過這項計畫，我們期待能夠：</p>
      <ul>
        <li>降低偏鄉學童輟學率至5%以下</li>
        <li>提升學童學習成績平均15分以上</li>
        <li>培育100名在地青年志工</li>
        <li>建立5個永續經營的教育服務據點</li>
      </ul>
      
      <h2>如何參與</h2>
      <p>歡迎各界愛心人士共同參與：</p>
      <ul>
        <li><strong>捐款支持：</strong>每月300元即可資助一名孩子的學習</li>
        <li><strong>志工服務：</strong>加入我們的志工團隊，直接服務偏鄉學童</li>
        <li><strong>企業合作：</strong>提供實習機會或職業體驗課程</li>
        <li><strong>物資捐贈：</strong>書籍、文具、電腦設備等學習用品</li>
      </ul>
      
      <p>讓我們攜手為偏鄉孩子點亮希望之光，用愛心築起他們通往未來的橋樑！</p>
    `
  },
  2: {
    tags: ["環保", "淨灘", "海洋", "志工"],
    fullContent: `
      <h2>活動回顧</h2>
      <p>3月10日上午，在溫暖的春日陽光下，我們的環保淨灘活動在全台5個美麗的海岸同時展開。這次活動吸引了300位熱心志工的參與，大家齊心協力，為守護海洋環境貢獻心力。</p>
      
      <h2>活動成果</h2>
      <p>經過一整天的努力，我們取得了令人振奮的成果：</p>
      <ul>
        <li><strong>垃圾清理量：</strong>總共清理超過2公噸的海洋垃圾</li>
        <li><strong>海岸線清潔：</strong>清理了總長15公里的海岸線</li>
        <li><strong>垃圾分類：</strong>回收可再利用物品300公斤</li>
        <li><strong>環境教育：</strong>現場進行海洋生態保護宣導</li>
        <li><strong>數據記錄：</strong>建立海洋垃圾分布資料庫</li>
      </ul>
      
      <h2>活動地點</h2>
      <p>本次淨灘活動選擇了5個具代表性的海岸：</p>
      <ul>
        <li><strong>新北市萬里區翡翠灣：</strong>60位志工參與，清理0.5噸垃圾</li>
        <li><strong>桃園市大園區竹圍漁港：</strong>55位志工參與，清理0.4噸垃圾</li>
        <li><strong>台中市梧棲區梧棲漁港：</strong>65位志工參與，清理0.6噸垃圾</li>
        <li><strong>高雄市旗津區旗津海岸：</strong>70位志工參與，清理0.3噸垃圾</li>
        <li><strong>花蓮縣新城鄉七星潭：</strong>50位志工參與，清理0.2噸垃圾</li>
      </ul>
      
      <h2>發現與省思</h2>
      <p>在清理過程中，我們發現了許多值得省思的問題：</p>
      <ul>
        <li>塑膠瓶和寶特瓶佔垃圾總量的40%</li>
        <li>漁業廢棄物（漁網、浮球等）佔25%</li>
        <li>菸蒂和食品包裝佔20%</li>
        <li>其他生活垃圾佔15%</li>
      </ul>
      
      <h2>環境教育</h2>
      <p>活動現場邀請海洋生物專家進行導覽，志工們學習到：</p>
      <ul>
        <li>海洋垃圾對生態環境的嚴重影響</li>
        <li>塑膠微粒進入食物鏈的危害</li>
        <li>海洋保護的重要性和急迫性</li>
        <li>日常生活中的減塑實踐方法</li>
      </ul>
      
      <h2>後續行動</h2>
      <p>淨灘活動只是開始，我們將持續推動：</p>
      <ul>
        <li><strong>定期淨灘：</strong>每季舉辦一次大型淨灘活動</li>
        <li><strong>校園宣導：</strong>進入學校推廣海洋環保教育</li>
        <li><strong>企業合作：</strong>邀請企業共同參與海洋保護</li>
        <li><strong>政策倡議：</strong>推動減塑相關法規制定</li>
      </ul>
      
      <p>感謝每一位參與的志工朋友，你們的行動讓海洋更美麗，讓地球更健康！讓我們繼續攜手保護這片美麗的藍色家園。</p>
    `
  },
  3: {
    tags: ["社會關懷", "長者", "健康", "照護"],
    fullContent: `
      <h2>服務擴展背景</h2>
      <p>隨著台灣人口高齡化趨勢日益明顯，長者照護需求不斷增加。我們深刻體認到，除了提供基本的生活協助外，更重要的是給予長者們心靈上的陪伴與關懷。因此，我們決定擴展服務據點，讓更多長者能夠感受到社會的溫暖。</p>
      
      <h2>新增服務據點</h2>
      <div class="service-locations">
        <h3>台中市西區服務中心</h3>
        <p><strong>服務範圍：</strong>西區、中區、南區</p>
        <p><strong>服務內容：</strong>居家關懷、健康檢查、復健陪伴、心理支持</p>
        <p><strong>服務人數：</strong>預計服務120位長者</p>
        
        <h3>高雄市前金區服務站</h3>
        <p><strong>服務範圍：</strong>前金區、新興區、苓雅區</p>
        <p><strong>服務內容：</strong>送餐服務、陪伴就醫、生活協助、社交活動</p>
        <p><strong>服務人數：</strong>預計服務150位長者</p>
        
        <h3>花蓮縣吉安鄉據點</h3>
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
      
      <h2>服務團隊</h2>
      <p>我們的專業團隊包括：</p>
      <ul>
        <li>社會工作師：評估需求、制定服務計畫</li>
        <li>護理師：健康評估、用藥指導、傷口照護</li>
        <li>物理治療師：復健指導、運動設計</li>
        <li>營養師：飲食建議、營養評估</li>
        <li>志工夥伴：陪伴關懷、生活協助</li>
      </ul>
      
      <h2>服務成效</h2>
      <p>自服務擴展以來，我們已經看到顯著的成效：</p>
      <ul>
        <li>長者生活滿意度提升85%</li>
        <li>健康狀況改善率達70%</li>
        <li>社交參與度增加60%</li>
        <li>緊急事件處理時間縮短50%</li>
        <li>家屬滿意度達95%以上</li>
      </ul>
      
      <h2>未來展望</h2>
      <p>我們將持續努力，計畫在未來一年內：</p>
      <ul>
        <li>培訓更多專業照護人員</li>
        <li>導入智慧科技輔助照護</li>
        <li>建立跨縣市服務網絡</li>
        <li>推動長者友善社區營造</li>
        <li>發展創新照護服務模式</li>
      </ul>
      
      <p>讓每一位長者都能在熟悉的環境中安心老化，享受有尊嚴、有品質的晚年生活，是我們不變的使命與承諾。</p>
    `
  },
  4: {
    tags: ["志工培訓", "青年", "領導力", "服務學習"],
    fullContent: `
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
      <div class="training-schedule">
        <h3>第一階段：基礎訓練（4週）</h3>
        <ul>
          <li><strong>志工服務導論：</strong>志工精神、服務倫理、法律知識</li>
          <li><strong>溝通表達技巧：</strong>有效溝通、傾聽技巧、衝突處理</li>
          <li><strong>團隊合作能力：</strong>團隊動力、協作技巧、角色認知</li>
          <li><strong>服務技能實務：</strong>基本服務技能、安全注意事項</li>
        </ul>
        
        <h3>第二階段：進階培訓（4週）</h3>
        <ul>
          <li><strong>領導力發展：</strong>領導理論、領導風格、決策技巧</li>
          <li><strong>活動企劃執行：</strong>專案管理、活動設計、資源整合</li>
          <li><strong>社會議題探討：</strong>社會問題分析、解決方案思考</li>
          <li><strong>創新服務模式：</strong>服務創新、科技應用、影響評估</li>
        </ul>
        
        <h3>第三階段：實務實習（4週）</h3>
        <ul>
          <li><strong>服務實作體驗：</strong>實際參與服務活動、現場學習</li>
          <li><strong>專案獨立執行：</strong>設計並執行小型服務專案</li>
          <li><strong>反思與督導：</strong>定期督導會談、經驗分享交流</li>
          <li><strong>成果發表準備：</strong>整理學習成果、準備結業報告</li>
        </ul>
      </div>
      
      <h2>師資陣容</h2>
      <ul>
        <li><strong>學術專家：</strong>大學教授提供理論基礎與學術觀點</li>
        <li><strong>實務工作者：</strong>資深社工、NGO主管分享實務經驗</li>
        <li><strong>企業講師：</strong>企業高階主管傳授管理與領導技巧</li>
        <li><strong>優秀學長姐：</strong>傑出志工校友分享成長歷程</li>
      </ul>
      
      <h2>培訓成果</h2>
      <p>參與培訓的青年志工將獲得：</p>
      <ul>
        <li>正式的志工培訓認證證書</li>
        <li>完整的服務學習紀錄</li>
        <li>優先參與重要服務機會</li>
        <li>持續的督導與支持系統</li>
        <li>終身的志工夥伴網絡</li>
      </ul>
      
      <h2>畢業生出路</h2>
      <p>完成培訓的青年志工可以：</p>
      <ul>
        <li><strong>擔任服務隊長：</strong>帶領新進志工參與各項服務</li>
        <li><strong>成為培訓講師：</strong>協助後續培訓課程的教學工作</li>
        <li><strong>發起創新專案：</strong>結合專業背景發展特色服務</li>
        <li><strong>參與政策倡議：</strong>代表青年發聲，參與社會改革</li>
        <li><strong>投入非營利組織：</strong>成為專職的社會工作者</li>
      </ul>
      
      <p>我們相信每一個參與的青年都能在這個過程中找到自己的使命，成為推動社會正向改變的重要力量！</p>
    `
  },
  5: {
    tags: ["教育支持", "數位學習", "偏鄉", "科技"],
    fullContent: `
      <h2>計畫背景</h2>
      <p>在數位化快速發展的時代，資訊科技已成為學習的重要工具。然而，偏鄉地區因為基礎建設不足、經濟條件限制，往往面臨嚴重的數位落差。為了讓偏鄉孩子也能享受到優質的數位教育資源，我們啟動了這項重要的建置計畫。</p>
      
      <h2>建置成果</h2>
      <div class="achievement-summary">
        <h3>硬體設備建置</h3>
        <ul>
          <li><strong>電腦教室：</strong>完成8所學校共240台電腦設備更新</li>
          <li><strong>網路設施：</strong>建置高速光纖網路，頻寬提升至100M</li>
          <li><strong>互動設備：</strong>安裝智慧電子白板及投影設備</li>
          <li><strong>平板電腦：</strong>提供160台平板供學生個人學習使用</li>
          <li><strong>周邊設備：</strong>印表機、掃描器、視訊設備等配套設施</li>
        </ul>
        
        <h3>軟體資源配置</h3>
        <ul>
          <li><strong>教學軟體：</strong>採購正版教育軟體授權</li>
          <li><strong>數位教材：</strong>建置線上教材資料庫</li>
          <li><strong>學習平台：</strong>導入適性化學習系統</li>
          <li><strong>安全防護：</strong>建立完善的網路安全機制</li>
        </ul>
      </div>
      
      <h2>受惠學校清單</h2>
      <div class="school-list">
        <h3>北部地區</h3>
        <ul>
          <li><strong>新北市雙溪國小：</strong>30台電腦，20台平板</li>
          <li><strong>宜蘭縣大同國中：</strong>40台電腦，25台平板</li>
        </ul>
        
        <h3>中部地區</h3>
        <ul>
          <li><strong>苗栗縣泰安國小：</strong>25台電腦，15台平板</li>
          <li><strong>台中市和平國中：</strong>35台電腦，20台平板</li>
          <li><strong>南投縣信義國小：</strong>30台電腦，18台平板</li>
        </ul>
        
        <h3>南部地區</h3>
        <ul>
          <li><strong>嘉義縣阿里山國中小：</strong>40台電腦，30台平板</li>
          <li><strong>屏東縣霧台國小：</strong>20台電腦，12台平板</li>
        </ul>
        
        <h3>東部地區</h3>
        <ul>
          <li><strong>花蓮縣萬榮國小：</strong>20台電腦，20台平板</li>
        </ul>
      </div>
      
      <h2>教師培訓計畫</h2>
      <p>硬體建置只是第一步，更重要的是提升教師的數位教學能力：</p>
      <ul>
        <li><strong>基礎操作訓練：</strong>電腦基本操作、軟體使用技巧</li>
        <li><strong>數位教學方法：</strong>線上教學設計、數位教材製作</li>
        <li><strong>平台應用實務：</strong>學習管理系統、視訊會議工具</li>
        <li><strong>資訊安全教育：</strong>網路安全、個資保護觀念</li>
        <li><strong>持續支援服務：</strong>定期回訪、技術支援、經驗交流</li>
      </ul>
      
      <h2>學習成效評估</h2>
      <p>建置完成後的初步成效評估顯示：</p>
      <ul>
        <li><strong>學習興趣提升：</strong>90%學生表示對學習更有興趣</li>
        <li><strong>資訊能力增進：</strong>基本電腦技能測驗通過率達85%</li>
        <li><strong>教學效果改善：</strong>教師反映課堂互動增加40%</li>
        <li><strong>自主學習增加：</strong>課後使用數位資源學習時間延長</li>
        <li><strong>城鄉差距縮小：</strong>偏鄉學生數位素養明顯提升</li>
      </ul>
      
      <h2>永續經營策略</h2>
      <p>為確保設備能夠持續發揮效益，我們制定了完善的永續經營計畫：</p>
      <ul>
        <li><strong>定期維護保養：</strong>建立設備維護時程表</li>
        <li><strong>技術支援服務：</strong>提供遠端及現場技術支援</li>
        <li><strong>教師持續培訓：</strong>定期舉辦進階研習課程</li>
        <li><strong>設備更新機制：</strong>規劃設備汰換與升級計畫</li>
        <li><strong>社區資源整合：</strong>結合在地資源支持學校發展</li>
      </ul>
      
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
    `
  },
  6: {
    tags: ["社會關懷", "銀髮族", "健康促進", "社區營造"],
    fullContent: `
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
      <div class="activity-details">
        <h3>太極拳班</h3>
        <p><strong>時間：</strong>每週二、四上午9:00-10:00</p>
        <p><strong>特色：</strong>動作緩慢柔和，有助改善平衡感與肌肉協調</p>
        <p><strong>效益：</strong>降低跌倒風險、改善關節靈活度、舒緩壓力</p>
        
        <h3>銀髮健康操</h3>
        <p><strong>時間：</strong>每週一、三、五上午10:00-11:00</p>
        <p><strong>特色：</strong>結合音樂律動，動作簡單易學</p>
        <p><strong>效益：</strong>增強心肺功能、提升肌力、促進血液循環</p>
        
        <h3>健走活動</h3>
        <p><strong>時間：</strong>每週六上午8:00-9:30</p>
        <p><strong>特色：</strong>戶外健走搭配呼吸訓練</p>
        <p><strong>效益：</strong>增強體力、改善心血管健康、享受自然</p>
        
        <h3>肌力訓練</h3>
        <p><strong>時間：</strong>每週三下午2:00-3:00</p>
        <p><strong>特色：</strong>使用輕量器材進行肌力訓練</p>
        <p><strong>效益：</strong>預防肌肉流失、增強骨密度、改善體態</p>
      </div>
      
      <h2>營養諮詢服務</h2>
      <p>除了運動課程，我們也提供專業的營養指導：</p>
      <ul>
        <li><strong>個人營養評估：</strong>分析個人飲食習慣與營養狀況</li>
        <li><strong>飲食建議：</strong>提供個人化的飲食調整建議</li>
        <li><strong>健康講座：</strong>定期舉辦營養保健知識講座</li>
        <li><strong>食譜分享：</strong>提供適合長者的健康食譜</li>
        <li><strong>用藥諮詢：</strong>協助了解藥物與營養的交互作用</li>
      </ul>
      
      <h2>參與者回饋</h2>
      <div class="participant-feedback">
        <h3>健康改善成果</h3>
        <ul>
          <li><strong>體能提升：</strong>85%參與者表示體力明顯增強</li>
          <li><strong>疼痛緩解：</strong>70%參與者關節疼痛狀況改善</li>
          <li><strong>睡眠品質：</strong>80%參與者睡眠品質提升</li>
          <li><strong>心情愉悅：</strong>95%參與者心情變得更加開朗</li>
          <li><strong>社交增加：</strong>90%參與者結交了新朋友</li>
        </ul>
        
        <h3>參與者感想</h3>
        <blockquote>
          <p>「參加這個活動後，我的膝蓋疼痛改善很多，現在爬樓梯都不會喘了！」</p>
          <cite>— 75歲王奶奶</cite>
        </blockquote>
        
        <blockquote>
          <p>「太極拳讓我學會放鬆，晚上睡得更好，白天精神也更好了。」</p>
          <cite>— 68歲李爺爺</cite>
        </blockquote>
        
        <blockquote>
          <p>「在這裡認識了很多朋友，大家一起運動很開心，比在家看電視有趣多了！」</p>
          <cite>— 72歲陳阿姨</cite>
        </blockquote>
      </div>
      
      <h2>專業團隊</h2>
      <ul>
        <li><strong>復健科醫師：</strong>定期健康檢查與運動處方建議</li>
        <li><strong>物理治療師：</strong>動作指導與復健建議</li>
        <li><strong>運動指導員：</strong>帶領各項運動課程</li>
        <li><strong>營養師：</strong>提供飲食營養諮詢</li>
        <li><strong>社工師：</strong>關懷支持與資源連結</li>
      </ul>
      
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
    `
  }
};

// 活動詳細內容
export const eventDetailContent = {
  1: {
    address: "新北市萬里區翡翠灣海水浴場",
    organizer: "環境保護部",
    contact: "02-1234-5678",
    email: "ocean@brightfuture.org.tw",
    requirements: ["年滿12歲", "身體健康", "具基本游泳能力"],
    includes: ["清潔工具", "環保餐盒", "活動T恤", "保險"],
    fullDescription: `
      <h2>活動簡介</h2>
      <p>夏日海洋守護者淨灘活動是我們年度重要的環保活動之一。隨著夏季的到來，海灘遊客增多，海洋垃圾問題也日益嚴重。我們希望透過這次活動，不僅清理海岸垃圾，更重要的是提升大眾對海洋保護的認知。</p>
      
      <h2>活動流程</h2>
      <h3>上午場次 (09:00-12:00)</h3>
      <ul>
        <li><strong>09:00-09:30：</strong>報到、領取清潔工具及環保袋</li>
        <li><strong>09:30-10:00：</strong>開幕式及安全說明</li>
        <li><strong>10:00-11:30：</strong>分組進行淨灘活動</li>
        <li><strong>11:30-12:00：</strong>垃圾分類及數據統計</li>
      </ul>
      
      <h3>下午場次 (13:00-15:00)</h3>
      <ul>
        <li><strong>13:00-13:30：</strong>環保午餐時間</li>
        <li><strong>13:30-14:30：</strong>海洋生態導覽及環境教育</li>
        <li><strong>14:30-15:00：</strong>心得分享及閉幕式</li>
      </ul>
      
      <h2>活動特色</h2>
      <ul>
        <li><strong>專業導覽：</strong>邀請海洋生物學家現場解說</li>
        <li><strong>環保教育：</strong>學習海洋保護知識</li>
        <li><strong>團隊合作：</strong>培養環保意識與團隊精神</li>
        <li><strong>成果展示：</strong>清理成果統計與分享</li>
        <li><strong>環保餐具：</strong>全程使用可重複利用餐具</li>
      </ul>
      
      <h2>報名資格</h2>
      <ul>
        <li>年滿12歲以上身體健康者</li>
        <li>18歲以下需家長同意書</li>
        <li>具備基本游泳能力（安全考量）</li>
        <li>願意遵守活動規範</li>
      </ul>
      
      <h2>攜帶物品</h2>
      <ul>
        <li>防曬用品（帽子、防曬乳）</li>
        <li>適合海邊活動的服裝</li>
        <li>個人水瓶</li>
        <li>替換衣物</li>
        <li>個人藥品</li>
      </ul>
      
      <h2>注意事項</h2>
      <ul>
        <li>活動當日如遇颱風或豪雨將延期舉辦</li>
        <li>請勿攜帶貴重物品</li>
        <li>活動期間請聽從工作人員指示</li>
        <li>注意個人安全，避免接觸危險物品</li>
        <li>活動全程將有攝影記錄，用於推廣用途</li>
      </ul>
    `
  },
  2: {
    address: "台北市信義區光復南路123號8樓",
    organizer: "教育發展部",
    contact: "02-8765-4321",
    email: "education@brightfuture.org.tw",
    requirements: ["高中職以上學歷", "熱愛教育工作", "具服務熱忱"],
    includes: ["培訓教材", "午餐便當", "志工認證", "服務機會媒合"],
    fullDescription: `
      <h2>培訓目標</h2>
      <p>偏鄉教育志工培訓營旨在培養專業的教育服務志工，透過系統性的課程訓練，讓志工具備在偏鄉地區進行教育服務的專業知識與技能。我們相信每個孩子都應該享有優質的教育機會，而志工是實現這個目標的重要力量。</p>
      
      <h2>課程內容</h2>
      <h3>第一天課程</h3>
      <ul>
        <li><strong>09:00-10:30：</strong>偏鄉教育現況與挑戰</li>
        <li><strong>10:45-12:15：</strong>志工服務理念與倫理</li>
        <li><strong>13:30-15:00：</strong>教學技巧與方法</li>
        <li><strong>15:15-16:45：</strong>班級經營實務</li>
        <li><strong>17:00-18:00：</strong>小組討論與經驗分享</li>
      </ul>
      
      <h3>第二天課程</h3>
      <ul>
        <li><strong>09:00-10:30：</strong>多元文化教育</li>
        <li><strong>10:45-12:15：</strong>學習輔導策略</li>
        <li><strong>13:30-15:00：</strong>親師溝通技巧</li>
        <li><strong>15:15-16:45：</strong>模擬教學演練</li>
        <li><strong>17:00-18:00：</strong>結業式與認證</li>
      </ul>
      
      <h2>講師陣容</h2>
      <ul>
        <li><strong>王教授：</strong>台灣師範大學教育系，偏鄉教育專家</li>
        <li><strong>陳主任：</strong>資深國小校長，30年教育經驗</li>
        <li><strong>李老師：</strong>偏鄉教學志工資深督導</li>
        <li><strong>張社工：</strong>社會工作師，家庭關係專家</li>
      </ul>
      
      <h2>培訓特色</h2>
      <ul>
        <li><strong>理論與實務並重：</strong>結合學術理論與實地經驗</li>
        <li><strong>互動式教學：</strong>小組討論、角色扮演、案例分析</li>
        <li><strong>模擬演練：</strong>實際教學情境模擬</li>
        <li><strong>經驗傳承：</strong>資深志工經驗分享</li>
        <li><strong>認證制度：</strong>完成培訓可獲得志工認證</li>
      </ul>
      
      <h2>服務機會</h2>
      <p>完成培訓的志工將有機會參與：</p>
      <ul>
        <li>偏鄉學校課後輔導</li>
        <li>閱讀推廣活動</li>
        <li>數位學習支援</li>
        <li>才藝課程教學</li>
        <li>營隊活動帶領</li>
      </ul>
    `
  },
  3: {
    address: "台中市西區社區活動中心",
    organizer: "健康促進部",
    contact: "04-2345-6789",
    email: "health@brightfuture.org.tw",
    requirements: ["年滿55歲", "身體狀況良好", "願意持續參與"],
    includes: ["專業指導", "健康檢測", "營養諮詢", "運動器材"],
    fullDescription: `
      <h2>活動簡介</h2>
      <p>銀髮族健康促進活動是專為長者設計的綜合性健康服務計畫。面對人口高齡化的趨勢，我們認為預防勝於治療，透過規律的運動、正確的營養觀念和社交互動，能夠有效提升長者的生活品質，延緩老化過程。</p>
      
      <h2>活動內容規劃</h2>
      <div class="program-schedule">
        <h3>健康檢測服務 (14:00-14:30)</h3>
        <ul>
          <li><strong>基本生理檢測：</strong>血壓、血糖、體重、體脂率測量</li>
          <li><strong>肌耐力評估：</strong>握力測試、平衡能力檢測</li>
          <li><strong>健康問卷調查：</strong>生活習慣、飲食狀況評估</li>
          <li><strong>個人健康建議：</strong>根據檢測結果提供個人化建議</li>
        </ul>
        
        <h3>太極拳課程 (14:30-15:15)</h3>
        <ul>
          <li><strong>暖身運動：</strong>關節活動、肌肉伸展</li>
          <li><strong>基礎動作教學：</strong>太極拳基本手法、步法</li>
          <li><strong>套路練習：</strong>簡化24式太極拳</li>
          <li><strong>呼吸調節：</strong>配合動作的呼吸方法</li>
        </ul>
        
        <h3>健康操訓練 (15:15-15:45)</h3>
        <ul>
          <li><strong>音樂律動：</strong>配合輕快音樂的全身運動</li>
          <li><strong>肌力訓練：</strong>使用彈力帶進行阻力運動</li>
          <li><strong>協調訓練：</strong>手腳並用的協調性運動</li>
          <li><strong>放鬆運動：</strong>舒緩性伸展運動</li>
        </ul>
        
        <h3>營養諮詢 (15:45-16:00)</h3>
        <ul>
          <li><strong>個人諮詢：</strong>一對一營養師諮詢服務</li>
          <li><strong>團體講座：</strong>銀髮族營養保健知識</li>
          <li><strong>食譜分享：</strong>適合長者的健康料理</li>
          <li><strong>用藥指導：</strong>藥物與食物的交互作用</li>
        </ul>
      </div>
      
      <h2>專業師資團隊</h2>
      <ul>
        <li><strong>王復健師：</strong>20年復健經驗，專精長者運動治療</li>
        <li><strong>李太極教練：</strong>國家級太極拳教練，教學經驗15年</li>
        <li><strong>陳營養師：</strong>專業營養師證照，銀髮族營養專家</li>
        <li><strong>張護理師：</strong>社區護理專業，健康管理經驗豐富</li>
      </ul>
      
      <h2>健康效益</h2>
      <ul>
        <li><strong>預防跌倒：</strong>改善平衡感和下肢肌力</li>
        <li><strong>心血管保健：</strong>促進血液循環，降低心血管疾病風險</li>
        <li><strong>骨質保健：</strong>負重運動有助維持骨密度</li>
        <li><strong>心理健康：</strong>團體活動減少孤獨感，提升情緒</li>
        <li><strong>認知功能：</strong>複雜動作訓練有助維持大腦活力</li>
      </ul>
      
      <h2>報名須知</h2>
      <ul>
        <li>請攜帶健保卡及身分證件</li>
        <li>穿著舒適運動服裝及運動鞋</li>
        <li>自備毛巾及飲用水</li>
        <li>有慢性疾病者請先諮詢醫師</li>
        <li>活動當日請準時報到</li>
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
    `
  },
  4: {
    address: "南投縣日月潭青年活動中心",
    organizer: "青年發展部",
    contact: "049-285-5668",
    email: "youth@brightfuture.org.tw",
    requirements: ["國高中職學生", "具服務熱忱", "願意接受挑戰"],
    includes: ["住宿費用", "三餐餐點", "活動材料", "結業證書"],
    fullDescription: `
      <h2>培育營理念</h2>
      <p>青少年是國家未來的希望，培養具備領導能力與社會責任感的青年領袖，是我們的重要使命。本培育營透過體驗式學習、團體活動和服務實作，協助青少年建立正確的價值觀，發展個人潛能，成為社會的正向力量。</p>
      
      <h2>培育目標</h2>
      <ul>
        <li><strong>自我認識：</strong>探索個人特質、興趣和潛能</li>
        <li><strong>領導能力：</strong>培養組織、溝通、決策等領導技能</li>
        <li><strong>團隊合作：</strong>學習與他人協作，發揮團隊力量</li>
        <li><strong>社會責任：</strong>培養關懷社會、服務他人的精神</li>
        <li><strong>問題解決：</strong>提升面對挑戰的思考與應變能力</li>
      </ul>
      
      <h2>活動行程安排</h2>
      <div class="camp-schedule">
        <h3>第一天：破冰與團隊建立</h3>
        <ul>
          <li><strong>09:00-10:00：</strong>報到與環境介紹</li>
          <li><strong>10:00-12:00：</strong>破冰活動與自我介紹</li>
          <li><strong>14:00-16:00：</strong>團隊建立活動</li>
          <li><strong>16:00-17:00：</strong>領導力測評</li>
          <li><strong>19:30-21:00：</strong>營火晚會</li>
        </ul>
        
        <h3>第二天：挑戰與學習</h3>
        <ul>
          <li><strong>08:00-09:00：</strong>晨間運動</li>
          <li><strong>09:00-12:00：</strong>戶外挑戰活動</li>
          <li><strong>14:00-16:00：</strong>領導力工作坊</li>
          <li><strong>16:00-17:00：</strong>服務學習規劃</li>
          <li><strong>19:30-21:00：</strong>反思分享時間</li>
        </ul>
        
        <h3>第三天：服務與實踐</h3>
        <ul>
          <li><strong>08:00-09:00：</strong>晨間瑜珈</li>
          <li><strong>09:00-12:00：</strong>社區服務實作</li>
          <li><strong>14:00-16:00：</strong>成果發表準備</li>
          <li><strong>16:00-17:00：</strong>結業典禮</li>
        </ul>
      </div>
      
      <h2>特色活動內容</h2>
      <h3>戶外挑戰活動</h3>
      <ul>
        <li><strong>高空繩索：</strong>挑戰個人極限，建立自信心</li>
        <li><strong>團隊定向：</strong>培養團隊合作與問題解決能力</li>
        <li><strong>攀岩體驗：</strong>學習面對困難的堅持精神</li>
        <li><strong>獨木舟：</strong>體驗團隊協調的重要性</li>
      </ul>
      
      <h3>領導力工作坊</h3>
      <ul>
        <li><strong>領導風格探索：</strong>認識不同的領導類型</li>
        <li><strong>溝通技巧訓練：</strong>有效表達與傾聽的技巧</li>
        <li><strong>衝突處理：</strong>學習化解衝突的方法</li>
        <li><strong>決策思考：</strong>培養理性分析與判斷能力</li>
      </ul>
      
      <h3>服務學習實作</h3>
      <ul>
        <li><strong>社區清潔：</strong>實際參與環境整理工作</li>
        <li><strong>長者陪伴：</strong>到安養院關懷長者</li>
        <li><strong>兒童輔導：</strong>協助弱勢兒童課業輔導</li>
        <li><strong>環保宣導：</strong>在社區推廣環保理念</li>
      </ul>
      
      <h2>講師與輔導員</h2>
      <ul>
        <li><strong>專業講師：</strong>青少年發展專家、心理師</li>
        <li><strong>體驗教育師：</strong>戶外活動專業指導員</li>
        <li><strong>青年輔導員：</strong>優秀大學生志工擔任小隊輔</li>
        <li><strong>社工督導：</strong>經驗豐富的社會工作師</li>
      </ul>
      
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
      <ul>
        <li>需家長同意並簽署同意書</li>
        <li>請攜帶個人盥洗用具</li>
        <li>穿著適合戶外活動的服裝</li>
        <li>有特殊疾病請事先告知</li>
        <li>全程參與才能獲得結業證書</li>
      </ul>
    `
  },
  5: {
    address: "高雄市前金區中正四路社區",
    organizer: "社會關懷部",
    contact: "07-2468-1357",
    email: "care@brightfuture.org.tw",
    requirements: ["熱心公益", "有愛心耐心", "體力狀況良好"],
    includes: ["關懷物資", "交通費用", "志工餐點", "服務證明"],
    fullDescription: `
      <h2>活動緣起</h2>
      <p>在現代社會中，許多長者因為子女工作繁忙或居住外地，面臨獨居的狀況。這些長者不僅在生活上需要協助，更需要的是心靈上的陪伴與關懷。我們希望透過社區關懷送暖活動，為這些長者帶去溫暖，讓他們感受到社會的關愛。</p>
      
      <h2>服務對象</h2>
      <ul>
        <li><strong>獨居長者：</strong>65歲以上獨居或夫妻同住長者</li>
        <li><strong>低收入戶：</strong>經濟條件較為困難的家庭</li>
        <li><strong>身心障礙者：</strong>行動不便或需要特殊照護者</li>
        <li><strong>高風險家庭：</strong>社工評估需要關懷的家庭</li>
      </ul>
      
      <h2>服務內容</h2>
      <div class="service-details">
        <h3>生活物資發放 (10:00-12:00)</h3>
        <ul>
          <li><strong>民生用品：</strong>米、油、麵條等基本生活必需品</li>
          <li><strong>營養品：</strong>牛奶、燕麥、維他命等營養補充品</li>
          <li><strong>日用品：</strong>衛生紙、清潔用品、個人衛生用品</li>
          <li><strong>禦寒用品：</strong>毛毯、保暖衣物（冬季加發）</li>
        </ul>
        
        <h3>健康關懷服務 (12:00-14:00)</h3>
        <ul>
          <li><strong>血壓測量：</strong>專業護理師提供血壓檢測</li>
          <li><strong>血糖檢測：</strong>糖尿病患者血糖監測</li>
          <li><strong>用藥指導：</strong>藥師提供正確用藥諮詢</li>
          <li><strong>健康諮詢：</strong>基本健康問題解答</li>
        </ul>
        
        <h3>心靈陪伴時光 (14:00-16:00)</h3>
        <ul>
          <li><strong>聊天陪伴：</strong>志工與長者溫馨對話</li>
          <li><strong>生活近況關懷：</strong>了解長者最近的生活狀況</li>
          <li><strong>情緒支持：</strong>傾聽長者的心聲與煩惱</li>
          <li><strong>活動邀請：</strong>介紹適合的社區活動</li>
        </ul>
      </div>
      
      <h2>服務團隊組成</h2>
      <ul>
        <li><strong>社工師：</strong>負責需求評估與個案管理</li>
        <li><strong>護理師：</strong>提供專業健康檢測服務</li>
        <li><strong>藥師：</strong>協助用藥安全指導</li>
        <li><strong>志工夥伴：</strong>負責物資發放與陪伴關懷</li>
        <li><strong>社區領袖：</strong>協助聯繫與在地資源整合</li>
      </ul>
      
      <h2>關懷流程</h2>
      <div class="care-process">
        <h3>事前準備</h3>
        <ul>
          <li>社工進行家戶訪查，建立服務名單</li>
          <li>準備關懷物資與健檢設備</li>
          <li>志工行前說明與分組</li>
          <li>聯繫服務對象確認時間</li>
        </ul>
        
        <h3>服務執行</h3>
        <ul>
          <li>到府關懷訪視服務</li>
          <li>健康狀況評估與記錄</li>
          <li>物資發放與使用說明</li>
          <li>心理支持與情感陪伴</li>
        </ul>
        
        <h3>後續追蹤</h3>
        <ul>
          <li>建立個案服務記錄</li>
          <li>定期電話關懷追蹤</li>
          <li>緊急狀況處理機制</li>
          <li>轉介其他專業服務</li>
        </ul>
      </div>
      
      <h2>服務成效</h2>
      <p>本次活動預計達成：</p>
      <ul>
        <li><strong>服務家戶：</strong>60個需要關懷的家庭</li>
        <li><strong>受惠人數：</strong>約80位長者及家屬</li>
        <li><strong>物資價值：</strong>總價值約15萬元的關懷物資</li>
        <li><strong>健康檢測：</strong>提供200人次的健康檢測</li>
        <li><strong>志工參與：</strong>動員60位愛心志工</li>
      </ul>
      
      <h2>溫馨小故事</h2>
      <blockquote>
        <p>上次活動中，我們遇到一位92歲的陳爺爺，他說：「你們來看我，比過年還開心！」這句話讓所有志工都紅了眼眶。</p>
      </blockquote>
      
      <h2>持續關懷計畫</h2>
      <p>活動不只是一天的關懷，我們建立了完整的後續服務：</p>
      <ul>
        <li>每月定期電話關懷</li>
        <li>節慶特別關懷活動</li>
        <li>緊急狀況24小時專線</li>
        <li>醫療陪伴服務</li>
        <li>社區鄰里互助網絡建立</li>
      </ul>
    `
  },
  6: {
    address: "花蓮縣光復鄉圖書館",
    organizer: "教育發展部",
    contact: "03-8703-456",
    email: "reading@brightfuture.org.tw",
    requirements: ["3-12歲兒童", "家長陪同", "對閱讀有興趣"],
    includes: ["精美繪本", "閱讀材料", "小點心", "紀念品"],
    fullDescription: `
      <h2>活動宗旨</h2>
      <p>閱讀是開啟智慧之門的鑰匙，也是培養想像力與創造力的重要途徑。我們希望透過生動有趣的說故事活動和互動遊戲，激發孩子們對閱讀的興趣，讓書本成為他們最好的朋友。同時也為偏鄉地區的孩子提供更多接觸優質讀物的機會。</p>
      
      <h2>活動設計理念</h2>
      <ul>
        <li><strong>互動式學習：</strong>透過遊戲和互動增進學習效果</li>
        <li><strong>多元化內容：</strong>結合不同類型的故事和活動</li>
        <li><strong>分齡適性：</strong>根據不同年齡設計適合的內容</li>
        <li><strong>親子共讀：</strong>鼓勵家長參與，建立家庭閱讀習慣</li>
        <li><strong>在地文化：</strong>融入當地文化特色和語言</li>
      </ul>
      
      <h2>活動流程</h2>
      <div class="activity-schedule">
        <h3>暖身時間 (10:00-10:15)</h3>
        <ul>
          <li><strong>歡迎歌曲：</strong>大家一起唱歡迎歌</li>
          <li><strong>自我介紹：</strong>孩子們輪流自我介紹</li>
          <li><strong>活動說明：</strong>介紹今天的活動內容</li>
        </ul>
        
        <h3>故事時間 (10:15-10:45)</h3>
        <ul>
          <li><strong>主題故事：</strong>專業說故事老師生動演講</li>
          <li><strong>互動問答：</strong>與孩子們討論故事內容</li>
          <li><strong>角色扮演：</strong>讓孩子們演出故事角色</li>
        </ul>
        
        <h3>閱讀遊戲 (10:45-11:15)</h3>
        <ul>
          <li><strong>字詞遊戲：</strong>透過遊戲學習新字彙</li>
          <li><strong>圖畫創作：</strong>畫出故事中印象深刻的場景</li>
          <li><strong>故事接龍：</strong>大家一起創作新故事</li>
        </ul>
        
        <h3>親子共讀 (11:15-11:45)</h3>
        <ul>
          <li><strong>家長參與：</strong>邀請家長一起參與閱讀</li>
          <li><strong>選書指導：</strong>教導如何為孩子選擇適合的書籍</li>
          <li><strong>共讀技巧：</strong>分享親子共讀的方法與技巧</li>
        </ul>
        
        <h3>分享時光 (11:45-12:00)</h3>
        <ul>
          <li><strong>心得分享：</strong>孩子們分享今天的收穫</li>
          <li><strong>書籍推薦：</strong>推薦適合的延伸閱讀書籍</li>
          <li><strong>贈送紀念品：</strong>每個孩子都能帶回精美繪本</li>
        </ul>
      </div>
      
      <h2>精選故事書單</h2>
      <div class="book-selection">
        <h3>幼兒組 (3-6歲)</h3>
        <ul>
          <li><strong>《小紅帽》：</strong>經典童話，學習自我保護</li>
          <li><strong>《三隻小豬》：</strong>培養勤勞與智慧的品格</li>
          <li><strong>《愛心樹》：</strong>體會無私奉獻的愛</li>
          <li><strong>《彩虹魚》：</strong>學習分享與友誼</li>
        </ul>
        
        <h3>兒童組 (7-12歲)</h3>
        <ul>
          <li><strong>《夏綠蒂的網》：</strong>友誼與生命的意義</li>
          <li><strong>《小王子》：</strong>純真與人生哲理</li>
          <li><strong>《獅子與老鼠》：</strong>助人為樂的重要</li>
          <li><strong>《台灣民間故事》：</strong>認識在地文化</li>
        </ul>
      </div>
      
      <h2>說故事老師介紹</h2>
      <ul>
        <li><strong>林老師：</strong>兒童文學碩士，15年說故事經驗</li>
        <li><strong>王老師：</strong>幼教專業，擅長互動式教學</li>
        <li><strong>陳老師：</strong>戲劇表演背景，故事演出生動活潑</li>
        <li><strong>在地志工：</strong>熟悉當地文化的社區志工</li>
      </ul>
      
      <h2>閱讀推廣策略</h2>
      <ul>
        <li><strong>建立閱讀角：</strong>在圖書館設置兒童專屬閱讀空間</li>
        <li><strong>巡迴說故事：</strong>定期到各社區進行說故事活動</li>
        <li><strong>親子讀書會：</strong>成立家長與孩子的讀書分享團體</li>
        <li><strong>閱讀獎勵：</strong>設計閱讀集點制度鼓勵持續閱讀</li>
        <li><strong>數位資源：</strong>提供線上故事音檔和電子書</li>
      </ul>
      
      <h2>預期效益</h2>
      <ul>
        <li><strong>培養閱讀興趣：</strong>讓孩子愛上閱讀，主動接觸書籍</li>
        <li><strong>提升語言能力：</strong>增進詞彙量和表達能力</li>
        <li><strong>促進想像力：</strong>透過故事激發創意思考</li>
        <li><strong>建立親子關係：</strong>增進家長與孩子的互動</li>
        <li><strong>社區連結：</strong>凝聚社區向心力，建立學習網絡</li>
      </ul>
      
      <h2>後續規劃</h2>
      <p>活動結束後，我們將：</p>
      <ul>
        <li>建立參與兒童的閱讀檔案</li>
        <li>提供家長閱讀指導資源</li>
        <li>定期舉辦後續閱讀活動</li>
        <li>與學校合作推動閱讀教育</li>
        <li>發展行動圖書車服務</li>
      </ul>
      
      <h2>報名須知</h2>
      <ul>
        <li>活動完全免費，歡迎踴躍參加</li>
        <li>建議家長陪同參與效果更佳</li>
        <li>每場限額30名兒童</li>
        <li>請攜帶水壺和小毛巾</li>
        <li>活動將進行攝影記錄用於推廣</li>
      </ul>
    `
  }
};

// 分類選項
export const newsCategories = [
  { name: "全部", value: "" },
  { name: "教育支持", value: "教育支持" },
  { name: "環境保護", value: "環境保護" },
  { name: "社會關懷", value: "社會關懷" },
  { name: "志工培訓", value: "志工培訓" },
  { name: "青年發展", value: "青年發展" },
];

export const eventCategories = [
  { name: "全部類別", value: "" },
  { name: "環境保護", value: "環境保護" },
  { name: "教育支持", value: "教育支持" },
  { name: "社會關懷", value: "社會關懷" },
  { name: "青年發展", value: "青年發展" },
];

export const eventStatusTypes = [
  { name: "全部", value: "" },
  { name: "即將開始", value: "即將開始" },
  { name: "進行中", value: "進行中" },
  { name: "已結束", value: "已結束" },
];