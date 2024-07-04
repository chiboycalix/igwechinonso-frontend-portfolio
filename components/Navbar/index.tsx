"use client"
import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@/components/MaterialTailwind";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "@/components/SwitchThemeButton";
import { useTheme } from 'next-themes';
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets/images"
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Works",
    path: "/works"
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 4,
    name: "Service",
    path: "/service"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const NavList = ({ isDarkMode, currentPath }: { isDarkMode: boolean; currentPath: string; }) => {
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      {
        links.map((link) => {
          return <Typography
            as="li"
            className={`p-1 font-medium inter text-base ${isDarkMode ? "text-white" : "text-black"} ${currentPath === link.path ? 'text-primary-400 font-bold' : ''}`}
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
    <Navbar className="px-[1rem] xl:px-[5rem] py-3 max-w-full rounded-none shadow-sm border-none dark:bg-[#0F151B] bg-white">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Image src={Logo} alt="portfolio logo" className="w-6 h-6" />
        </Typography>
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