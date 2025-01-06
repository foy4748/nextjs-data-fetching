import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

// export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  // const data = await res.json();

  const data = await getProducts();

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
