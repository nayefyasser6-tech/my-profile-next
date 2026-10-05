import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // هذا السطر هو "القفل" الذي يفحص هل المستخدم سجل دخوله أم لا
  const session = await getServerSession(authOptions);

  // إذا لم يكن هناك جلسة تسجيل دخول، اطرده فوراً إلى صفحة الدخول
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#E2E8F0] mb-4">
        مرحباً بك في <span className="text-[#38BDF8]">لوحة التحكم</span>
      </h1>
      <p className="text-[#94A3B8] text-lg">
        (تم اجتياز نظام الحماية بنجاح! نحن جاهزون لربط المكونات هنا في التاسك القادم)
      </p>
    </div>
  );
}