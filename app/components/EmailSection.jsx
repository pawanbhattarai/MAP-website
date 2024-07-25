"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import InstagramIcon from "../../public/images/icons/icons8-instagram.svg";
import LinkedinIcon from "../../public/images/icons/linkedin-icon.svg";
import FacebookIcon from "../../public/images/icons/icons8-facebook.svg";
import WhatsappIcon from "../../public/images/icons/icons8-whatsapp.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section style={{ backgroundColor: '#0A0119' }}
      id="contact"
      className="grid md:grid-cols-2 flex flex-col h-full mt-0 mx-auto px-20 py-2 sm:py-28"
    >
      
      <div className="text-left text-white flex flex-col h-full mt-24 mx-auto px-20 py-2">
        <h5 className="text-2xl font-bold  mb-2 ">
          Let&apos;s Connect
        </h5>
        <p className="text-base lg:text-lg">
          {" "}
          Connecting with M.A.P. Tech Pvt. Ltd. means partnering with a team that is passionate about technology and committed to your success. Let&apos;s transform your ideas into reality and navigate the digital landscape together. Reach out to us today and let&apos;s start a conversation about how we can help your business thrive.
        </p>
        <div className="socials flex flex-row gap-2 mt-5 px-5 py-2">
          <Link href="facebook.com">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="instagram.com">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="whatsapp.com">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className=" w-auto">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col text-white  mt-20 mb-10 px-10 py-2 " onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className=" block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className=" border border-[#124A99] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="maptech07@gmail.com"

              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" border border-[#124A99] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className=" border border-[#124A99] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="flex justify-center items-center">
            <button
  type="submit"
  className="group w-72 rounded-full border border-transparent px-5 py-4 bg-[#34C4EC] transition-colors duration-300 ease-in-out transform hover:bg-[#fff]  hover:scale-105"
>
  Send Message
</button>

</div>


          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
