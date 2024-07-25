"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../public/images/Connect-Banner.png";

const BannerSection = () => {
  return (
    <section
      id="banner"
      className=" spad set-bg relative"
      style={{ backgroundImage: `url(${Banner.src})`, width:'100%' }}
    >
      <div className="text-white flex flex-col h-full mt-0 mx-auto px-4 sm:px-10 md:px-20 py-2 bg-overlay">
        <span className="text-lg uppercase tracking-wider">Nice to Meet</span>
        <h5 className="text-4xl font-bold mb-4">Our banner</h5>
      </div>
      <div className="-member-container flex flex-wrap gap-6 justify-center mb-0">
        <div className="banner-member text-center  hover:shadow-xl transition-shadow duration-300">

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-4">
            <h6 className="text-2xl font-semibold text-white mt-4 group-hover:text-white-500 transition-colors duration-300">Manish Pathak</h6>
            <p className="text-lg text-white group-hover:text-white-500 transition-colors duration-300">MD & Founder</p>
          </div>
        </div>


      </div>

    </section>
  );
};

export default BannerSection;
