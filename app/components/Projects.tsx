import Image from "next/image";
import images from "../../public/images.js";
import ProjModal from "./projModal";

export default function Projects() {
  return (
    <div className="min-h-screen text-black bg-aboutMe flex flex-col items-center  justify-center">
      <div className="font-semibold text-4xl  bg-white rounded-md shadow-xl p-2 m-2">
        Technologies
      </div>

      <div className="ml-4 mr-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4 mt-4">
            {images.map((image, index) => (
              <div
                className="min-w-100px max-w-100px md:min-w-150px md:max-w-150px"
                key={index}
                style={{ minWidth: "65px", maxWidth: "110px" }}
              >
                <Image
                  src={image.src}
                  alt="logos"
                  layout="responsive"
                  width={image.width}
                  height={image.height}
                  className="mx-auto bg-white hover:scale-125 hover:shadow-2xl transition-all  shadow-md p-2 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="font-semibold text-4xl  bg-white rounded-md shadow-xl p-2 m-2">
        Projects
      </div>
      <div className="bg-slate-50 rounded-md shadow-md w-4/5">
        <div className="ml-4 mr-4">
          <div className="flex items-center justify-center overflow-hidden">
            <ProjModal />
          </div>
        </div>
      </div>
    </div>
  );
}
