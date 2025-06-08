"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("msg") || "Página não encontrada.";

  return <div className="p-8 text-center text-lg">{message}</div>;
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NotFoundPage />
    </Suspense>
  );
}


