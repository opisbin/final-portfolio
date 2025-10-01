import React from 'react'
import Logo from './Logo'
import Socials from './Socials'
import {CiMenuFries} from 'react-icons/ci'
import {MdFileDownload} from "react-icons/md";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import NavLinks from './NavLinks'


const Header = () => {
  return (
    <header className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
        <div className="container mx-auto">
            <div className='flex items-center justify-between py-6'>
                {/* Logo */}
            <Logo />
            {/* Navigation Mobile - (sheet component) */}
            <Sheet>
                <SheetTrigger className='cursor-pointer text-[30px] text-white'>
                    <CiMenuFries />
                </SheetTrigger>
                <SheetContent className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20" side='left'>
                    <SheetHeader>
                        <SheetTitle><Logo /></SheetTitle>
                        <SheetDescription className="sr-only">
                            Navigation
                        </SheetDescription>
                    </SheetHeader>
                    <NavLinks className="flex flex-col gap-8 max-w-[100px]"/>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
  )
}

export default Header