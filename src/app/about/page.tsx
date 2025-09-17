import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Banner Section */}
      <section className="relative h-100 lg:h-180 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/風景1.jpg"
            alt="關於我們主區塊"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">關於我們</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            傳遞愛心，創造希望的力量
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
                我們的願景與使命
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  基金會成立於2010年，秉持著「傳遞愛心、創造希望」的核心理念，
                  致力於建立一個更加公平、溫暖且充滿希望的社會。我們相信每一個人
                  都有改變世界的力量，透過集結眾人的愛心與力量，能夠為需要幫助的
                  人們帶來實質的改變。
                </p>
                <p>
                  十多年來，我們專注於教育支持、環境保護、社會關懷及青年發展等
                  四大領域，透過多元化的公益計畫與活動，已成功幫助超過10,000名
                  受益者，並培育了超過3,000名志工，讓愛的力量在社會中不斷傳遞。
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/風景2.jpg"
                    alt="愛心傳遞"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
              核心價值
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我們的行動準則建立在四個核心價值之上，這些價值指引著我們的每一個決策與行動
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
                title: "愛心",
                description: "以無私的愛心關懷每一個需要幫助的生命"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
                title: "創新",
                description: "運用創新思維解決社會問題，創造更大影響力"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "合作",
                description: "相信團結的力量，與各界夥伴攜手創造改變"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: "行動",
                description: "將理念化為具體行動，真正改善社會問題"
              }
            ].map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#3498db]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
              服務領域
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我們專注於四個主要服務領域，透過專業的團隊與豐富的經驗，為社會帶來正面的改變
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "教育支持",
                description: "提供偏鄉教育資源，建立數位學習環境，培育下一代的希望與未來。我們相信教育是改變命運的關鍵，致力於縮短城鄉教育差距。",
                achievements: ["協助50所偏鄉學校", "受益學童超過2,000名", "建置15間數位教室"],
                color: "from-[#3498db] to-[#2980b9]"
              },
              {
                title: "環境保護",
                description: "推動環保意識，組織淨灘淨山活動，守護美麗的自然環境。透過實際行動喚起大眾對環境保護的重視。",
                achievements: ["舉辦80場環保活動", "清理垃圾超過50噸", "參與志工達3,000人次"],
                color: "from-[#27ae60] to-[#229954]"
              },
              {
                title: "社會關懷",
                description: "關懷弱勢族群，提供長者照護、兒童保護等服務，讓社會每個角落都能感受到溫暖與關愛。",
                achievements: ["服務長者超過1,500名", "關懷家庭400戶", "提供餐食服務12,000份"],
                color: "from-[#e74c3c] to-[#c0392b]"
              },
              {
                title: "青年發展",
                description: "培育青年領袖，提供職涯輔導與技能培訓，協助青年發展潛能，成為社會正面力量的推動者。",
                achievements: ["培訓青年志工500名", "提供職涯輔導300人次", "舉辦技能培訓20場"],
                color: "from-[#f39c12] to-[#e67e22]"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#333333] mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#333333] mb-3">重要成果：</h4>
                    {area.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#3498db] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-6">
              我們的團隊
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              一群充滿熱忱的專業人士，致力於為社會創造正面的改變
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "林執行長",
                position: "執行長",
                description: "擁有20年非營利組織管理經驗，致力於推動社會創新與永續發展。"
              },
              {
                name: "陳主任",
                position: "計畫主任",
                description: "專精於教育計畫設計與執行，曾獲得多項社會服務獎項。"
              },
              {
                name: "王經理",
                position: "志工發展經理",
                description: "擁有豐富的志工培訓經驗，致力於建立有效的志工管理制度。"
              }
            ].map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-[#3498db]/20 to-[#f1c40f]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">{member.name}</h3>
                <p className="text-[#3498db] font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3498db] to-[#2980b9]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            加入我們的行列
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            無論是透過捐款、志工服務或參與活動，您的每一份心力都能成為改變世界的力量
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-[#3498db] hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              參與活動
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3498db] px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}