"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaChartBar,
  FaDatabase,
  FaTools,
  FaWordpress,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiDjango,
  SiR,
  SiSqlite,
  SiGooglecloud,
  SiMicrosoftazure,
  SiTableau,
  SiPowerbi,
  SiQlik,
  SiVisualstudiocode,
  SiPycharm,
  SiEclipseide,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiDatabricks,
  SiSap,
} from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Data Analyst with proven experience at Amazon improving operational efficiency (15%) and data management (20%). Skilled in designing metrics, automating reporting processes, and building KPIs using SQL, Python, and Tableau. Adept at analyzing large datasets, delivering actionable insights, and communicating complex analysis to stakeholders.",
  info: [
    { fieldName: "Name", fieldValue: "Jerry Vishal Joseph Arockiasamy" },
    { fieldName: "Phone", fieldValue: "(+1) 571-774-0022" },
    { fieldName: "Email", fieldValue: "jjosepha@gmu.edu" },
    { fieldName: "Languages", fieldValue: "English, Tamil" },
  ],
};

const experience = {
  title: "My Experience",
  description: `Proven expertise in data analytics, ETL automation, and dashboard development with a track record of improving operational efficiency by up to 40%. Successfully designed interactive dashboards, streamlined workflows, and created data models using SQL, Python, Tableau, and Power BI. Adept at data cleaning, transformation, and delivering actionable insights to stakeholders through data storytelling and advanced analytics.`,
  items: [
    { company: "Amazon", Position: "Transaction Risk Analyst", Duration: "2021-2022" },
    {
      company: "Mentored Minds",
      Position: "Data Analyst intern",
      Duration: "Spring 2023",
    },
    {
      company: "Tata Group",
      Position: "Data Visualization Specialist intern",
      Duration: "Fall 2022",
    }
    
  ],
};

const education = {
  title: "My Education",
  description:
    "Specializing in Data Analytics Engineering, focusing on advanced data modeling, statistical analysis, and visualization techniques. Proficient in leveraging tools like Python, SQL, and Tableau to derive actionable insights, with a strong academic foundation reflected in a 3.82 GPA.",
  items: [
    {
      institution: "George Mason University",
      degree: "Data Analytics Engineering",
      duration: "2023-present",
    },
    {
      institution: "Anna University",
      degree: "Electronics and communication Engineering",
      duration: "2017-2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in Python, R, SQL, and C, with expertise in frameworks like React and Django. Skilled in data visualization using Tableau, Power BI, and SAS, alongside advanced data management tools like Microsoft SQL Server, Oracle, and MongoDB. Experienced in predictive modeling, statistical analysis, and dashboard development, with a strong focus on financial data analysis, regulatory compliance, and data lifecycle management.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaDatabase />, name: "Database" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiC />, name: "C" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiR />, name: "R" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaBitbucket />, name: "Bitbucket" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "Google Cloud Platform" },
    { icon: <SiDatabricks />, name: "Databricks" },
    { icon: <FaChartBar />, name: "Tableau" },
    { icon: <SiQlik />, name: "QlikView" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <SiSap />, name: "SAP Data Cloud" },
    { icon: <SiTableau />, name: "Tableau" },
  ],
};

import React, { useState } from "react";
// your other imports

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience"); // Default active tab

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          value={activeTab} // Dynamically control the active tab
          onValueChange={setActiveTab} // Update state on tab change
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-500">
                            {item.Duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[6px] rounded-full bg-amber-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-500">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[6px] rounded-full bg-amber-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[40px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-amber-500 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
              <TabsContent></TabsContent>
            </TabsContent>

            {/* about tab */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"> 
                  {about.info.map((item,index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4" >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );

                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
