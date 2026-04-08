import { stripe } from "@/lib/stripe"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const body = await req.json()

  if (body.type === "checkout.session.completed") {
    const session = body.data.object

    const userId = session.metadata.user_id

    const expire = new Date()
    expire.setMonth(expire.getMonth() + 1)

    await supabase
      .from("users")
      .update({
        is_vip: true,
        vip_expire_at: expire,
      })
      .eq("id", userId)
  }

  return new Response("ok")
}
