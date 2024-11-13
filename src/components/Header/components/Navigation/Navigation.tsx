import MobileNavigation from "./components/MobileNavigation";
import DesktopNavigation from "./components/DesktopNavigation";

const Navigation = () => {
  return (
    <>
      <MobileNavigation hiddenFrom="xs" />
      <DesktopNavigation visibleFrom="xs" />
    </>
  );
};
export default Navigation;
