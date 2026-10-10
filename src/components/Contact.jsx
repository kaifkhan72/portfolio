import { motion } from "framer-motion";
import CaptionSplit from "./CaptionSplit";
import { socials } from "@/lib/misc";

const Contact = () => {
  return (
    <div
      data-index={4}
      id="contact"
      className="page max-sm:pb-28 layout w-full min-h-screen items-center justify-center relative overflow-hidden border-2 border-b-0 border-violet rounded-tl-4xl rounded-tr-4xl z-10"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-100 rotate-12 scale-150"
          initial={{
            rotate: 180,
            opacity: 0,
          }}
          whileInView={{
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 3,
              ease: "easeInOut",
            },
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/60" />
      </div>

      {/* Content */}
     <div className="relative my-auto w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center p-4">
  
  <div className="space-y-8 flex flex-col items-center">
    <div>
      <CaptionSplit txt1={"Come, this is "} txt2={" Kaif' world"} />

      <motion.p
        className="mt-4 max-w-md text-muted-foreground"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
      >
              I want to be successful in this field, grow a lot in the software company, 
                  make profit for both myself and the company, but I am a fresher, just passed B.Tech,
                            but the day I get the opportunity,
                                        my journey will begin from that day.
      </motion.p>

      {/* Gmail */}
      <motion.a
        href="mailto:rajukaif72@gmail.com"
    className="block mt-5 text-lg md:text-xl font-medium text-red-400 hover:text-red-300 transition-all duration-300"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.35,
        }}
      >
        rajukaif72@gmail.com
      </motion.a>
    </div>

    {/* SAME OLD ICONS */}
    <motion.div
      className="flex gap-6"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
      }}
    >
      {socials.map((item) => (
        <a
  key={item.title}
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border border-muted rounded-xl hover:border-primary transition-all duration-300 bg-amber-100"
>
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            className="size-6"
          />
        </a>
      ))}
    </motion.div>
  </div>
</div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full border-t border-muted py-6 pb-4 px-8">
        <span>&copy; Kaif Khan 2026</span>
      </div>
    </div>
  );
};

export default Contact;7392066271