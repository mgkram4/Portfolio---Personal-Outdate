import Image from "next/image";
import images from "../../public/images.js";
import ProjModal from "./projModal";
import AniCar from "./AniCar.tsx";

export default function Projects() {
  return (
    <div className="min-h-screen text-black bg-aboutMe flex flex-col items-center justify-center">
      <div className="font-semibold text-4xl bg-white rounded-md shadow-xl p-2 m-2">
        Technologies
      </div>

      <div className="w-full md:w-4/5">
        {" "}
        {/* Adjust the width based on your design */}
        <AniCar />
      </div>

      <div className="font-semibold text-4xl bg-white rounded-md shadow-xl p-2 m-2">
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
