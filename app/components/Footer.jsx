import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/gov-logo.png";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-50  border-t border-primary/10 mt-12">
      <Container className={"px-2!"}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 lg:gap-8 py-8">
          <div className="flex items-center gap-3 sm:gap-6">
            <div
              className="w-16 sm:w-20 aspect-square bg-center bg-contain bg-no-repeat"
              data-alt="Government of Bangladesh Official Logo"
            >
              <Image src={logo} alt="logo" />
            </div>
            <div cl>
              <p className="text-primary font-bold  text-lg sm:text-xl">
                জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর
              </p>
              <p className="text-slate-600 text-[10px] xs:text-xs sm:text-base ">
                বাণিজ্য মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="">
              <p className="font-bold text-slate-900  mb-2">যোগাযোগ</p>
              <p className="text-sm text-slate-600 ">হটলাইন: ১৬১২১</p>
            </div>
            <div className="">
              <p className="font-bold text-slate-900  mb-2">সামাজিক যোগাযোগ</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary cursor-pointer">
                  <FaGlobe />
                </span>
                <span className="material-symbols-outlined text-primary cursor-pointer">
                  <FaEnvelope />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-5 border-t border-primary/10 text-center text-[10px] sm:text-sm text-slate-500">
          <p>
            © ২০২৪ জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
