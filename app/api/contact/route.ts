import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC!,
    apiSecret: process.env.MJ_APIKEY_PRIVATE!,
  });

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "erantimothy@gmail.com",
            Name: "Portfolio Contact Form",
          },
          To: [
            {
              Email: "erantimothy@gmail.com",
              Name: "Eran Timothy Perera",
            },
          ],
          ReplyTo: {
            Email: email,
            Name: name,
          },
          Subject: `New message from ${name} — erantimothy.dev`,
          TextPart: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          HTMLPart: `
            <div style="font-family: monospace; background: #0a0a0a; color: #fafafa; padding: 32px; border-radius: 8px; max-width: 600px;">
              <p style="color: #f59e0b; margin: 0 0 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">New contact form submission</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="color: #737373; font-size: 12px; padding: 6px 0; width: 80px;">name</td>
                  <td style="color: #fafafa; font-size: 14px; padding: 6px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="color: #737373; font-size: 12px; padding: 6px 0;">email</td>
                  <td style="font-size: 14px; padding: 6px 0;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #262626; margin: 20px 0;" />
              <p style="color: #a3a3a3; font-size: 13px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          `,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Mailjet error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
