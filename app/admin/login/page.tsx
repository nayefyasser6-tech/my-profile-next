"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("كلمة المرور غير صحيحة. حاول مرة أخرى.");
    } else {
      router.push("/admin/dashboard"); // التوجيه إلى لوحة التحكم بعد النجاح
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4">
      <div className="bg-[#1E293B] border border-[#38BDF8]/30 rounded-xl p-8 max-w-md w-full shadow-[0_0_15px_rgba(56,189,248,0.2)]">
        <h1 className="text-2xl font-bold text-[#E2E8F0] mb-6 text-center tracking-wide">
          بوابة التحكم <span className="text-[#38BDF8]">السيبرانية</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#94A3B8] mb-2 text-sm font-medium">
              رمز المرور
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0F172A] text-[#E2E8F0] border border-[#475569] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] rounded-lg px-4 py-3 outline-none transition-all"
              placeholder="أدخل الرقم السري..."
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
                type="submit"
                className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              >
                تسجيل الدخول
              </button>
        </form>
      </div>
    </div>
  );
}