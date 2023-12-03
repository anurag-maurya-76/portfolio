"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/app/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateString(senderEmail, 5000)) {
    return {
      error: "Invalid Sender Email ",
    };
  }
  if (!validateString(message, 100)) {
    return {
      error: "Invalid message",
    };
  }
  try {
    let data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "anuragmaurya9345@gmail.com",
      subject: `Email from ${senderEmail}`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      text: message as string,
    });
    return { data };
  } catch (e: unknown) {
    return { error: getErrorMessage(e) };
  }
};
