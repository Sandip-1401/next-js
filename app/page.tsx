import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
import Counter from "./Counter";

export default async function Home() {

  // const router = useRouter();
  // const [count, setCount] = useState(0);

  const responce = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await responce.json();

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about" className="text-blue-500">
        Go to About Page
      </Link>

      <Link href='/products/1401'>
        Product 1401
      </Link>

      {/* <button onClick={() => router.push('/about')}>Go to About by Button</button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button> */}
      <h1>{data.title}</h1>
      <Counter name="Sandip" />
    </>
  );
}