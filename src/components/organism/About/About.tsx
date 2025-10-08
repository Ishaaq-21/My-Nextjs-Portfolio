import AboutImageWrapper from "@/components/AnimatedUiBlocks/TiltedCard";
import AboutSubContent from "./AboutSubContent";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <SectionWrapper sectionName={"About"}>
      <SectionHeader title={"About"} subTitle={"My Introduction"} />
      <div className="main-content flex flex-col lg:flex-row md:gap-x-16 lg:gap-x-28 items-center gap-y-10">
        <AboutImageWrapper />
        <AboutSubContent />
      </div>
    </SectionWrapper>
  );
}
