import Image from "next/image";

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-8">
      <div className="font-bold text-4xl">FAQ</div>
      <div className="flex flex-col py-8 space-y-5">
        <div className="font-bold text-2xl">Do you still make Beats or DJ?</div>
        <div className="text-xl">No, it's been years.</div>
        <div className="font-bold text-2xl">Why did you stop?</div>
        <div className="text-xl">
          It became a chore rather than something I genuinely enjoy.
        </div>
        <div className="font-bold text-2xl">Where did you learn to code?</div>
        <div className="text-xl">University / YouTube</div>
        <div className="font-bold text-2xl">
          How did you get better at coding?
        </div>
        <div className="text-xl">
          I built applications that are relevant to my life.
        </div>
        <div className="font-bold text-2xl">Can anyone learn to code?</div>
        <div className="text-xl">Yes, anyone can learn to code.</div>
        <div className="font-bold text-2xl">Do you like to code?</div>
        <div className="text-xl">Yes, I love it.</div>
        <div className="font-bold text-2xl">Favorite tech to use?</div>
        <div className="text-xl">Typescript, Next.js 13, Tailwind CSS</div>
        <div className="font-bold text-2xl">What is your favorite color?</div>
        <div className="text-xl text-blue-500">Blue</div>
        <div className="font-bold text-2xl">What is your favorite movie?</div>
        <div className="text-xl">Midnight in Paris</div>
        <div className="font-bold text-2xl">What is your favorite song?</div>
        <div className="text-xl">"Never Needed No Help" by Lil Baby</div>
        <div className="font-bold text-2xl">
          Who is your favorite music artist?
        </div>
        <div className="text-xl">Yeat</div>
        <div className="font-bold text-2xl">
          Favorite video game growing up?
        </div>
        <div className="text-xl">League of Legends</div>
      </div>
    </div>
  );
}
