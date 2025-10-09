import TargetCursorWrapper from "@/components/AnimatedUiBlocks/TargetCursor";
import ScrollBar from "@/components/atoms/ScrollBar";
import ScrollTopTopOnReload from "@/components/atoms/ScrollToTopOnReload";
import MainSections from "@/components/organism/MainSections/MainSections";
import MobileScreenContextProvider from "@/contexts/MobileScreenContext";

export default function Home() {
  return (
    <MobileScreenContextProvider>
      <TargetCursorWrapper />
      <ScrollTopTopOnReload />
      <ScrollBar />
      <MainSections />
    </MobileScreenContextProvider>
  );
}
