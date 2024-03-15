import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/GetPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata("posts")

  return (
    <main>
      {postMetadata.map((post, postIndex) => {
        return (
          <PostCard key={postIndex} post={post}/>
        )        
      })}
    </main>
  );
}
