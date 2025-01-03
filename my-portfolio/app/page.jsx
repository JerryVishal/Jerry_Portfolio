import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-2xl font-extrabold uppercase text-amber-500 tracking-wider font-mono">Data Analyst</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-amber-600">Jerry Vishal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I excel at transforming data into actionable insights, 
            leveraging expertise in data visualization and programming to drive impactful decision-making.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-amber-700 rounded-full flex justify-center
                items-center text-amber-700 text-base hover:bg-amber-700 hover:text-primary hover:transition-all duration-500"/>


              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
