import DesktopSidebar from './DesktopSidebar';
import MobileBottomNav from './MobileBottomNav';


export default function Sidebar() {
  return (
    <>
      <DesktopSidebar className="hidden sm:flex" />
      <MobileBottomNav className="sm:hidden" />
    </>
  );
}
