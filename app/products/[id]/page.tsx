import { Suspense } from "react";
import SlowContent from "./SlowContent";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const product = await response.json();

  return (
    <div>
      <h1>Product {id}</h1>
      <h2>{product.title}</h2>

      <Suspense fallback={<p>Loading slow content...</p>}>
         <SlowContent />
      </Suspense>
    </div>
  );
}