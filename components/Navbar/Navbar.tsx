import LeftNav from "./left/LeftNav";
import { NavigationMenuViewport, NavigationMenu } from "../NavigationMenu";

const Navbar = () => {
  return (
    <div className="px-4 [&:has([data-state=open])_header]:rounded-b-none">
      {/* [&:has([data-state=open])_header]:rounded-b-none = if there is a tag that have data-state=open in this div then give header a rounded-b-none */}
      <NavigationMenu>
        <header className="rounded-3xl h-16 p-2 w-full flex justify-between bg-background shadow-sm">
          <LeftNav />
          <nav>
            <h1 className="text-5xl font-semibold">Jamilk</h1>
          </nav>
          <div className="w-full flex justify-end">RIGHT</div>
        </header>
        <NavigationMenuViewport className="w-full bg-transparent border-none shadow-none overflow-visible" />
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
