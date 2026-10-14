import React from "react";
import Captions from "./Captions";
import CaptionSplit from "./CaptionSplit";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { projects } from "@/lib/misc";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div
      data-index={3}
      id="projects"
      className="page relative z-10 flex min-h-screen flex-col py-12 pb-4"
    >
      {/* Heading */}
      <div className="layout-x-padding border-b border-muted pb-3">
        <Captions txt={"collection of "} classname={"lg:text-6xl"} />
        <CaptionSplit txt1={"recent"} txt2={"Project"} />
      </div>

      {/* Carousel */}
      <Carousel
        className="flex flex-1"
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="mx-2 flex h-full gap-5 p-2 py-4 xl:gap-10 2xl:px-24">
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className={`relative flex flex-col overflow-hidden rounded-2xl border border-muted-foreground/20 bg-neutral-950/90 p-3 transition-transform hover:scale-[1.005] md:p-6 lg:rounded-3xl ${
                projects.length === 1
                  ? "basis-full max-w-5xl mx-auto"
                  : "basis-[92%] md:basis-[95%] lg:basis-[60%]"
              }`}
            >
              {/* Project Image / Theme Preview (Clean & Fully Visible) */}
              <div className="relative w-full overflow-hidden rounded-xl border border-muted-foreground/20 bg-black shadow-xl aspect-[16/9] md:aspect-[16/8] max-h-[460px]">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.01]"
                />
              </div>

              {/* Content Details (Below Image - Zero Overlapping) */}
              <div className="flex flex-col gap-3 pt-4 md:pt-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl lg:text-3xl">
                    {project.title}
                  </h3>

                  {/* Live Link Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-1.5 text-xs font-medium text-red-400 backdrop-blur-md transition hover:bg-red-500/20 hover:scale-105 md:text-sm"
                  >
                    <SquareArrowOutUpRight className="size-4 md:size-4.5" />
                    <span>Live Link</span>
                  </a>
                </div>

                <p className="text-xs text-gray-300 md:text-sm leading-relaxed max-w-4xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-1">
                    Tech Stack:
                  </span>
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 rounded-md border border-muted-foreground/30 bg-white/5 px-2.5 py-1 text-xs backdrop-blur-2xl md:px-3 md:py-1.5 md:text-sm"
                    >
                      <img
                        src={tech.img}
                        alt={tech.title}
                        className="size-4 rounded-full object-contain md:size-5"
                      />
                      <span>{tech.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom Stats */}
      <div className="layout-x-padding flex justify-around gap-3 border-muted px-2 pt-4 md:justify-end md:gap-16">
        <div className="flex flex-col items-center">
          <Captions txt={"3+"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            Projects
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Captions txt={"REST"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            API Development
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Captions txt={"MySQL"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            Database Design
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;