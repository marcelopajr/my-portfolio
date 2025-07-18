import { NextResponse } from 'next/server'
import axios from 'axios'
import { z } from 'zod'

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = bodySchema.parse(body)

    const messageData = {
      embeds: [
        {
          title: 'Contact Message',
          color: 0x4983f5,
          fields: [
            {
              name: 'Name',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
            {
              name: 'Message',
              value: message,
            },
          ],
        },
      ],
    }

    await axios.post(WEBHOOK_URL, messageData)

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
