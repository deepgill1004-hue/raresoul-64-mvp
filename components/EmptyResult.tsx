import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EmptyResult() {
  return (
    <main className="shell py-16">
      <div className="rounded-lg border border-ink/10 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-ink">還沒有可讀取的圖鑑</h1>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-ink/65">
          完成測驗後，這裡會顯示你的稀有物種預覽與完整報告。
        </p>
        <Link
          href="/quiz"
          className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
        >
          開始測驗
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
