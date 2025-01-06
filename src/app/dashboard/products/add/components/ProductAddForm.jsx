"use client";

import { postSingleData } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const result = await res.json();
    const result = await postSingleData(payload);
    console.log(result);
    form.reset();
    //alert("Product Added");
    router.push("/products");
    //router.refresh()
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
