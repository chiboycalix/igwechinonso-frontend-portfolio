import React from 'react'
import Image from "next/image";
import { Typography } from "@/components/MaterialTailwind";
import { Logo } from "@/assets/images"
import Title from "../Title";
import { useRouter } from 'next/navigation';

const LogoComponent = () => {
  const router = useRouter()
  return (
    <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
      <Typography
        as="a"
        href="#"
        variant="h6"
        className="mr-4 cursor-pointer py-1.5"
      >
        <Image src={Logo} alt="portfolio logo" className="w-[30px] h-[30px]" />
      </Typography>
    </div>
  )
}

export default LogoComponent