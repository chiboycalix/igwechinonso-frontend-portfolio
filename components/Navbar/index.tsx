"use client"
import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@/components/MaterialTailwind";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from 'next-themes';
import { usePathname } from "next/navigation";
import { links } from "@/constants";
import ThemeSwitcher from "@/components/SwitchThemeButton";
import LogoComponent from "@/components/Logo";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface NavLinkProps {
  className?: string;
  isDarkMode: boolean;
  currentPath: string;
  setOpenNav?: any;
  openNav?: any;
}

export const NavList = ({ isDarkMode, currentPath, setOpenNav, openNav }: NavLinkProps) => {

  return (
    <ul className={cn("my-2 flex gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 flex-col")}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ThemeSwitcher />
      </Typography>
      {
        links.map((link) => {
          const isActive = link.exact ? currentPath === link.path : currentPath.startsWith(link.path);
          return <Typography
            as="li"
            className={`p-1 font-medium font-sora text-base ${isDarkMode ? "text-white" : "text-black"} ${isActive ? 'text-primary-400 font-bold' : ''}`}
            key={link.id}
            onClick={() => setOpenNav(!openNav)}
          >
            <Link href={link.path} className="flex items-center hover:text-primary-500 transition-colors">
              {link.name}
            </Link>
          </Typography>
        })
      }
    </ul>
  );
}

const NavbarComponent = () => {
  const currentPath = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="backdrop-filter backdrop-blur-2xl fixed top-0 left-0 z-[90000] custom-wrapper py-4 max-w-full rounded-none shadow-md border-none dark:bg-[#0F151B] bg-white bg-opacity-70">
      <div className="flex items-center justify-between mx-auto">
        <LogoComponent />
        <div className="hidden md:block">
          <NavList isDarkMode={isDarkMode} currentPath={currentPath} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={true}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} strokeWidth={2} />
          ) : (
            <Bars3Icon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="">
        <NavList isDarkMode={isDarkMode} currentPath={currentPath} openNav={openNav} />
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent