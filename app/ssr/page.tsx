export default async function SSRPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const data = await response.json();

  return (
    <div>
      <h1>SSR Page</h1>
      <h2>{data.title}</h2>

      <p>{process.env.NODE_ENV}</p>
    </div>
  );
}