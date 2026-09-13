export default async function DocsPage(
   { params }: { params: Promise<{ slug?: string[] }> }
){
   const { slug } = await params;

   return <h1>{slug?.join("/") || "Docs Home"}</h1>
}