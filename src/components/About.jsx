import { AccordionItem } from "@radix-ui/react-accordion";
import Captions from "./Captions";
import CaptionSplit from "./CaptionSplit";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { stack } from "@/lib/misc";
import { motion } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";



const About = () => {

  return (
    <div
      data-index={1}
      className="page layout px-0 xl:py-12 min-h-screen flex-col overflow-x-hidden"
      id="about"
    >
      <div className="grid gap-12 xl:grid-cols-3 layout-padding items-start">
        {/* LEFT - ABOUT */}
        <div className="self-start max-w-xl">
          <CaptionSplit txt1="About" txt2={"Me"} className={"justify-start"} />
          <AboutAccordion />
        </div>

        {/* MIDDLE - EDUCATION */}
        <div className="self-start">
          <Captions txt="Education" />
          <Education />
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex items-center justify-start xl:justify-end h-full">
          <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
          <PixelatedCanvas
            src="/meri4.webp"
            loading="lazy"
            width={420}
            height={420}
            cellSize={3}
            dotScale={0.9}
            shape="circle"
            grayscale="true"
            dropoutStrength={0.4}
            
            interactive
            distortionStrength={3}
            distortionRadius={40}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="black"
            tintStrength={0.2}
            className="translate-y-[-20px] xl:translate-x-[50px] xl:translate-y-[-70px]"
          />
          </motion.div>
        </div>
      </div>
      <div className="relative fade-edges mt-auto -skew-4 border-t border-b py-8 px-4 border-muted overflow-auto flex gap-12 xl:gap-20 justify-start ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {stack.map((it) => (
              <CarouselItem
                key={it.title}
                className="flex gap-2 items-center justify-center basis-auto px-4 md:px-12"
              >
                <motion.img
                  className="h-10 md:h-14 xl:h-16 scale-[1.4]"
                  loading="lazy"
                  src={it.logo}
                  initial={{
                    opacity: 0,
                    translateX: -10,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      duration: 1,
                      delay: 1.3,
                    },
                  }}
                />
                <Captions txt={it.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

   <div className="backdrop-blur-2xl border-t border-b border-muted grid grid-cols-2 md:grid-cols-4 xl:gap-0 layout-padding skew-4">
  <Card>
    <Captions txt={"Java"} classname={"text-5xl md:text-6xl"} />
    <p>Core Language</p>
  </Card>

  <Card>
    <Captions txt={"Spring"} classname={"text-5xl md:text-6xl"} />
    <p>Backend Framework</p>
  </Card>

  <Card>
    <Captions txt={"React"} classname={"text-5xl md:text-6xl"} />
    <p>Frontend Library</p>
  </Card>

  <Card>
    <Captions txt={"MySQL"} classname={"text-5xl md:text-6xl"} />
    <p>Database</p>
  </Card>
</div>
    </div>
  );
};

export default About;

function AboutAccordion() {
  return (
    <div className="relative z-10 flex flex-col flex-1">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who I Am</AccordionTrigger>
          <AccordionContent>
            Hi, I&apos;m Kaif Khan, a Java Full Stack Developer who loves
            turning ideas into fast, reliable web applications. I&apos;m a
            fresher, but I don&apos;t just learn concepts; I build with them.
            What I lack in years, I make up for in curiosity, consistency and
            drive.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What I Build</AccordionTrigger>
          <AccordionContent>
            On the backend, I use Java, Spring Boot and Hibernate to create
            clean REST APIs, backed by MySQL for solid data design. On the
            frontend, I craft responsive, user-friendly interfaces with
            React.js, and I&apos;m taking my projects to the cloud with AWS.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How I Work</AccordionTrigger>
          <AccordionContent>
            I care about readable code, clear logic and getting the details
            right. I&apos;m ready to learn fast, take ownership and grow with a
            team that builds great products. Let&apos;s build something great
            together.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-fit rounded-xl bg-red-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-red-700 hover:scale-[1.03] shadow-lg shadow-red-500/20"
      >
        View Resume
      </a>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col flex-1">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>B.Tech, First Division</AccordionTrigger>
          <AccordionContent>
            Dr. Ram Manohar Lohia Avadh University, Ayodhya (2022 to 2026).
            Completed a four-year B.Tech program with First Division.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Java Full Stack, JSpiders</AccordionTrigger>
          <AccordionContent>
            Currently training at JSpiders, Bengaluru (karnataka)in Core Java, Spring
            Boot, Hibernate, MySQL and React.js, while building real-world
            projects.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Schooling, CBSE</AccordionTrigger>
          <AccordionContent>
            Class X and XII from CBSE, Ballia, Uttar Pradesh (india).
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Card({ children }) {
  return <div className="flex flex-col flex-1"> {children}</div>;
}
