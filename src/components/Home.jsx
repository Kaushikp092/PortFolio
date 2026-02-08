import { TypingAnimation } from "@/components/ui/typing-animation";
// import man from "@/assets/man.png";
import personal from "@/assets/personal.jpeg";
const Home = () => {
   return (
      <>
         <div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
               maxWidth: "1100px",
               padding: "2rem 3rem 3rem",
               margin: "6rem auto",
            }}
         >
            <div className="flex-1">
               <div
                  className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.02em] text-white/75"
                  style={{
                     marginBottom: "2rem",
                  }}
               >
                  <span>Hey There! 👋</span> <br />
                  <span>I'm Kaushik Patil</span>
               </div>
               <TypingAnimation
                  className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.02em] text-blue-400"
                  style={{
                     marginBottom: "2rem",
                  }}
                  words={["learning", "web", "MERN"]}
               />
            </div>
            <div className="flex justify-center items-center">
               <img
                  src={personal}
                  alt="Kaushik Patil"
                  className="w-[300px] h-[300px] rounded-full object-cover "
               />
            </div>
         </div>
      </>
   );
};

export default Home;
