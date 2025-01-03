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

const projects=[
  {
    num:'01',
    category: '',
    title:'',
    description:''
  },
]


const work = () => {
  return <div>Work page</div>;
};

export default work;
