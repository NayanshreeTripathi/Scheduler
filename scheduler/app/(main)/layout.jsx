"use client"
import { useUser } from '@clerk/nextjs'
import { BarChart, Calendar, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BarLoader } from 'react-spinners';

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
  ];

const AppLayout = ({children}) => {
  
  const {isLoaded} = useUser();
  const pathname = usePathname();

  return (
    <div>
        {!isLoaded && <BarLoader width={"100%"} color='#36d7b7'/>}
        <div className='flex flex-col h-screen bg-blue-50 md:flex-row'>
            <aside className='hidden md:block w-64 bg-white'>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                            <Link  href={item.href} className={`flex items-center text-gray-700 p-4 hover:bg-gray-100 ${
                                pathname === item.href ? "bg-blue-100" : ""
                            }`} >
                            <item.icon className='w-5 h-5 mr-3' />
                            {item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className='flex-1 overflow-y-auto p-4 md:p-8' >
                <header className='flex items-center justify-between mb-4'>
                    <h2 className='text-5xl md:text-6xl gradient-tittle pt-2 md:pt-0 text-center md:text-left w-full'>
                        {navItems.find((item) => item.href === pathname).label || "Dashboard"}
                    </h2>
                </header>
            </main>
            {children}
        </div>
        
    </div>
  )
}

export default AppLayout