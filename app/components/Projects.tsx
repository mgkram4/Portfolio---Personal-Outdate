import Image from "next/image";
import images from "../../public/images.js";
import ProjModal from "./projModal";

export default function Projects() {
  return (
    <div className="bg-hero h-screen flex flex-col items-center justify-center">
      <div className="font-semibold m-2">Technologies</div>
      <div className=" bg-slate-50 rounded-md shadow-md  w-4/5">
        <div className="ml-4 mr-4">
          <div className="flex p-2 m-4 space-x-8 overflow-scroll items-center justify-center">
            {images.map((image, index) => (
              <div
                className="min-w-100px max-w-100px md:min-w-150px md:max-w-150px"
                key={index}
                style={{ minWidth: "25px", maxWidth: "70px" }}
              >
                <Image
                  src={image.src}
                  alt="logos"
                  layout="responsive"
                  width={image.width}
                  height={image.height}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="font-semibold m-2">Projects</div>
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
