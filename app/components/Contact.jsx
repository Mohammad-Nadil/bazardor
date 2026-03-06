import React from "react";
import Container from "./Container";
import { PiSpeakerHighBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { FaArrowRight, FaDownload, FaHeadset } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-primary text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-9xl">
                <PiSpeakerHighBold />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">অভিযোগ করুন</h3>
            <p className="text-green-100 text-sm mb-4">
              অতিরিক্ত দাম বা অনিয়ম দেখলে সরাসরি অভিযোগ জমা দিন।
            </p>
            <div className="inline-flex items-center gap-2 font-semibold ">
              শুরু করুন
              <span className="material-icons-outlined">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-9xl">
                <FaHeadset />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">হটলাইন ১৬১২১</h3>
            <p className="text-slate-300 text-sm mb-4">
              ভোক্তা অধিকার সংক্রান্ত যে কোন প্রয়োজনে কল করুন আমাদের হটলাইনে।
            </p>
            <div className="inline-flex items-center gap-2 font-semibold text-amber-400">
              কল করুন
              <span className="material-icons-outlined">
                <TbPhoneCall />
              </span>
            </div>
          </div>
          <div className="bg-white  p-6 rounded-2xl shadow-lg border border-slate-200  relative overflow-hidden group cursor-pointer">
            <div className="absolute -right-4 -bottom-4 opacity-5  group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-9xl">
                <FaDownload />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800 ">
              মোবাইল অ্যাপ
            </h3>
            <p className="text-slate-500  text-sm mb-4">
              আপনার হাতের মুঠোয় বাজারের সকল তথ্য পেতে অ্যাপটি ডাউনলোড করুন।
            </p>
            <div className="inline-flex items-center gap-2 font-semibold text-primary">
              ডাউনলোড{" "}
              <span className="material-icons-outlined">
                <FiDownload />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
