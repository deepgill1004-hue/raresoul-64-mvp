import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RareSoul 64｜稀有物種人格圖鑑",
  description: "生成你的 64 型稀有物種人格圖鑑，並延伸到伴侶、親子與職場媒合。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="border-b border-black/10 bg-white/85 backdrop-blur">
          <div className="shell flex h-16 items-center justify-between">
            <Link href="/" className="focus-ring flex items-center gap-2 rounded-md font-semibold text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-white">
                <Sparkles size={18} />
              </span>
              RareSoul 64
            </Link>
            <nav className="flex items-center gap-4 text-sm text-ink/70">
              <Link className="focus-ring rounded-md hover:text-ink" href="/quiz">
                開始測驗
              </Link>
              <Link className="focus-ring rounded-md hover:text-ink" href="/invite">
                媒合邀請
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
