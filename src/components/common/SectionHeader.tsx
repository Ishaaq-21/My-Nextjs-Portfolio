export default function SectionHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="mb-10">
      <h1 className="text-title font-bold w-fit  mx-auto text-3xl md:text-4xl dark:text-white">
        {title}
      </h1>
      <p className="text-subTitle text-sm w-fit mx-auto mt-1 dark:text-white/80">
        {subTitle}
      </p>
    </div>
  );
}
