"use client";
import React, { useState } from "react";
import Heading from "../components/Heading";
import Accordion from "../components/Accordion";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { TbGasStation } from "react-icons/tb";
import Contact from "../components/Contact";
import Modal from "../components/Modal";

const page = () => {
  let food = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let others = [1, 2];

  return (
    <div className="flex flex-col gap-5">
      <Heading />
      <Accordion
        items={food}
        icon={<PiBowlFoodDuotone />}
        title="খাদ্যসামগ্রী (Food items)"
        des="খাদ্যসাচাল, ডাল, আটা ও চিনিমগ্রী"
      />
      <Accordion
        items={others}
        icon={<TbGasStation />}
        title=" অন্যান্য (other items)"
        des="অন্যান্য পণ্যের তালিকা"
      />
      <Contact />
    </div>
  );
};

export default page;
