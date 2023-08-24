import Image from "next/image";
import Carousel from "./Carousel";

export default function About() {
  return (
    <div className="min-h-screen text-black bg-aboutMe bg-cover flex flex-col items-center justify-center mx-auto text-center lg:flex-3">
      <div className="flex flex-col justify-center items-center w-11/12 md:w-4/5">
        <div className="flex items-center justify-center ml-8 ">
          {" "}
          <Carousel />
        </div>
        <div className="font-bold text-4xl justify-center items-center border-grey border-2 bg-white p-8 rounded-xl py-2 sm:text-5xl mt-8">
          <div className="font-semibold text-2xl bg-white rounded-md">
            About Me
          </div>

          <div className="font-semibold bg-white p- text-center text-base md:text-lg  space-y-2 rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
            My name is Mark Garcia, and I recently graduated from the University
            of La Verne. During my time there, I developed a strong passion for
            creating web applications and exploring disruptive technologies.
            Aside from my love for web development, I find joy in spending
            quality time with my friends, family, and my cats, Tom and Lucy.
          </div>

          <div className="font-semibold text-lg md:text-xl lg:text-2xl bg-white p-2 m-2">
            Accomplishments
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-11/12 md:w-4/5 mx-auto">
            <div className="font-semibold bg-white p-4 mt-2 text-base md:text-lg lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              Bachelor of Science in E-Commerce
            </div>
            <div className="font-semibold bg-white p-4 mt-2 text-base md:text-lg lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              Certification of Achievement: Systems Engineering
            </div>
            <div className="font-semibold bg-white p-4 mt-2 text-base md:text-lg lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              Computer Science and Computer Engineering: Departmental Honors
            </div>
          </div>

          {/* PHOTOS */}
        </div>
      </div>
    </div>
  );
}
