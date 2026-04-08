"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function CreatePost({ threadId }: any) {
  const [content, setContent] = useState("")

  const submit = async () => {
    await supabase.from("posts").insert({
      content,
      thread_id: threadId,
    })
    location.reload()
  }

  return (
    <div>
      <input onChange={(e) => setContent(e.target.value)} />
      <button onClick={submit}>書き込み</button>
    </div>
  )
}
