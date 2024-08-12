"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(formData: {
  services: string;
  duration: string;
  name: string;
  email: string;
  message: string;
}) {
  try {
    const data = await resend.emails.send({
      from: "Igwe Chinonso <onboarding@resend.dev>",
      to: ["igwechinonso77@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate(formData) as React.ReactElement,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
