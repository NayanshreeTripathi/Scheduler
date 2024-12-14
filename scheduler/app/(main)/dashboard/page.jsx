
"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Form } from 'react-hook-form';

const Dashboard = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const {isLoaded , user} =useUser();
  return (
    <div className='space-y-8'>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
        </CardHeader>
        {/* updates */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div>
              <div className='flex items-center gap-2'>
                <span>{origin}</span>
                <Input placeholder="username"/>
              </div>
            </div>
            <Button type = "submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard