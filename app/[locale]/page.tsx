export default async function Page({params}: {params: Promise<{locale: string}>}){

   const { locale } =  await  params;

   return <h1>Langauge: {locale}</h1>
}