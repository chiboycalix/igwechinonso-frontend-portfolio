import { SoftwareEngineer } from '@/constants'
import Image from 'next/image'
import React from 'react'

const User = () => {
  return (
    <div className='relative w-full'>
      {/* https://storyset.com/illustration/version-control/bro/animate */}
      <Image src={SoftwareEngineer} alt={"SoftwareEngineer"} className='w-[1000px] sm:h-[800px] h-[400px]' />
    </div>
  )
}

export default User