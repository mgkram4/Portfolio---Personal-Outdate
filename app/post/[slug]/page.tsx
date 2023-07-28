import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex justify-center items-center "></div>
      ),
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {" "}
      {/* Add 'h-screen' to make sure the container takes full height */}
      <div className="font-bold ">{data.title}</div>
      <div className="font-bold">{data.overview}</div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={urlFor(data.image).url()}
          alt="logos"
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={urlFor(data.image).width(24).height(24).blur(10).url()}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        <PortableText value={data.content} components={PortableTextComponent} />
      </div>
    </div>
  );
}
