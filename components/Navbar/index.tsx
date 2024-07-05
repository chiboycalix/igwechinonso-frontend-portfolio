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


export const NavList = ({ isDarkMode, currentPath, isFooter }: { isDarkMode: boolean; currentPath: string;isFooter?:boolean }) => {
  const footerStyle = isFooter ? "2xs:flex-row flex-wrap" : "flex-col"
  return (
    <ul className={cn("my-2 flex gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6", footerStyle)}>
      {
        links.map((link) => {
          return <Typography
            as="li"
            className={`p-1 font-medium font-inter text-base ${isDarkMode ? "text-white" : "text-black"} ${currentPath === link.path ? 'text-primary-400 font-bold' : ''}`}
            key={link.id}
          >
            <Link href={link.path} className="flex items-center hover:text-primary-500 transition-colors">
              {link.name}
            </Link>
          </Typography>
        })
      }
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ThemeSwitcher />
      </Typography>
    </ul>
  );
}

const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const currentPath = usePathname();
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
    <Navbar className="fixed top-0 left-0 z-100 px-[1rem] xl:px-[5rem] py-3 max-w-full rounded-none shadow-sm border-none dark:bg-[#0F151B] bg-white">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto">
        <LogoComponent />
        <div className="hidden md:block">
          <NavList isDarkMode={isDarkMode} currentPath={currentPath} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} strokeWidth={2} />
          ) : (
            <Bars3Icon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`} strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isDarkMode={isDarkMode} currentPath={currentPath} />
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent