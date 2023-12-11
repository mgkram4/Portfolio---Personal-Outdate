import React from "react";
import Link from "next/link";

const MarkGarcia = () => {
  return (
    <div className="space-y-4 bg-white text-black p-8 rounded-md shadow-md">
      <h1 className="text-4xl font-bold">Mark Garcia</h1>
      <p className="text-lg">
        <strong>Full-Stack Developer</strong>
      </p>
      <p className="text-lg">
        <strong>Email:</strong> mark.garica@laverne.edu |{" "}
        <strong>Phone:</strong> (626) 506-8267
      </p>
      <p className="text-lg">
        <Link
          href="https://www.linkedin.com/in/mark-garica-4314221ab/"
          className="text-blue-500 hover:underline"
        >
          https://www.linkedin.com/in/mark-garica-4314221ab/
        </Link>
      </p>

      <h2 className="text-2xl font-bold mt-4">Career Objective</h2>
      <p className="text-lg">
        As a recent E-commerce graduate equipped with a strong foundation in
        programming languages like Python, JavaScript, and React, I am a highly
        motivated and outcome-oriented professional pursuing a role as a
        Full-Stack Developer. Drawing on my demonstrated expertise in systems
        engineering and project management, I am eager to contribute to a
        dynamic team in a fast-paced environment
      </p>

      <h2 className="text-2xl font-bold mt-4">Work Experience</h2>
      <p className="text-lg">
        <strong>Coding Instructor</strong>
        <br />
        <em>Coding Minds | August 2023 - Current | Diamond Bar, CA</em>
      </p>
      <ul className="list-disc pl-6">
        <li>
          Prepare trial classes for new students, evaluate their coding skills,
          and advise students in appropriate classes.
        </li>
        <li>
          Teach courses for Python, PyGame, Flask, Scikit-Learn, HTML, CSS,
          Javascript, React, and Java Exam preparation.
        </li>
        <li>
          Responsible for scoping, completing, and presenting a final project
          with each student for each course taught.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">Projects</h2>
      <p className="text-lg">
        <strong>Personal Portfolio</strong>
        <br />
        <em>markgarica.xyz | May 2023 - Active</em>
      </p>
      <ul className="list-disc pl-6">
        <li>
          Addressed the need for an online presence and efficient information
          dissemination.
        </li>
        <li>
          Planned the UI/UX of a dynamic, mobile-responsive website, that
          displays my previous projects, and a point of contact.
        </li>
        <li>
          Implemented a responsive design, ensuring optimal viewing on all
          devices. Integrated Sanity CMS to showcase previous projects and Email
          js to receive emails while in the webpage.
        </li>
        <li>
          Established a user-friendly site with enhanced visibility, accessible
          across desktop and mobile platforms. Created user engagement through
          streamlined, mobile-responsive communication with an integrated email
          API.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">Education</h2>
      <p className="text-lg">
        <u>Bachelors of Science in E-Commerce | 2023</u>
        <br />
        University of La Verne, La Verne, CA
      </p>

      <h2 className="text-2xl font-bold mt-4">Certifications</h2>
      <ul className="list-disc pl-6">
        <li>
          <u>
            Certification of Achievement: Systems Engineering | University of La
            Verne | 2023
          </u>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">Skills</h2>
      <ul className="list-disc pl-6">
        <li>HTML, CSS (Tailwind CSS, Shadcn)</li>
        <li>Javascript, React (Node JS, Next JS)</li>
        <li>Python (Flask, Scikit-Learn, Pandas)</li>
        <li>Firebase, Vercel</li>
        <li>PostgreSQL</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">Activities</h2>
      <p className="text-lg">
        <strong>Google Developer Student Club</strong>
        <br />
        <em>Active Member | Attend Bi-Weekly Meetings with SDLC workshops.</em>
        <ul className="list-disc pl-6">
          <li>Developed UI demo for open source club project.</li>
        </ul>
      </p>
      <p className="text-lg">
        <strong>Google AppSheet Hackathon</strong>
        <br />
        <em>
          Participant: Developer | Google Workspace and AppSheet Hackathon! |
          Sept 28th - 29th
        </em>
        <ul className="list-disc pl-6">
          <li>Developed E-commerce admin management dashboard.</li>
          <li>
            Application Presentation:{" "}
            <Link
              href="https://youtu.be/N-eyGQ6vYzs?si=BH4h3Uo6dlROrcLk"
              className="text-blue-500 hover:underline"
            >
              https://youtu.be/N-eyGQ6vYzs?si=BH4h3Uo6dlROrcLk
            </Link>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default MarkGarcia;
