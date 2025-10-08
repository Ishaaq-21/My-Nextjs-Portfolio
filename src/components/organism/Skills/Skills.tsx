import SectionHeader from "@/components/common/SectionHeader";
import SectionWrapper from "@/components/common/SectionWrapper";
import Spider from "./SpiderSkills";

export default function Skills() {
  return (
    <SectionWrapper sectionName={"Skills"}>
      <SectionHeader title={"Skills"} subTitle={"Technical Skills"} />
      <Spider />
    </SectionWrapper>
  );
}
