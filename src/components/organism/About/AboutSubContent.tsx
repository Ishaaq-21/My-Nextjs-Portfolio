import Link from "next/link";
import AboutCard from "./AboutCard";

export type CardType = {
  icon: "uil-suitcase" | "uil-fire" | "uil-clock";
  title: "Completed" | "Passionate" | "Support";
  text: "+15  projects" | "Coding Everyday" | "Online 24/7";
};

const cards: CardType[] = [
  {
    icon: "uil-suitcase",
    title: "Completed",
    text: "+15  projects",
  },
  { icon: "uil-fire", title: "Passionate", text: "Coding Everyday" },
  { icon: "uil-clock", title: "Support", text: "Online 24/7" },
];
function AboutSubContent() {
  return (
    <div className="content text-center lg:text-left">
      <ul className="cards flex gap-5 justify-center">
        {cards.map((card) => {
          return (
            <AboutCard
              key={card.text}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </ul>
      <p className="text-subTitle dark:text-white/80 text-sm md:text-base my-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
        Frontend Developer, I design and code responsive web pages using modern
        tech. I focus on delivering real results, with attention to performance,
        UX, and client goals.
      </p>
      <Link
        href="/MyCv.pdf"
        download={"/MyCv.pdf"}
        className="main-btn text-xl cursor-target"
        aria-label="Download CV"
      >
        Download CV
        <i
          className="uil uil-file-download block text-xl md:text-3xl -mt-1"
          aria-hidden="true"
        ></i>
      </Link>
    </div>
  );
}
export default AboutSubContent;
