"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Data Analysis and Reporting",
    description:
      "Transformed raw datasets into actionable insights by performing advanced statistical analyses, data cleaning, and creating detailed reports. Designed and delivered interactive dashboards in Tableau, Power BI, and Excel, enabling data-driven decision-making for stakeholders.",
    href: "",
  },
  {
    num: "02",
    title: "Machine Learning and AI",
    description:
      "Built predictive models using techniques like Random Forest and K-Means Clustering to forecast trends and optimize processes. Performed sentiment analysis and text mining using Python and PySpark, extracting valuable insights from unstructured data.",
    href: "",
  },
  {
    num: "03",
    title: "ETL and Data Engineering",
    description:
      "Developed and automated ETL pipelines using Python and SQL, improving data processing efficiency by up to 25%. Designed and maintained scalable databases and data warehouses, reducing processing times and optimizing workflows.",
    href: "",
  },
  {
    num: "04",
    title: "Data Visualization and Storytelling",
    description:
      "Created visually compelling dashboards and reports to communicate insights effectively to diverse audiences. Presented data trends and actionable recommendations through storytelling, aligning with business goals.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-16 xl:py-0 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center gap-8 p-6  bg-[#232329]rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover: bg-[#232329]"
            >
              <div className="w-full flex justify-between items-center mb-4">
                <div className="text-4xl font-extrabold text-white transition-all duration-300 hover:text-amber-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-gray-200 group-hover:bg-slate-950 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-amber-500 text-2xl transition-transform hover:scale-110" />
                </Link>
              </div>
              <h2 className="text-2xl font-semibold text-white text-center transition duration-300 ease-in-out transform hover:text-amber-400">
                {service.title}
              </h2>
              <p className="text-center text-lg text-white/60">
                {service.description}
              </p>
              <div className="border-b border-gray-200 w-full mt-4"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
