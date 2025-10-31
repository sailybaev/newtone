import { NextResponse } from 'next/server'

type FormPayload = {
	name?: string
	tell?: string
	thema?: string
}

export async function POST(req: Request) {
	try {
		const contentType = req.headers.get('content-type') || ''
		let body: FormPayload = {}

		if (contentType.includes('application/json')) {
			body = await req.json()
		} else {
			const text = await req.text()
			const params = new URLSearchParams(text)
			body = Object.fromEntries(params.entries())
		}

		const name = body.name || ''
		const phone = body.tell || ''
		const theme = body.thema || ''

		const referer = (req.headers.get('referer') as string) || ''

		const message = `Тема: ${theme}\nИмя: ${name}\nТелефон: ${phone}\nСсылка: ${referer}`

		const botToken = process.env.TELEGRAM_BOT_TOKEN
		const chatId = process.env.TELEGRAM_CHAT_ID

		if (!botToken || !chatId) {
			return NextResponse.json(
				{ ok: false, error: 'Telegram token/chat not configured' },
				{ status: 500 }
			)
		}

		const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

		const res = await fetch(telegramUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ chat_id: chatId, text: message }).toString(),
		})

		if (!res.ok) {
			const text = await res.text()
			return NextResponse.json(
				{ ok: false, status: res.status, detail: text },
				{ status: 502 }
			)
		}

		return NextResponse.json({ ok: true })
	} catch (err) {
		return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
	}
}
