import {Outlet} from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hiden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-pink-200">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to E-Commerce shopping
          </h1>
        </div>
      </div>
      <div className="flex  flex-1 item-center justify-center bg-background px-4 py-12 sm:px-5 lg:px-8">
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
