import React from "react";
import Container from "./Container";

const Heading = () => {
  let options = [
    { label: "সবগুলো", value: "all" },
    { label: "জনপ্রিয়", value: "popular" },
    { label: "হ্রাসকৃত", value: "reduced" },
  ];
  return (
    <section id="heading">
      <Container className="pt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 ">
        <div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-black text-slate-900  mb-2">
            নিত্যপ্রয়োজনীয় পণ্যের তালিকা
          </h2>
          <p className="text-primary text-xs xs:text-sm sm:text-base">
            ভোক্তা অধিকার রক্ষায় সঠিক দাম জানুন
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {options.map((option) => (
            <button key={option.value} className="whitespace-nowrap px-4 py-2 rounded-full border border-primary hover:bg-primary-light hover:text-white  active:bg-primary active:text-white text-xs sm:text-sm font-medium duration-300">
              {option.label}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Heading;
