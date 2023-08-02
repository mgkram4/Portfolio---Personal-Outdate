import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import urlFor from "../lib/sanityImageUrl";
import Link from "next/link";

async function getData() {
  const query = '*[_type == "post"]';
  const data = await client.fetch(query);
  return data;
}

export default async function ProjModal() {
  try {
    const data = (await getData()) as Post[];

    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 justify-center">
        {data.map((post: Post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full ">
              <div className="">
                {/* Use appropriate height for the image container */}
                {post.image?.asset && (
                  <Image
                    className="rounded-xl mt-4"
                    src={urlFor(post.image).url()}
                    alt="logos"
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={urlFor(post.image)
                      .width(24)
                      .height(24)
                      .blur(10)
                      .url()}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                )}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex text-center font-bold justify-center mt-2">
                  {post.title}
                </div>
                <p className="flex text-center justify-center">
                  {post.overview}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can add some fallback UI or return an error message here
  }
}
