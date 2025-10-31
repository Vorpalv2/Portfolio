import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables");
}

// Do not log secrets in production or console output
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { user } = await req.json();
    const randomID = randomUUID();

    const userData = {
      ID: randomID,
      Name: user.Name,
      Email: user.Email,
      Message: user.Message,
    };

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["aakashanand1995@gmail.com"],
      replyTo: userData.Email,
      subject: `New Contact from ${userData.Name}`,
      react: EmailTemplate({
        Name: userData.Name,
        Email: userData.Email,
        Message: userData.Message,
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || "Failed to send email",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      error: null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: message,
      },
      { status: 500 }
    );
  }
}
