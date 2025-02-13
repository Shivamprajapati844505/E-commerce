import React from 'react'
import { Outlet } from 'react-router-dom';
import ShoppingHeader from './Header';
import { Button} from './../ui/button';

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        {/* {commann heder} */}
        <ShoppingHeader/>
        <main className="flex flex-col w-full">
          <Button>Click me</Button>
            <Outlet/>

        </main>
    </div>
  )
}

export default ShoppingLayout