import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_xxx",
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  })

  return NextResponse.json({ url: session.url })
}
