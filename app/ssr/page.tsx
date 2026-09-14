export default function SSRPage() {
  const secret = process.env.MY_SECRET;

  console.log("SERVER:", secret);

  return (
    <div>
      <h1>SSR Page</h1>
      <p>{secret}</p>
    </div>
  );
}