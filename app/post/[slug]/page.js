import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import React from "react";
import fs from "fs";
import getPostMetadata from "@/utils/GetPostMetadata";

function getPostContent(slug) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetaData({params, searchParams}){
  const id = params?.slug ? "⋅" + params?.slug : "";
  return {
    title: `Title ${id.replaceAll("-", " ")}`, // Change Title
  }
};

export default function PostPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main>
      <article className="prose prose-zinc prose-img:rounded-sm dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
  