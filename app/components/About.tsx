import Image from "next/image";
import Carousel from "./Carousel";

export default function About() {
  return (
    <div className=" min-h-screen bg-aboutMe flex flex-col items-center justify-center mx-auto text-center lg:flex-3">
      <div className="flex flex-col justify-center items-center w-11/12 md:w-4/5">
        <Carousel />
        <div className="font-semibold text-lg md:text-xl lg:text-2xl bg-white rounded-md shadow-xl p-2 m-2">
          About Me
        </div>

        <div className="font-semibold bg-white p-4 w-11/12 md:w-4/5 text-sm md:text-base lg:text-lg space-y-2 rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
          My name is Mark Garcia, and I recently graduated from the University
          of La Verne. During my time there, I developed a strong passion for
          creating web applications and exploring disruptive technologies. Aside
          from my love for web development, I find joy in spending quality time
          with my friends, family, and my cats, Tom and Lucy.
        </div>

        <div className="font-semibold text-lg md:text-xl lg:text-2xl bg-white rounded-md shadow-xl p-2 m-2">
          Accomplishments
        </div>

        <div className="flex flex-wrap md:flex-col justify-center gap-2 w-11/12 md:w-4/5">
          <div className="font-semibold bg-white w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Bachelor of Science in E-Commerce
          </div>
          <div className="font-semibold bg-white w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Certification of Achievement: Systems Engineering
          </div>
          <div className="font-semibold bg-white w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Computer Science and Computer Engineering: Departmental Honors
          </div>
        </div>
      </div>
      {/* PHOTOS  */}

      {/* <Carousel /> */}
    </div>
  );
}
