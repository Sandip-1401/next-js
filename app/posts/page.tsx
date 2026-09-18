export default async function PostPage(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts",
      // {
      //    cache: "force-cache"
      // }
      // {
      //    cache: "no-store"
      // }
      {
         next: {
            revalidate: 5
         }
      }
);
   const posts = await res.json();

   return <h1>{posts.length}</h1>
}