import Image from "next/image";
import { MdSchool, MdEngineering, MdHandshake } from "react-icons/md";
import ShuffleCards from "./ShuffleCards";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-black bg-aboutMe bg-cover mx-auto lg:flex-3">
      <Reveal>
        <div className="font-semibold border-gray-200 shadow-xl text-6xl bg-opacity-95 bg-white m-2 p-2 rounded-md mt-10 md:mt-20">
          About Me
        </div>
      </Reveal>

      <ShuffleCards />

      <div className="flex justify-center items-center w-full mb-8">
        <div className="font-bold text-center">
          <Reveal>
            <div className="font-semibold border border-gray-200 bg-white p-4 text-base md:text-xl space-y-2 rounded-md shadow-lg hover:shadow-md transition-all w-96 md:w-full md:m-2">
              Hello! My name is Mark Garcia, and I am a recent graduate from the
              University of La Verne. During my time there, I developed a strong
              passion for creating web applications and exploring disruptive
              technologies. Aside from my love for web development, I find joy
              in spending quality time with my friends, family, and my cats, Tom
              and Lucy.
            </div>
          </Reveal>
          <div className="flex flex-col items-center justify-center mx-auto mt-2 text-center">
            <Reveal>
              <div className="font-semibold text-4xl w-full bg-white rounded-md shadow-xl p-2 m-2">
                Acomplishments
              </div>
            </Reveal>
          </div>

          <div className="flex items-center justify-center mx-auto mt-2">
            <div className="flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Reveal>
                <div className="flex mt-2 flex-col h-32 font-semibold bg-white border border-gray-200 p-4 text-base md:text-2xl lg:text-xl rounded-md shadow-lg  hover:shadow-md transition-all text-center items-center w-96 md:w-full md:h-60">
                  <div className="max-w-sm bg-white rounded-lg">
                    <h5 className="mt-1 items-center text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                      Batchelor of Science in <span>E-Commerce</span>
                    </h5>
                    <MdSchool className="inline-flex text-3xl md:text-5xl mt-6" />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-col h-32 font-semibold bg-white border border-gray-200 p-4 text-base md:text-2xl lg:text-xl rounded-md shadow-lg  hover:shadow-md transition-all text-center items-center w-96 md:w-full md:h-60">
                  <div className="max-w-sm bg-white rounded-lg">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                      <span>
                        Computer Science and Computer Engineering: Departmental
                        Honors
                      </span>
                    </h5>
                    <MdHandshake className="inline-flex text-3xl md:text-5xl" />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-col h-32 font-semibold bg-white border border-gray-200 p-4 text-base md:text-2xl lg:text-xl rounded-md shadow-lg  hover:shadow-md transition-all text-center items-center w-96 md:w-full md:h-60">
                  <div className="max-w-sm bg-white rounded-lg">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                      <span>
                        Certification of Achievement: Systems Engineering
                      </span>
                    </h5>
                    <MdEngineering className="inline-flex text-3xl md:text-5xl md:mt-6" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
