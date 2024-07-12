import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Paragraph from '@/components/Paragraph'
import { cn } from '@/utils/cn';

type DateProps = {
  hasIcon?: boolean;
  date: string;
  className?: string;
}
const Date = ({ hasIcon, date, className }: DateProps) => {
  return (
    <div className='flex items-center gap-2 w-full'>
      {hasIcon && <CalendarDaysIcon className='w-6 text-primary-500' />}
      <Paragraph
        as="p"
        size='small'
        text={date}
        className={cn('text-left', className)}
      />
    </div>
  )
}

export default Date