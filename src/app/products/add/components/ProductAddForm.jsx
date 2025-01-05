"use client";

export default function ProductAddForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    alert("Product Added");
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
