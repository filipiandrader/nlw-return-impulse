import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "611b90f38571ea",
    pass: "720307fa3393a3"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Filipi Andrade Rocha <to@gmail.com>',
      subject: subject,
      html: body
    })
  }
}