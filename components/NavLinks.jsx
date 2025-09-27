"use client"

import Link from 'next/link'
import React, { use } from 'react'
import { usePathname } from 'next/navigation'

const links =[
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const NavLinks = ({containerStyles}) => {
    const pathname = usePathname();
  return (
    <ul className={containerStyles}>
        {links.map((link, index) => {
            // Determine if the link is active
            const isActive = pathname === link.path;
            // Calculate the number of characters in the link name
            const charLength = link.name.length;
            // Set the line width based on the character length
            const lineWidth = charLength > 5 ? 'after:w-[120%]' : 'after:w-[90%]';
            console.log(charLength);
            return (
            <Link href={link.path} key={index} className={`relative text-lg uppercase text-white ${isActive && `after:content-[''] after:block after:absolute after:left-0 after:top-1/>2 ${lineWidth} after:h-[4px] after:bg-accent after-translate-y-1/2 after:z-0`}`}>
                <span className='relative z-10'>{link.name}</span>
            </Link>
          );
        })}
    </ul>
  );
};

export default NavLinks