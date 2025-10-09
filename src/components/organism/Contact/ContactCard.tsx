import Link from "next/link";
import { SocialAccount } from "./SocialLinks";

export default function ContactCard({
  socialObj,
}: {
  socialObj: SocialAccount;
}) {
  const linkUrl =
    socialObj.name === "Email" ? `mailto:${socialObj.data}` : socialObj.url;

  return (
    <div className="flex w-[300px] flex-col justify-center items-center bg-white dark:bg-slate-900 border-2  border-2 border-[#ccc] dark:border-primary-light rounded-2xl p-3 ">
      <i className={`${socialObj.icon} text-3xl text-primary block mb-2`}></i>
      <p className="text-dark dark:text-white/80 text-xl font-bold mb-3">
        {socialObj.name}
      </p>
      <p className="text-lg text-subTitle dark:text-zinc-100/80 mb-2">
        {socialObj.data}
      </p>
      <Link
        className="text-base text-subTitle dark:text-zinc-100/80 group hover:text-primary transition duration-300 cursor-target"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reach me out{" "}
        <i className="uil uil-angle-double-right transition duration-300 group-hover:translate-x-1 inline-block"></i>
      </Link>
    </div>
  );
}
