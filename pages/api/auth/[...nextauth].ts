import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // هنا نقارن الكلمة المدخلة بالكلمة الموجودة في .env
        if (credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Admin" }; // الدخول ناجح
        }
        return null; // الدخول مرفوض
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // تحويل المستخدم لهذه الصفحة إذا لم يكن مسجل الدخول
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});