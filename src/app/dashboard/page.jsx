"use client";

import React, { useEffect, useState } from "react";
import Admin from "@/components/Admin";
import ClienteDashboard from "@/components/ClienteDashboard";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userStr = localStorage.getItem("user");


    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setEmail(user?.email);
      } catch (err) {
        console.error("Error parsing user:", err);
        router.push("/"); // vuelve al login si hay error
      }
    } else {
      router.push("/"); // sin login, redirige
    }
  }, []);

  if (!email) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div>
      {email === "oto@oto.com" ? <Admin /> : <ClienteDashboard />}
    </div>
  );
}
