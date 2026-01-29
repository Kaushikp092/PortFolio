// import { useState } from "react";
import Pattern from "./components/Pattern";
import Navbar from "./components/Navbar";
import { TypingAnimation } from "@/components/ui/typing-animation";
function App() {
   return (
      <>
         <Pattern
            style={{
               position: "fixed",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               zIndex: -1,
            }}
         />
         <Navbar logo="KP" style={{ position: "relative" }} />
         <TypingAnimation words={["Junior Web Developer", "Learning Web development", "Final"]}>hello</TypingAnimation>
      </>
   );
}

export default App;
