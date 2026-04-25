"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getMatchMode } from "@/lib/matchModes";

export function MatchLandingClient() {
  const params = useParams<{ mode: string }>();
  const searchParams = useSearchParams();
  const mode = getMatchMode(params.mode);
  const owner = searchParams.get("owner") ?? "ENFP-like";
  const invite = searchParams.get("invite") ?? "demo-invite";
  const quizHref = `/quiz?mode=${mode.id}&owner=${encodeURIComponent(owner)}&invite=${encodeURIComponent(invite)}`;

  return (
    <main className="bg-mist">
      <section className="shell py-12">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm md:p-10">
          <p className="text-sm font-semibold text-coral">{mode.label}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-ink">{mode.inviteTitle}</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-ink/70">{mode.description}</p>

          <div className="mt-8 rounded-md bg-mist p-5">
            <h2 className="font-semibold text-ink">你完成測驗後會產生：</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {mode.dimensions.map((dimension) => (
                <div key={dimension} className="flex items-center gap-2 text-ink/72">
                  <CheckCircle2 className="text-leaf" size={18} />
                  {dimension}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={quizHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 font-semibold text-white hover:bg-ink"
            >
              開始受邀測驗
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/invite"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink hover:border-ink/35"
            >
              回到媒合入口
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
