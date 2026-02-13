import { Suspense } from "react";
import TermsContent from "./terms-content";

export default function TermsPage() {
  return (
    <Suspense fallback={null}>
      <TermsContent />
    </Suspense>
  );
}
