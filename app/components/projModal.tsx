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

export const dynamic = "force-dynamic";

export default async function ProjModal() {
  try {
    const data = (await getData()) as Post[];

    return (
      <div className="carousel carousel-start  max-w-sm md:max-w-7xl p-12 space-x-4 rounded-box over">
        <div className="carousel-item gap-8 ">
          {data.map((post: Post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-1.5 transform transition-all h-full">
                <div
                  className="mt-64 rounded-t-md shadow-lg bg-white opacity-80 w-full "
                  style={{
                    backgroundImage: post.image?.asset
                      ? `url(${urlFor(post.image).url()})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9,
                    height: "350px", // Set the desired height
                    width: "300px", // Set the desired width
                    margin: "0 8px", // Adjust the margin to add spacing
                  }}
                >
                  <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="mt-64"></div>
                    <div className="bg-white  p-2 rounded-md opacity-95 ">
                      <div className="flex text-center font-bold justify-center text-lg md:text-xl lg:text-2xl">
                        {post.title}
                      </div>
                      <p className="flex text-center justify-center text-sm md:text-base lg:text-lg">
                        {post.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can add some fallback UI or return an error message here
  }
}
