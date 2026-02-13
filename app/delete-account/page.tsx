import { Suspense } from "react";
import DeleteAccountContent from "./delete-account-content";

export default function DeleteAccountPage() {
  return (
    <Suspense fallback={null}>
      <DeleteAccountContent />
    </Suspense>
  );
}
