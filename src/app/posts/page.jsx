import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="gap-8 grid grid-cols-4">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border-2 border-slate-300">
            <p className="text-2xl font-bold">{singlePost.title}</p>
            <p className="font-semibold">{singlePost.body}</p>
            <Link href={`/posts/${singlePost.id}`}>
              <button className="bg-green-300 text-black">Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
