export default async function Page({params}: {params: Promise<{locale: string}>}){

   const { locale } =  await  params;

   return <h1 className="text-3xl text-purple-700">Langauge: {locale}</h1>
}