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
    const data = await getData();

    return (
      <div className="flex justify-center">
        {/* Center the whole content */}
        <ul className="">
          {/* Center the items and wrap them in flex */}
          {data.map((post: Post) => (
            <li
              key={post._id}
              className="flex-1 flex-col md:flex-row p-1 m-2 space-y-4 md:space-y-0 md:space-x-8 overflow-hidden bg-blue-60 rounded-xl "
            >
              <Link
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {post.image?.asset && (
                  <Image
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
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="flex text-2xl justify-center">{post.title}</h5>
                  <p className="flex justify-center">{post.overview}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can add some fallback UI or return an error message here
  }
}
