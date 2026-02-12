import { useEffect, useRef, useState } from "react";
import resume from "/KaushikPatilCV.pdf";
const About = () => {
   const unique = {
      color: "rgb(14, 157, 205)",
      fontStyle: "italic",
   };

   const spacing = {
      marginBottom: "20px",
   };

   const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef(null);

   useEffect(() => {
      const node = sectionRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.disconnect();
               }
            });
         },
         {
            threshold: 0.75,
         }
      );

      observer.observe(node);

      return () => {
         observer.disconnect();
      };
   }, []);

   return (
      <div
         ref={sectionRef}
         className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
         }`}
      >
         {/* About me Header */}
         <span
            className="flex justify-center text-2xl md:text-4xl lg:text-5xl font-semibold  text-white/75"
            style={{
               marginTop: "5rem",
               marginBottom: "2rem",
            }}
         >
            About me
         </span>

         {/* paragraph */}
         <div
            className="md:text-2xl lg:text-xl font-semibold leading-tight tracking-[-0.02em] text-white/75 max-w-10/12"
            style={{
               margin: "2rem",
            }}
         >
            <p style={spacing}>
               I’m a passionate entry-level web developer with a strong
               foundation in{" "}
               <span style={unique}>HTML, CSS </span> and <span style={unique}>JavaScript.</span>
            </p>
            <p style={spacing}>
               Currently focused on building modern, responsive user interfaces
               using <span style={unique}>React.js </span> and <span style={unique}> Tailwind CSS.</span>
            </p>
            <p style={spacing}>
               I enjoy turning ideas into clean, functional designs with
               attention to detail and usability.
            </p>
            <p style={spacing}>
               I’m simultaneously learning backend technologies like
               <span style={unique}> Node.js </span> and
               <span style={unique}> MongoDB </span> to grow as a full-stack
               developer.
            </p>
            <p style={spacing}>
               A quick learner, problem solver, and team player who’s eager to
               grow in a professional environment.
            </p>

            {/* Adding CV here */}
            <div
               className="flex justify-center md:justify-start"
               style={{
                  marginTop: "20px",
               }}
            >
               <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500/90 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                  style={{ padding: "15px" }}
               >
                  View Resume
               </a>
            </div>
         </div>
      </div>
   );
};

export default About;
