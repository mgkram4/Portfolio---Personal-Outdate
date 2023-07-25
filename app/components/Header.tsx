import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-hero h-screen flex flex-col items-center justify-center ">
      <div className="mb-64">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-4xl p-6 rounded-xl">
            Hi, I&apos;m&nbsp;Mark Garcia
          </div>
        </div>

        <div className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-xl p-4 m-6  rounded-xl">
          FullStack Web Developer
        </div>
        <div className="flex justify-center">
          <button
            // onClick={handleClick}
            className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-lg p-4  rounded-xl transition-transform duration-300 hover:bg-blue-10 hover:text-slate-50 hover:opacity-95 hover:-translate-y-1 hover:shadow-2xl"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
