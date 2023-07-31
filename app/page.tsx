import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
