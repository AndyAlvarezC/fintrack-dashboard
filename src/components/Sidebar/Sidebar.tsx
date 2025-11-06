import DesktopSidebar from './DesktopSidebar';
import MobileBottomNav from './MobileBottomNav';


export default function Sidebar() {
  return (
    <>
      <DesktopSidebar className="hidden lg:flex" />
      <MobileBottomNav className="lg:hidden" />
    </>
  );
}
