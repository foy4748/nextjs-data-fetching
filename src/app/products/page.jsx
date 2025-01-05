import { redirect } from "next/navigation";
import React from "react";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();

  if (data.length > 3) {
    redirect("/");
  }

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
