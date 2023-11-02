import Image from "next/image";

export async function generateMetadata() {
    const res = await fetch('https://nice-dogs.vercel.app/api/dogs?slug=henry');
    const data = await res.json();
    return {
      title: data.name,
      description: `Loves ${data.favouriteColor}`
    };
}


export default async function Henry() {

    const res = await fetch('https://nice-dogs.vercel.app/api/dogs?slug=henry');  
    const data = await res.json();
    console.log(data);
    const { name, age, favouriteColor, image } = data;
    return (
        <main>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>Henrys Yndlings farve: {favouriteColor}</p>
        <Image
            src={image.url}
            alt={name}
            width={image.width}
            height={image.height}
            priority={true} // disables lazy loading
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    400px"
        />
        </main>
    )
}