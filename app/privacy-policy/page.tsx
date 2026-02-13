import { Suspense } from "react";
import PrivacyPolicyContent from "./privacy-policy-content";

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={null}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
