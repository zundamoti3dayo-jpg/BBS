import { supabase } from "@/lib/supabase"
import CreateThread from "@/components/CreateThread"

export default async function Home() {
  const { data: threads } = await supabase
    .from("threads")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1>掲示板</h1>

      <CreateThread />

      {threads?.map((t) => (
        <a key={t.id} href={`/thread/${t.id}`}>
          <div>{t.title}</div>
        </a>
      ))}
    </div>
  )
}
