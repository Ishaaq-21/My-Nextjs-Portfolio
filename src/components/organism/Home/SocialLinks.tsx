import Link from "next/link";
import socialLinks, { SocialLink } from "./socialLinks";
export default function SocialLinks() {
  return (
    <ul className="social-links flex gap-y-3 flex-col    order-0 w-[50px]  lg:w-[118px]">
      {socialLinks.map((link: SocialLink) => {
        return (
          <li key={link.href}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={`Visit my ${link.name} profile`}
              className={`${link.hoverColor} transition duration-300 text-3xl dark:text-zinc-100 dark:${link.hoverColor} ${link.darkHoverColor} cursor-target p-2 `}
            >
              <i className={link.icon}></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
