import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 基金會資訊 */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <img src="/images/logo.jpg" alt="基金會 Logo" className="w-10 h-10 rounded-full" />
                <span className="text-white font-medium text-lg lg:text-xl">
                  Bright Future
                </span>
              </Link>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              致力於創造更美好的社會，透過各種公益活動與計畫，
              為需要幫助的人們帶來希望與改變。
            </p>
            <div className="flex space-x-4">
              {/* 社群媒體圖標 */}
              <a
                href="#"
                className="w-10 h-10 bg-[#3498db] rounded-full flex items-center justify-center hover:bg-[#2980b9] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3498db] rounded-full flex items-center justify-center hover:bg-[#2980b9] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.199 14.897 3.76 13.747 3.76 12.45c0-1.297.49-2.448 1.297-3.323.875-.875 2.026-1.314 3.323-1.314 1.297 0 2.448.49 3.323 1.314.875.875 1.314 2.026 1.314 3.323 0 1.297-.49 2.448-1.314 3.323-.875.875-2.026 1.314-3.323 1.314z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3498db] rounded-full flex items-center justify-center hover:bg-[#2980b9] transition-colors duration-200"
                aria-label="Line"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-medium mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[#3498db] transition-colors duration-200">
                  最新消息
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-[#3498db] transition-colors duration-200">
                  活動列表
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#3498db] transition-colors duration-200">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#3498db] transition-colors duration-200">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-medium mb-4">聯絡資訊</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-[#3498db]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>台北市信義區基金路123號</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#3498db]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(02) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#3498db]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@foundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 分隔線與版權資訊 */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Bright Future. 版權所有.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-[#3498db] text-sm transition-colors duration-200">
                隱私政策
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#3498db] text-sm transition-colors duration-200">
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}