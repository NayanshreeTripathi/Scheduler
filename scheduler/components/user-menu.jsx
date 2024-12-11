
"use client"

import React from 'react'
import { UserButton} from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'

const UserMenu = () => {
  return <UserButton appearance={{
    elements:{
        avatarBox:"w-11 h-11",
    },
  }}>
  <UserButton.MenuItems>
    <UserButton.Link label='My events' labelIcon = {<ChartNoAxesGantt size={15}/>} href='/events' />
    <UserButton.Action label='manageAccount'/>
  </UserButton.MenuItems>
  </UserButton>
}

export default UserMenu