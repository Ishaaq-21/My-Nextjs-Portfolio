import Link from "next/link";
import socialLinks, { SocialLink } from "../Home/socialLinks";

const sectionNames = ["About", "Skills", "Portfolio", "Contact"];
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 pt-12 pb-20  md:!py-16">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="w-fit dark:text-zinc-100 mx-auto text-title text-2xl md:text-4xl mb-10 font-bold">
          Isaaq <span className="text-primary">Hk</span>
        </h2>
        <ul className="section flex justify-center md:justify-around md:w-3/4 mb-8 mx-auto place-items-center gap-2 md:gap-5">
          {sectionNames.map((name) => {
            return (
              <li key={name}>
                <Link
                  href={`#${name}`}
                  className="text-sm md:text-lg font-semibold text-subTitle dark:text-zinc-100/80 dark:hover:text-primary hover:text-primary transition duration-300 cursor-target p-2"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="section flex flex-row-reverse justify-center w-3/4 mb-8 mx-auto place-items-center gap-5">
          {socialLinks.map((socialAcc: SocialLink) => {
            return (
              <li key={socialAcc.icon}>
                <Link
                  href={socialAcc.href}
                  className={`text-2xl md:text-4xl text-subTitle dark:text-zinc-100/80 transition duration-300 cursor-target p-2 ${socialAcc.hoverColor} ${socialAcc.darkHoverColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${socialAcc.name} profile`}
                >
                  <i className={socialAcc.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto dark:text-zinc-100 w-fit text-center text-sm md:text-base">
          &copy; Isaaq <span className="text-primary">Hk</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
