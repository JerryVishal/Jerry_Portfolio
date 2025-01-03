import Link from "next/link";
import { Button } from "./ui/button"; // Ensure the correct import path
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
    <header className="bg-primary py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <h1 className="text-4xl font-semibold cursor-pointer">
            Jerry Vishal <span className="text-amber-600">.</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;