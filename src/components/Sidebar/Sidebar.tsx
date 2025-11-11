import MobileBottomNav from './MobileBottomNav';
import DesktopSidebar from './DesktopSidebar';

export default function Sidebar() {
  return (
    <>
      <DesktopSidebar className="hidden lg:flex" />
      <MobileBottomNav className="lg:hidden" />
    </>
  );
}
