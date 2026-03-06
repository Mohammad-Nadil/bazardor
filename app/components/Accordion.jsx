"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const Accordion = ({ des, title, icon, items }) => {
  const [open, setOpen] = useState(true);
  const contentRef = useRef(null);

  return (
    <section>
      <Container>
        <div className="space-y-4">
          {/* Food Items Category */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex cursor-pointer items-center justify-between w-full p-3 xs:p-5 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center  gap-4">
                <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-3xl">
                  {icon}
                </div>
                <div className="text-left ">
                  <h3 className="font-bold xs:text-lg">{title}</h3>
                  <p className="text-xs text-slate-500">{des}</p>
                </div>
              </div>

              <FaAngleDown
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              ref={contentRef}
              style={{
                height: open ? contentRef.current?.scrollHeight : 0,
              }}
              className="overflow-hidden transition-all duration-300"
            >
              <div className="p-5 pt-0  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                {items.map((item, index) => (
                  <Link
                    href={"/more"}
                    key={index}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col gap-3"
                  >
                    <div
                      className="w-full aspect-video bg-center bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC-kKKKAXy_C0tsb--SxykzAvOluF-6FKUxWT456bwvrxA6iZgGVhM9WnuP-PSBKqdBdfxhklKlMzQqXeTSb3t4358un_94Ch_ojdPo34HB-vwANjcbw7d2Y9UAffG0x8uLzimr4zofWgXrF_zCLk0V0rFCjvvYMatlRVqkX40k6EPntnTXAyECsdrc1W_12e_f9lfQKUr4cATQK0GhdI4oVPyI67qnHmDXi3eY4NWSDfKkwLX-dM1_-OByWnBbLz4DTGyBN1T_TxRA)",
                      }}
                    />

                    <div>
                      <p className="font-bold text-slate-900">চাল সরু</p>
                      <p className="text-xs text-slate-500">প্রতি কেজি</p>
                      <p className="text-xl font-bold text-primary mt-1">
                        ৬৫ – ৭০ টাকা
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Accordion;
