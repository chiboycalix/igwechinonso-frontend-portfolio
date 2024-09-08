import React from 'react'
import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import { useRouter } from 'next/navigation';

const LogoComponent = () => {
  const router = useRouter()
  return (
    <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
      <Image src={Logo} alt="portfolio logo" className="w-[30px] h-[30px] object-contain" />
    </div>
  )
}

export default LogoComponent