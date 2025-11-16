"use client";

import Link from "next/link";
import {Logo, MainIcon} from "../icons/Logo";
import Button from "../ui/Button";
import navItems from "../../data/NavItems";

const HeaderDesktop = () => {
 return (
  <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background">
   <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-24">
     {/* Logo */}
     <Link
      href="/"
      className="flex items-center gap-2"
     >
      <MainIcon
       width={52}
       height={52}
      />
      <Logo
       width={80}
       height={34}
      />
     </Link>

     {/* Navigation */}
     <nav className="flex items-center gap-8">
      {navItems.map((item) => (
       <Link
        key={item.href}
        href={item.href}
        className="text-white font-medium text-sm hover:text-[#57E1FF] transition-colors"
       >
        {item.label}
       </Link>
      ))}
     </nav>

     {/* Buttons */}
     <div className="flex items-center gap-3">
      <Button
       variant="outline"
       className="px-8"
      >
       LOG IN
      </Button>
      <Button
       variant="primary"
       className="px-8"
      >
       REGISTRATION
      </Button>
     </div>
    </div>
   </div>
  </header>
 );
};

export default HeaderDesktop;
