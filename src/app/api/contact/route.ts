import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { env } from "process"

export async function POST(request: NextRequest) {
  const { email, message, name } = await request.json()

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const mailOptions: Mail.Options = {
    from: env.GMAIL_USER,
    to: env.GMAIL_USER,
    subject: `Desde tu Portfolio enviado por Sr(a)(${name})`,
    text: message + " | Send from" + email,
    html: `
      <p>Nombre:</p>
      <p>${name}</p>
      <p>Mensaje:</p>
      <p>${message}</p>
      <p>Email:</p>
      <p>${email}</p>
    `,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })

  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}
