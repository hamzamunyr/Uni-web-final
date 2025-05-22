import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Ninja",
  description: "Thoughtful stories and perspectives on travel, lifestyle, and personal growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center">


              <div className="font-bold text-xl text-blue-900">Blog Ninja</div>

          


              <nav>
                <ul className="flex space-x-6 text-sm text-gray-600">
                  <li><a href="/about" className="hover:text-blue-800">About</a></li>
                  <li><a href="/contact" className="hover:text-blue-800">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Column 1: About */}
                <div className="md:col-span-1">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Blog Ninja</h4>
                  <p className="text-gray-600 text-sm mb-4">Thoughtful stories and perspectives on travel, lifestyle, and personal growth.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Column 2: Quick Links */}
                <div className="md:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="text-gray-600 hover:text-blue-800">About Us</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-blue-800">Contact</a></li>
                    <li><a href="/newsletter" className="text-gray-600 hover:text-blue-800">Newsletter (Coming soon)</a></li>
                    <li><a href="/privacy" className="text-gray-600 hover:text-blue-800">Privacy Policy (Coming soon)</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Bottom footer */}
              <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">
                  © 2025 Blog Ninja. All rights reserved. by developed by Hamza Munir
                </div>
                <div className="text-sm text-gray-500">
                  <a href="/terms" className="hover:text-blue-800">Terms</a>
                  <span className="mx-2">·</span>
                  <a href="/privacy" className="hover:text-blue-800">Privacy</a>
                  <span className="mx-2">·</span>
                  <a href="/cookies" className="hover:text-blue-800">Cookies</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}