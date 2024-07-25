"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="lg:py-2 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg glassmorphism">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="mb-2 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400">
              Elevating Your Digital Journey with Seamless Solutions.
            </span>
            <br />
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
              <TypeAnimation
                sequence={[
                  "Business Intelligence",
                  500,
                  "Web Development",
                  500,
                  "Mobile Development",
                  500,
                  "Outsourcing Software Development",
                  500,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
        </motion.div>
        <div className="mt-4 lg:mt-0 lg:ml-10 rounded-full  lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <Image
            src="/gif/Animation-1721757216649.gif"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

<style jsx>{`
  .glassmorphism {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`}</style>
