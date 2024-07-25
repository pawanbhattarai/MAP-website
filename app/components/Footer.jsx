import React from "react";
import Image from 'next/image';
import Logo_horizen from "../../public/images/logo_horizen.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A0119' }} className="footer border z-5 p-5 border-t-[#124A99] border-l-transparent border-r-transparent ">
      <div className="container p-5 flex justify-between">
        <span className="flex flex-col h-fullmx-auto px-20 ">
        <Image src={Logo_horizen} alt="Logo Icon" width={200} height={100} />
        </span>
        <p className="text-white"> © {new Date().getFullYear()} All Rights Reserved. 
          <span className="text-blue-600 ml-1 font-bold">M.A.P. Tech Pvt. Ltd.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
