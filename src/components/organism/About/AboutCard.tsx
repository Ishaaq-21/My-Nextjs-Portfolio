import { CardType } from "./AboutSubContent";

function AboutCard({ icon, title, text }: CardType) {
  return (
    <li className="card w-[90px] sm:w-[120px] lg:w-[150px] text-center bg-white dark:bg-slate-900 border-2 border-[#ccc] dark:border-primary-light  py-3 lg:py-5 px-2 lg:px-4 rounded-2xl">
      <i className={`${icon} text-2xl text-primary mb-2  block`}></i>
      <span className="text-[10px] sm:text-sm lg:text-base font-semibold text-title-dark dark:text-white block">
        {title}
      </span>
      <span className="text-[10px] text-subTitle dark:text-white/80">
        {text}
      </span>
    </li>
  );
}
export default AboutCard;
