import { Suspense } from "react";
import { MatchLandingClient } from "@/components/MatchLandingClient";

export function generateStaticParams() {
  return [{ mode: "partner" }, { mode: "parent-child" }, { mode: "work" }];
}

export default function MatchLandingPage() {
  return (
    <Suspense fallback={null}>
      <MatchLandingClient />
    </Suspense>
  );
}
