import React from 'react'
import { AlignJustify } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Button } from './../ui/button';


function AdminHeader({setOpen}) {
  return (
   <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
    <Button onClick={()=>setOpen(true)} className="lg:hidden sm:block rounded-xl">
    <AlignJustify />
    <span className="sr-only">Toggle Menu</span>   
    </Button>
    <div className="flex flex-1 justify-end">
      <Button className="inline-flex gap-2 itemc rounded-3xl px-4 py2 text-sm font-medium shadow">
      <LogOut />Logout</Button>
    </div>

   </header>
  )
}

export default AdminHeader;