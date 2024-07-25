"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import HTMLIcon from "../../public/images/icons/html-icon.svg";
import CSSIcon from "../../public/images/icons/css-icon.svg";
import FigmaIcon from "../../public/images/icons/icons8-figma.svg";
import FlutterIcon from "../../public/images/icons/icons8-flutter.svg";
import NextJsIcon from "../../public/images/icons/icons8-nextjs.svg";
import ReactIcon from "../../public/images/icons/icons8-react-js.svg";
import WordpressIcon from "../../public/images/icons/icons8-wordpress.svg";

import Dynamic365Icon from "../../public/images/icons/dynamics-365.svg";
import CRMICON from "../../public/images/icons/icons8-crm-64.png";


import PostgresIcon from "../../public/images/icons/icons8-postgres.svg";
import MySqlIcon from "../../public/images/icons/icons8-mysql.svg";
import MongoIcon from "../../public/images/icons/mongodb-icon.svg";


const TAB_DATA = [
  {
    title: "web",
    id: "web",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex flex-wrap items-center space-x-6">
    <Image src={HTMLIcon} alt="HTML Icon" width={82} height={82} />
    <Image src={CSSIcon} alt="CSS Icon" width={82} height={82} />
    <Image src={NextJsIcon} alt="NextJS Icon" width={82} height={82} />
    <Image src={ReactIcon} alt="React Icon" width={82} height={82} />
    <Image src={FigmaIcon} alt="Figma Icon" width={82} height={82} />
    {/* Adding a new line */}
    <div className="w-full"></div> {/* Forces images below to the new line */}
    <Image src={FlutterIcon} alt="Flutter Icon" width={82} height={82} />
    <Image src={WordpressIcon} alt="WordPress Icon" width={82} height={82} />
        </li>
      </ul>
    ),
  },
  {
    title: "system",
    id: "system",
    content: (
      <ul className="list-disc pl-2">
        <Image src={Dynamic365Icon} alt="Dynamic365 Icon" width={82} height={82} />
        <Image src={CRMICON} alt="CRM Icon" width={82} height={82} />
      </ul>
    ),
  },
  {
    title: "database",
    id: "database",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center space-x-4">
          <Image src={MySqlIcon} alt="MYSql Icon" width={82} height={82} />
          <Image src={PostgresIcon} alt="Postgres Icon" width={82} height={82} />
          <Image src={MongoIcon} alt="Mongo Db Icon" width={82} height={82} />
          
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("web");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
      <section
      id="about" 
      
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-28 xl:px-16">
        <div>
        <h4 className="text-2xl font-bold  mb-2">Technologies We Rely On To Achieve Success</h4>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              {" "}
              Web Development{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("system")}
              active={tab === "system"}
            >
              {" "}
              System Development{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          
        </div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          At M.A.P. Tech Pvt. Ltd., we believe in the power of collaboration and innovation. Our IT company is dedicated to delivering top-notch technology solutions that drive business success and transformation. Whether you need custom software development, IT consulting, or advanced technological integrations, our team of skilled professionals is here to help.
          </p>


          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
