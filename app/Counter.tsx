"use client";

import { useState } from "react";

export default function Counter({ name }:{name: string}) {
  const [count, setCount] = useState(0);

  return (
   <>
   <h1>Hello {name}</h1>
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
    </>
  );
}