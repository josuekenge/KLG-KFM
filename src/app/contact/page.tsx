"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with contact section anchor
    router.push("/#contact");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-white text-lg">Redirecting to contact form...</p>
      </div>
    </div>
  );
}
