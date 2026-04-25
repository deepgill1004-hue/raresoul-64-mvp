import type { ScoringResult } from "@/lib/types";

export function DimensionBars({ result }: { result: ScoringResult }) {
  return (
    <div className="grid gap-4">
      {Object.values(result.dimensions).map((dimension) => (
        <div key={dimension.label}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-ink">{dimension.label}</span>
            <span className="text-ink/60">
              {dimension.leftPercent >= dimension.rightPercent ? dimension.left : dimension.right}
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <span className="text-right text-xs text-ink/60">{dimension.left}</span>
            <div className="h-3 w-44 overflow-hidden rounded-full bg-ink/10 sm:w-72">
              <div className="h-full bg-coral" style={{ width: `${dimension.leftPercent}%` }} />
            </div>
            <span className="text-xs text-ink/60">{dimension.right}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
