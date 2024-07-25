"use client";
import React, { useState, useRef } from "react";
import ServiceCard from "./ServiceCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description: "Crafting responsive and engaging websites tailored to your business needs.",
    image: "/images/services/5467393_1687.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "System/Software Development",
    description: "Developing robust and scalable software solutions to streamline your operations.",
    image: "/images/services/saas-concept-collag.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "App Development",
    description: "Creating user-friendly mobile apps to enhance your customer engagement.",
    image: "/images/services/1720.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ChatBot",
    description: "Implementing intelligent chatbots to improve customer interaction and support.",
    image: "/images/services/chat_bot.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces for an enhanced user experience.",
    image: "/images/services/2150104517.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Graphics Design",
    description: "Delivering creative graphic design solutions to effectively communicate your brand identity.",
    image: "/images/services/634848.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ServicesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredServices = servicesData.filter((service) =>
    service.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className=" sm:py-28">
  <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 ">
  Our Services
  </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredServices.map((service, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imgUrl={service.image}
              gitUrl={service.gitUrl}
              previewUrl={service.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
