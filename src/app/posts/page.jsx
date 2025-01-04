import Link from "next/link";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All posts",
  description: "Loading JSON placeholder posts using Server Component",
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="gap-8 grid grid-cols-4">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border-2 border-slate-300">
            <p className={`text-2xl font-bold ${style["post-title"]}`}>
              {singlePost.title}
            </p>
            <p className="font-semibold testing-purpose-css-class">
              {singlePost.body}
            </p>
            <Link href={`/posts/${singlePost.id}`}>
              <button className="bg-green-300 text-black">Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
