import React, { Suspense } from "react";
import MainHome from "../Home/Home";
const About = React.lazy(() => import("../About/About"));
const Skills = React.lazy(() => import("../Skills/Skills"));
const Portfolio = React.lazy(() => import("../Portfolio/Portfolio"));
const Contact = React.lazy(() => import("../Contact/Contact"));

const MainSections = () => {
  return (
    <>
      <main className="w-full h-full bg-zinc-200 dark:bg-slate-950 md:pt-[70px]">
        <MainHome />
        <Suspense fallback={<div className="z-[9999]">Loading...</div>}>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
    </>
  );
};
export default MainSections;
