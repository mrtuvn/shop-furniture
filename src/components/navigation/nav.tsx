import { NAVIGATION_DEMO_2 } from "@/data/navigation";
import NavItem from "./nav-item";

function Nav() {
  return (
    <nav className="hidden md:flex items-center space-x-6 md:w-[1/2] md:min-w-[30%]">
      <ul className="nc-Navigation flex items-center gap-5">
        {NAVIGATION_DEMO_2.map((menuItem) => (
          <NavItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
