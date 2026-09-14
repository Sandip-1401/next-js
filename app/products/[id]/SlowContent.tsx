export default async function SlowContent() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h2>Slow content loaded 🎉</h2>;
}