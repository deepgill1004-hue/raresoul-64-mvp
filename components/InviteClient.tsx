"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check, Copy, HeartHandshake } from "lucide-react";
import { matchModes, type MatchMode } from "@/lib/matchModes";
import { loadResult } from "@/lib/storage";
import type { ScoringResult } from "@/lib/types";

export function InviteClient() {
  const router = useRouter();
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");
  const [mode, setMode] = useState<MatchMode>("couple");

  useEffect(() => {
    setResult(loadResult());
    setOrigin(window.location.origin);
  }, []);

  const activeMode = matchModes.find((item) => item.id === mode) ?? matchModes[0];
  const ownerCode = result?.internalCode ?? "ENFP-like";
  const inviteToken = `demo-${mode}-${ownerCode}`;
  const inviteUrl = `${origin || "http://127.0.0.1:3000"}/match/${mode}?owner=${encodeURIComponent(
    ownerCode
  )}&invite=${encodeURIComponent(inviteToken)}`;

  const inviteMessage = useMemo(() => {
    return `${activeMode.inviteMessage}\n\n${inviteUrl}`;
  }, [activeMode.inviteMessage, inviteUrl]);

  async function copyAndContinue() {
    await navigator.clipboard.writeText(inviteMessage);
    setCopied(true);
    window.setTimeout(() => {
      router.push(`/match/${mode}?owner=${encodeURIComponent(ownerCode)}&invite=${encodeURIComponent(inviteToken)}`);
    }, 650);
  }

  return (
    <main className="bg-mist">
      <section className="shell py-12">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm md:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-coral/12 text-coral">
            <HeartHandshake size={24} />
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-ink">
            選擇你要建立的媒合關係
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-ink/70">
            RareSoul 64 不是只做伴侶合盤。你可以建立伴侶、親子或職場媒合，對方完成測驗後會進入對應的媒合報告。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {matchModes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`focus-ring rounded-lg border p-5 text-left transition ${
                  mode === item.id
                    ? "border-coral bg-coral/10"
                    : "border-ink/10 bg-mist hover:border-ink/25"
                }`}
              >
                <h2 className="font-semibold text-ink">{item.label}</h2>
                <p className="mt-2 leading-7 text-ink/65">{item.description}</p>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-md border border-ink/10 bg-mist p-5">
            <h2 className="font-semibold text-ink">{activeMode.title}會分析</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {activeMode.dimensions.map((dimension) => (
                <div key={dimension} className="flex items-center gap-2 text-ink/72">
                  <Check className="text-leaf" size={18} />
                  {dimension}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-md border border-ink/10 bg-white p-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h2 className="font-semibold text-ink">邀請訊息預覽</h2>
                <p className="mt-2 text-sm leading-6 text-ink/60">
                  點下複製後，系統會把邀請文字放進剪貼簿，並自動跳到對方會看到的測試入口。
                </p>
              </div>
              <button
                type="button"
                onClick={copyAndContinue}
                className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-moss px-4 py-3 font-semibold text-white hover:bg-ink"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "已複製，正在前往" : "複製並前往測試頁"}
              </button>
            </div>
            <p className="mt-4 whitespace-pre-line rounded-md bg-mist p-4 leading-8 text-ink/72">{inviteMessage}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/match/${mode}?owner=${encodeURIComponent(ownerCode)}&invite=${encodeURIComponent(inviteToken)}`}
              className="focus-ring inline-flex items-center justify-center rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
            >
              直接查看對方測試頁
            </Link>
            <Link
              href="/report"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink hover:border-ink/35"
            >
              回到我的報告
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
