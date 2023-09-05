import Image from "next/image";
import Carousel from "./Carousel";
import { MdSchool, MdEngineering, MdHandshake } from "react-icons/md";

export default function About() {
  return (
    <div className="min-h-screen text-black bg-aboutMe bg-cover flex flex-col items-center justify-center mx-auto text-center lg:flex-3">
      <div className="flex flex-col justify-center items-center w-11/12 md:w-4/5">
        <div className="flex items-center justify-center ml-8">
          <Carousel />
        </div>
        <div className="font-bold  mt-8">
          <div className="font-semibold text-4xl md:text-2xl bg-opacity-95 shawdow lg:text-2xl bg-white m-2 p-2 rounded-md">
            About Me
          </div>

          <div className="font-semibold border  border-gray-200 bg-white p-4 text-lg space-y-2 rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Hello! My name is Mark Garcia, and I am a recent graduate from the
            University of La Verne. During my time there, I developed a strong
            passion for creating web applications and exploring disruptive
            technologies. Aside from my love for web development, I find joy in
            spending quality time with my friends, family, and my cats, Tom and
            Lucy.
          </div>

          <div className="font-semibold md:text-2xl text-4xl  lg:text-2xl bg-white  rounded shadow bg-opacity-95 p-2 m-2">
            Accomplishments
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-11/12 md:w-4/5 mx-auto mb-8 ">
            <div className="flex flex-col font-semibold bg-white  border border-gray-200 p-4 mt-2 text-base md:text-2xl lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              <div className="max-w-sm  bg-white  rounded-lg ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Batchlor of Science in E-Commerce
                </h5>

                <MdSchool className="inline-flex text-4xl" />
              </div>
            </div>
            <div className="flex flex-col font-semibold bg-white  border border-gray-200 p-4 mt-2 text-base md:text-2xl lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              <div className="max-w-sm  bg-white  rounded-lg ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <span>
                    Computer Science and Computer Engineering: Departmental
                    Honors
                  </span>
                </h5>

                <MdHandshake className="inline-flex text-4xl" />
              </div>
            </div>
            <div className="flex flex-col font-semibold bg-white  border border-gray-200 p-4 mt-2 text-base md:text-2xl lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              <div className="max-w-sm  bg-white  rounded-lg ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <span>Certification of Achievement: Systems Engineering</span>
                </h5>

                <MdEngineering className="inline-flex text-4xl" />
              </div>
            </div>
          </div>

          {/* PHOTOS */}
        </div>
      </div>
    </div>
  );
}
