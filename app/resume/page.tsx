import React from "react";
import Link from "next/link";

const MarkGarcia = () => {
  return (
    <div className="space-y-4 bg-white text-black p-8 rounded-md shadow-md">
      <h1 className="text-4xl font-bold">Mark Garcia</h1>
      <p className="text-lg">
        <strong>React Developer</strong>
      </p>
      <p className="text-lg">
        <strong>Email:</strong> mark.garica@laverne.edu |{" "}
        <strong>Phone:</strong> (626) 506-8267
      </p>
      <p className="text-lg">
        <Link
          href="https://github.com/mgkram4"
          className="text-blue-500 hover:underline"
        >
          https://github.com/mgkram4
        </Link>
      </p>

      <h2 className="text-2xl font-bold mt-4">Career Objective</h2>
      <p className="text-lg">
        As an E-commerce graduate with a robust background in programming
        languages such as Python, JavaScript, and React, I am a self-motivated
        and results-driven professional seeking a challenging role in Sales and
        Business Development. Leveraging proven analytical capabilities and
        project management skills, I aspire to contribute to a dynamic team in a
        high-paced environment.
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
        <li>Designed, developed, and hosted a website from scratch.</li>
        <li>
          Implemented a feature that retrieves and displays previous projects
          from the Sanity CMS.
        </li>
        <li>
          Integrated an email API for users to send emails to a designated host
          email address.
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
        <li>HTML, CSS (Tailwind CSS)</li>
        <li>Javascript, React (Node JS, Next JS)</li>
        <li>Python (Flask, Scikit-Learn)</li>
        <li>Firebase, Vercel</li>
        <li>Git</li>
        <li>Relational Databases</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">Activities</h2>
      <p className="text-lg">
        <strong>Google Developer Student Club</strong>
        <br />
        <em>Active Member | 2023 - current | Cal Poly Pomona, CA</em>
      </p>
      <p className="text-lg">
        <strong>Google AppSheet & Workspace Hackathon</strong>
        <br />
        <em>Participant: Developer | August - 2023 | Google Venice, CA</em>
      </p>
      <p className="text-lg">
        Watch:{" "}
        <Link
          href="https://youtu.be/N-eyGQ6vYzs"
          className="text-blue-500 hover:underline"
        >
          https://youtu.be/N-eyGQ6vYzs
        </Link>
      </p>
    </div>
  );
};

export default MarkGarcia;
