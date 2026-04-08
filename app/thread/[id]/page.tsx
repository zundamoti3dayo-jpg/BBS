import { supabase } from "@/lib/supabase"
import PostList from "@/components/PostList"
import CreatePost from "@/components/CreatePost"

export default async function ThreadPage({ params }: any) {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("thread_id", params.id)
    .order("created_at")

  return (
    <div>
      <h1>スレッド</h1>

      <PostList posts={posts} />
      <CreatePost threadId={params.id} />
    </div>
  )
}
