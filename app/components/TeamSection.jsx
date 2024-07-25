"use client";
import React from "react";
import Image from "next/image";
import TeamBg from "../../public/images/team-bg.jpg"; // Updated to match directory structure

const TeamSection = () => {
  return (
    <section
      id="team"
      className="team spad set-bg relative min-h-[200px] max-h-[400px]"
      style={{
        backgroundImage: `url(${TeamBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-white flex flex-col h-full mt-0 mx-auto px-4 sm:px-10 md:px-20 py-2 bg-overlay">
        <span className="text-lg uppercase tracking-wider">Nice to Meet</span>
        <h5 className="text-4xl font-bold mb-0">Our Team</h5>
      </div>
      <div className="team-member-container flex flex-wrap gap-6 justify-center mb-2">
        <div className="team-member text-center  hover:shadow-xl transition-shadow duration-300 mb-6">
          <div className="relative group">
            <Image
              src="/images/team/MD.jpeg"
              alt="Team Member"
              width={300}
              height={500} // Changed height to make it a vertical rectangle
              className="object-cover rounded-md mx-auto group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-4">
              <h6 className="text-2xl font-semibold text-white mt-4 group-hover:text-white-500 transition-colors duration-300">Manish Pathak</h6>
              <p className="text-lg text-white group-hover:text-white-500 transition-colors duration-300">MD & Founder</p>
            </div>
          </div>
        </div>

        <div className="team-member text-center  hover:shadow-xl transition-shadow duration-300 mb-6">
          <div className="relative group">
            <Image
              src="/images/team/ceo.png"
              alt="Team Member"
              width={300}
              height={500} // Changed height to make it a vertical rectangle
              className="object-cover rounded-md mx-auto group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-4">
              <h6 className="text-2xl font-semibold text-white mt-4 group-hover:text-white-500 transition-colors duration-300">Anil Nhemhafuki</h6>
              <p className="text-lg text-white group-hover:text-white-500 transition-colors duration-300">CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="team-member text-center  hover:shadow-xl transition-shadow duration-300 mb-6">
          <div className="relative group">
            <Image
              src="/images/team/CTO.jpeg"
              alt="Team Member"
              width={300}
              height={500} // Changed height to make it a vertical rectangle
              className="object-cover rounded-md mx-auto group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-4">
              <h6 className="text-2xl font-semibold text-white mt-4 group-hover:text-white-500 transition-colors duration-300">Pawan Bhattrai</h6>
              <p className="text-lg text-white group-hover:text-white-500 transition-colors duration-300">CTO & Founder</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;
