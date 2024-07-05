import React from 'react'
import Image from "next/image";
import { Typography } from "@/components/MaterialTailwind";
import { Logo } from "@/assets/images"
import Title from "../Title";

const LogoComponent = () => {
  return (
    <div className="flex items-center">
    <Typography
      as="a"
      href="#"
      variant="h6"
      className="mr-4 cursor-pointer py-1.5"
    >
      <Image src={Logo} alt="portfolio logo" className="w-[50px] h-[50px]" />
    </Typography>
    <Title as="h2" text="Chinonso" size="medium" className="dark:text-white text-black hidden sm:inline-block"/>
  </div>
  )
}

export default LogoComponent