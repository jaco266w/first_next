export async function generateMetaData() {
    const res = await fetch('https://nice-dogs.vercel.app/api/dogs?slug=henry')
    const data = await res.json()
    return {
      title: data.title,
      description: data.description
    }
}


export default async function Henry() {

    const res = await fetch('https://nice-dogs.vercel.app/api/dogs?slug=henry')  
    const data = await res.json()
    console.log(data)
    return (
        <main>
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        <p>Henrys Yndlings farve: {data.favouriteColor}</p>
        </main>
    )
}