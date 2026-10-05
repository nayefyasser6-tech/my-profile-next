import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // تأكد أن هذا المسار يطابق موقع ملف إعداد Prisma لديك

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // التحقق من وصول جميع الحقول
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'جميع الحقول مطلوبة' }, { status: 400 });
    }

    // حفظ الرسالة مباشرة في قاعدة بيانات Neon
    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إرسال الرسالة' }, { status: 500 });
  }
}