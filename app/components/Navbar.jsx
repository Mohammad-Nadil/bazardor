import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/gov-logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <Container>
        <div className="flex row items-center justify-between py-4">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 xs:size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <Image src={logo} alt="logo" />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight flex items-center gap-2 text-primary">
                  <span className="hidden sm:block">আজকের</span>{" "}
                  <span>বাজারদর</span>
                </h1>
                <p className="text-[7px] xs:text-[8px] sm:text-xs text-slate-500 ">
                  সর্বশেষ হালনাগাদ: <br className="xs:hidden" /> ২০ অক্টোবর ২০২৪
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
            <label className="relative w-full">
              <span className="absolute inset-y-0 right-3 flex items-center pl-3">
                <span className="material-symbols-outlined text-slate-400">
                  search
                </span>
              </span>
              <input
                className="block w-full px-3 py-2 border border-slate-200  rounded-lg bg-slate-50 focus:ring-primary focus:border-primary text-sm"
                placeholder="পণ্য অনুসন্ধান করুন..."
                type="text"
              />
            </label>
          </div>
          <div className="flex items-center justify-end  gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-xs xs:text-sm hover:bg-primary/20 transition-colors">
              <IoLocationSharp />
              <span>ঢাকা মহানগর</span>
            </button>
            <FaUserCircle className="hidden sm:block text-3xl text-primary" />
          </div>
        </div>
        <div className=" md:hidden  ">
          <label className="relative w-full">
            <span className="absolute inset-y-0 right-3 flex items-center pl-3">
              <span className="material-symbols-outlined text-slate-400">
                search
              </span>
            </span>
            <input
              className="block w-full px-3 py-2 border border-slate-200  rounded-lg bg-slate-50 focus:ring-primary focus:border-primary text-sm"
              placeholder="পণ্য অনুসন্ধান করুন..."
              type="text"
            />
          </label>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
