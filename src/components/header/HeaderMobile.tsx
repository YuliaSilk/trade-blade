"use client";

import {useState} from "react";
import Link from "next/link";
import {Logo, MainIcon} from "../icons/Logo";
import {MdMenu, MdClose} from "react-icons/md";
import Button from "../ui/Button";
import navItems from "../../data/NavItems";

const HeaderMobile = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const closeMobileMenu = () => setIsMobileMenuOpen(false);

 return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background">
   <div className="container flex h-[52px] items-center justify-between px-4">
    <Link
     href="/"
     className="flex items-center relative"
     onClick={closeMobileMenu}
    >
     <MainIcon
      width={52}
      height={52}
      className="flex shrink-0"
      aria-label="TradeBlade Logo"
     />
     <Logo
      width={64}
      height={28}
      className="flex shrink-0 absolute top-6 -translate-y-1/2 left-[72px] -translate-x-1/2"
     />
    </Link>

    <button
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     className="p-2 text-white hover:text-[#6A54FF] transition-colors "
     aria-label="Toggle menu"
    >
     <MdMenu className="w-6 h-6" />
    </button>
   </div>

   {isMobileMenuOpen && (
    <div
     className="fixed inset-0 bg-black/50 z-40 top-0"
     onClick={closeMobileMenu}
    />
   )}

   <div
    className={`fixed top-0 right-0 w-full h-[668px] p-4 bg-[#6A54FF] z-40 transform transition-transform duration-300 ease-in-out shadow-xl  ${
     isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
   >
    <button
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     className="flex absolute right-2 top-2 text-white hover:text-accent/20 transition-colors "
     aria-label="Toggle menu"
    >
     {isMobileMenuOpen && <MdClose className="w-8 h-8" />}
    </button>
    <nav className="flex flex-col gap-8 pt-[84px]">
     {navItems.map((item) => (
      <Link
       key={item.href}
       href={item.href}
       className="text-white/70 font-medium text-[24px] hover:text-[#57E1FF] transition-colors"
       onClick={closeMobileMenu}
      >
       {item.label}
      </Link>
     ))}

     <div className="flex gap-4  ">
      <Button
       variant="primary"
       className="w-full bg-accent border-2 border-accent text-background hover:bg-transparent hover:text-accent py-3  font-semibold transition-all"
       onClick={closeMobileMenu}
      >
       REGISTRATION
      </Button>
      <Button
       variant="outline"
       className="w-full bg-accent/20 border-2 border-accent text-accent hover:bg-[#35FF9E] py-3  font-semibold transition-all"
       onClick={closeMobileMenu}
      >
       LOG IN
      </Button>
     </div>
    </nav>
   </div>
  </header>
 );
};

export default HeaderMobile;
