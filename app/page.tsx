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

// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";

// const HeavyComponent = dynamic(
//   () => import("./components/Analytics"), 
//   {
//     loading: () => <p>Loading component...</p>
//   }
// );

// export default function Home() {
//   const [showAnalytics, setShowAnalytics] = useState(false);

//   return (
//     <main className="p-10">
//       <h1 className="text-4xl font-bold">
//         Home Page
//       </h1>

//       <button
//         onClick={() => setShowAnalytics(true)}
//         className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
//       >
//         Show Analytics
//       </button>

//       {showAnalytics && <HeavyComponent />}

//       <h1 className="mt-4">Image Optimization</h1>
//       <Image src="/japan.png" width={400} height={300} alt="Japan street" className="rounded-2xl"/>
//     </main>
//   );
// }


// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <h1>Image Optimization</h1>

//       <div className="h-[2000px]">
//         <p>Lots of content...</p>
//       </div>

//       <Image
//         src="/japan.png"
//         width={800}
//         height={600}
//         alt="Japan "
//         loading="lazy"
//         // preload
//       />
//     </main>
//   );
// }

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const secret = process.env.JWT_SECRET;

  return (
     <main>
      <h1>Environment Variables</h1>

      <p>API URL: {apiUrl}</p>

      <p>
        Secret exists: {secret ? "Yes" : "No"}
      </p>
    </main>
  );
}