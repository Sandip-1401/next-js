// import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";
// import Counter from "./Counter";
// import dynamic from "next/dynamic";

// export default async function Home() {

//   // const router = useRouter();
//   // const [count, setCount] = useState(0);

//   const responce = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await responce.json();

//   const HeavyComponent = dynamic(
//     () => import ("./components/HeavyComponent")
//   )

//   return (
//     <>
//       <h1>Home Page</h1>
//       <Link href="/about" className="text-blue-500">
//         Go to About Page
//       </Link>

//       <Link href='/products/1401'>
//         Product 1401
//       </Link>

//       {/* <button onClick={() => router.push('/about')}>Go to About by Button</button>

//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button> */}
//       <h1>{data.title}</h1>
//       <Counter name="Sandip" />

//       <HeavyComponent />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("./components/Analytics")
);

export default function Home() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Home Page
      </h1>

      <button
        onClick={() => setShowAnalytics(true)}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Show Analytics
      </button>

      {showAnalytics && <Analytics />}
    </main>
  );
}