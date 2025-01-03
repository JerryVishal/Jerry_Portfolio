"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 571 774 0022",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jjosepha@gmu.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "4303 Ramona Dr, Apt G, Fairfax, VA-22030",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-amber-600">Contact me</h3>
              
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="Firstname" placeholder="Firstname"/>
                <Input type="Lastname" placeholder="Lastname"/>
                <Input type="Email" placeholder="Email Address"/>
                <Input type="Phone" placeholder="Phone number"/>
              </div>

              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here"
              
              />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send message 
              </Button>             
    
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
             <ul className="flex flex-col gap-10"> 
              {info.map((item,index)=>{
                return<li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-amber-500 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
             </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;