"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import { FiDownload, FiGithub, FiLinkedin, FiMonitor } from "react-icons/fi";
import Resume from "./resume/page"; // Ensure this path is correct
import Expertise from "./services/page";
import Work from "./work/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl font-extrabold uppercase text-amber-500 tracking-wider font-mono">
              Data Analyst
            </span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-amber-600">Jerry Vishal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at transforming data into actionable insights, leveraging expertise in data visualization and programming to drive impactful decision-making.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => window.location.href = '/JerryVishal-2025-Resume.pdf'}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <div className="flex gap-6">
                  <a
                    href="https://github.com/JerryVishal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-amber-700 rounded-full flex justify-center items-center text-amber-700 text-base hover:bg-amber-700 hover:text-primary hover:transition-all duration-500"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jerryvishal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-amber-700 rounded-full flex justify-center items-center text-amber-700 text-base hover:bg-amber-700 hover:text-primary hover:transition-all duration-500"
                  >
                    <FiLinkedin className="text-lg" />
                  </a>
                  <a
                    href="https://public.tableau.com/app/profile/jerry6897/vizzes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-amber-700 rounded-full flex justify-center items-center text-amber-700 text-base hover:bg-amber-700 hover:text-primary hover:transition-all duration-500"
                  >
                    <FiMonitor className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default Home;