import { Suspense } from "react";
import { MatchResultClient } from "@/components/MatchResultClient";

export function generateStaticParams() {
  return [{ mode: "partner" }, { mode: "parent-child" }, { mode: "work" }];
}

export default function MatchResultPage() {
  return (
    <Suspense fallback={null}>
      <MatchResultClient />
    </Suspense>
  );
}
