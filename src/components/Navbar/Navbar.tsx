import Link from "next/link";
import Logo from "@/components/Logo/LogoWhite";
import Button from "@/components/Buttons/Button";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";
import { smoothScrollTo } from "../Sections/LandingPage/helpers";
import { APP_URL } from "@/utils/constants";

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <>
      <NavbarMobile />
      <nav
        className={`hidden md:flex justify-around absolute items-center w-full transition-all ${
          scroll ? "bg-white p-4 bg-opacity-30" : "p-4"
        }`}
      >
        <div className="flex space-x-16 items-center text-black font-semibold">
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("landing");
            }}
          >
            <Logo />
          </Link>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("landing");
            }}
          >
            Home
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("pricing");
            }}
          >
            Pricing
          </Link>
          <Link
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("features");
            }}
          >
            Features
          </Link>
          <Link
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("faq");
            }}
          >
            FAQ
          </Link>
        </div>
        <div className="hidden md:inline-block">
          <a href={APP_URL} className="w-full" target="_blank" rel="noreferrer">
            <Button className="">Sign in</Button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
