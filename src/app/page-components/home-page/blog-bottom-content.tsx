"use client";

import { useInView, motion } from "motion/react";
import { useRef } from "react";

export function WhyBlog() {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        transform: IsInView ? "none" : "translateY(-200px)",
        opacity: IsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="mx-[5vw] md:mx-0"
    >
      <h1 className="mt-[10vh] md:text-4xl text-2xl font-bold tracking-wide">
        Why this blog?{" "}
      </h1>
      <p className="md:text-2xl text-justify text-sm mt-4 mb-[20vh]">
        I started this blog to connect, learn, and grow with a community of
        curious minds. Whether you re here for a quick read or to dive deep into
        a topic, I hope you find something that resonates with you. So grab a
        cup of coffee, settle in, and enjoy the journey. Lets create something
        amazing together!
      </p>
    </motion.div>
  );
}
