import Image from "next/image";
import Carousel from "./Carousel";

export default function About() {
  return (
    <div className="bg-aboutMe h-screen flex flex-col items-center justify-center  mx-auto text-center lg:flex-3">
      <div className="flex flex-col justify-center items-center min-h-screen w-4/5">
        <Carousel />
        <div className="font-semibold text-lg md:text-xl lg:text-2xl m-2">
          About Me
        </div>

        <div className="font-semibold bg-slate-50 p-4 w-4/5 text-base md:text-lg lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
          <div className="mb-4">
            My name is Mark Garcia. I am a recent graduate from the University
            of La Verne. At the university, I fell in love with creating web
            applications and learning about disruptive technologies.
          </div>
          <div className="mt-4">
            Aside from my passion for web development, I love spending time with
            my friends, family, and my cats Tom and Lucy. Some of my hobbies
            include watching sports, getting outdoors, and watching live music!
          </div>
        </div>

        <div className="font-semibold mt-8 text-lg md:text-xl lg:text-2xl m-2">
          Accomplishments
        </div>
        <div className="flex flex-wrap md:flex-col justify-center gap-2 md:w-4/5">
          <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Bachelor of Science in E-Commerce
          </div>
          <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Certification of Achievement: Systems Engineering
          </div>
          <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            Computer Science and Computer Engineering: Departmental Honors
          </div>
        </div>
      </div>
      {/* PHOTOS  */}

      {/* <Carousel /> */}
    </div>
  );
}
