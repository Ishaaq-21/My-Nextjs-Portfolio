import MainContent from "./MainContent";
import MainImg from "./MainImage";
import SocialLinks from "./SocialLinks";
import ParticlesWrapper from "@/components/AnimatedUiBlocks/Particles";

const MainHome = () => {
  return (
    <section
      id="Home"
      className="hidden-section relative w-full  h-[calc(100vh-45px)] md:h-[calc(100vh-70px)] py-10 md:py-0"
    >
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <ParticlesWrapper />

        <div className="container absolute mx-auto px-6 md:px-8 w-full h-full flex items-center flex-wrap md:flex-nowrap gap-2 md:gap-x-6 left-1/2 -translate-x-1/2 top-0">
          <SocialLinks />
          <MainContent />
          <MainImg />
        </div>
      </div>
    </section>
  );
};

export default MainHome;
