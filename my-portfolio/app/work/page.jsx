"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Data Viz",
    title: "Airbnb_Tableau_Dashboard",
    description:
      "This project involves creating an interactive Airbnb dashboard using Tableau, showcasing key metrics such as average price, property types, and reviews across major U.S. cities. It features various visualizations, including bar charts, pie charts, and heatmaps, providing insights into neighborhood trends, host responses, and historical data. The dashboard aims to help users quickly understand market dynamics and make informed decisions.",

    stack: [
      { name: "Tableau" },
      { name: "Calculated Fields" },
      { name: "Mapping" },
    ],
    image: "/assets/work/Dashboard 1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Data Viz",
    title: "Excel_Dashboard",
    description:
      "This Car Sales Dashboard for India 2021 provides an interactive analysis of vehicle sales data, featuring metrics such as transmission types, ownership percentages, and model counts. It includes dynamic visualizations, such as doughnut charts, bar graphs, and line charts, offering insights into trends across car models, years, and brands. Designed for intuitive navigation, the dashboard is optimized for decision-making and performance tracking.",

    stack: [
      { name: "MS Excel" },
      { name: "Pivot table" },
      { name: "Vlookup" },
    ],
    image: "/assets/work/Dashboard 2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "ETL Pipeline",
    title: "Real-Time E-commerce Fraud Detection Pipeline",
    description:
      " 🔹 Designed and deployed a modular ETL pipeline for an e-commerce platform using synthetic transaction data 🔹 Integrated real-time fraud detection via AWS Lambda using business logic thresholds🔹 Sent fraud alerts automatically via Amazon SNS (email notifications)🔹 Exported aggregated metrics to Amazon S3, and built analytics dashboards in Amazon Redshift & QuickSight",

    stack: [
      { name: " Synthetic Data Generation" },
      { name: "Docker - Postgres, Apache Airflow" },
      { name: "AWS - Lambda, SNS, Redshift, QuickSight" },
    ],
    image: "/assets/work/Dashboard 3.png",
    live: "",
    github: "",
  },
];

const work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl: gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none">
            <div>
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project cat */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-500 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project title */}
              <h1 className="text-[36px] font-bold leading-none text-white/20 hover:text-amber-500 transition-all duration-500 capitalize">
                {project.title}
              </h1>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-amber-500">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain" // Changed to 'object-contain'
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-amber-500 hover:bg-amber-400 text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;