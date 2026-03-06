import Container from "@/app/components/Container";
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaSearch,
} from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { GiBowlOfRice } from "react-icons/gi";
import Link from "next/link";
import { PiClockClockwiseBold } from "react-icons/pi";

const page = () => {
  let item = [1, 2, 3, 4, 5];
  return (
    <section>
      <Container className={`py-5`}>
        {/* <!-- Breadcrumb & Back Button --> */}
        <div className="flex  items-center justify-between mb-8">
          <nav className="flex items-center gap-1 sm:gap-2 text-sm text-primary">
            <a className="hover:text-primary" href="#">
              হোম
            </a>
            <span className="material-symbols-outlined text-xs">
              <FaAngleRight />
            </span>
            <a className="hover:text-primary" href="#">
              পণ্য তালিকা
            </a>
            <span className="material-symbols-outlined text-xs">
              <FaAngleRight />
            </span>
            <span className="text-primary font-semibold flex items-center gap-1">
              চাল <span className="hidden xs:block" >(Rice)</span>
            </span>
          </nav>
          <Link
            href={"/"}
            className="flex items-center gap-2 text-primary hover:text-white font-semibold hover:bg-primary-light px-3 py-1.5 rounded-lg border border-primary transition-all text-xs sm:text-base"
          >
            <span className="material-symbols-outlined text-sm">
              <FaArrowLeft />
            </span>
            ফিরে যান
          </Link>
        </div>
        {/* <!-- Title Section --> */}
        <div className="mb-10 ">
          <h2 className="text-4xl font-black text-slate-900  mb-2">
            চাল (Rice)
          </h2>
          <div className="flex items-center justify-start gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <p className="text-primary font-medium text-sm xs:text-base">
              আজকের বাজারদর (Today's Market Price)
            </p>
          </div>
        </div>
        {/* <!-- Filters Section --> */}
        <div className="bg-white  p-4 rounded-xl shadow-sm border border-slate-200  mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined ">
                <FaSearch />
              </span>
              <input
                className="w-full pl-10 pr-4 py-3 rounded-lg border-slate-200  focus:ring-primary focus:border-primary "
                placeholder="এই ক্যাটাগরিতে পণ্য খুঁজুন..."
                type="text"
              />
            </div>
            <div className="relative">
              <HiOutlineBars3BottomLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select className="w-full pl-10 pr-4 py-3 border rounded-lg border-slate-200 focus:ring-primary focus:border-primary appearance-none">
                <option>মূল্য (নিম্ন থেকে উচ্চ)</option>
                <option>মূল্য (উচ্চ থেকে নিম্ন)</option>
                <option>জনপ্রিয়তা</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- Items List --> */}
        <div className="flex flex-col gap-3">
          {item.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    <GiBowlOfRice />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    চাল সরু - নাজির/মিনিকেট
                  </h3>
                  <p className="text-sm text-slate-500">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end justify-between w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <span className="text-2xl font-black text-primary tracking-tight">
                  ৮০ - ৮৫ টাকা
                </span>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[12px]">
                    <PiClockClockwiseBold />
                  </span>
                  সর্বশেষ আপডেট: ৩ ঘণ্টা আগে
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Pagination --> */}
        <div className="flex items-center justify-center gap-2 mt-8 py-4">
          <button className="size-10 flex items-center justify-center rounded-lg border border-primary/10 bg-white text-slate-600 hover:bg-primary/5">
            <span className="material-symbols-outlined">
              <FaAngleLeft />
            </span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
            ১
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-primary/10 bg-white text-slate-600 hover:bg-primary/5">
            ২
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-primary/10 bg-white text-slate-600 hover:bg-primary/5">
            ৩
          </button>
          <span className="px-2 text-slate-400">...</span>
          <button className="size-10 flex items-center justify-center rounded-lg border border-primary/10 bg-white text-slate-600 hover:bg-primary/5">
            <span className="material-symbols-outlined">
              <FaAngleRight />
            </span>
          </button>
        </div>{" "}
        {/* <!-- Disclaimer Section --> */}
        <div className="mt-12 p-6 bg-gov-red/5 rounded-xl border border-gov-red/10 text-center">
          <p className="text-sm text-slate-600  italic">
            * প্রদর্শিত বাজার দর ঢাকা মহানগরীর বিভিন্ন খুচরা বাজারের সংগৃহীত
            দরের গড়। স্থানীয় পর্যায়ে দর ভিন্ন হতে পারে।
          </p>
        </div>
      </Container>
    </section>
  );
};

export default page;
