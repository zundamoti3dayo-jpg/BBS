"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function CreateThread() {
  const [title, setTitle] = useState("")

  const createThread = async () => {
    await supabase.from("threads").insert({ title })
    location.reload()
  }

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createThread}>スレ作成</button>
    </div>
  )
}
