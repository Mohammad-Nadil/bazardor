"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

export default function layout({ children }) {
  const show = useSelector((state) => state.location.showModal);
  return (
    <div>
      <Navbar />
      {children}
      {show && <Modal />}
      <Footer />
    </div>
  );
}
