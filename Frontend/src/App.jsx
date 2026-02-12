import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects/Project";
import Form from "./components/Contact/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
   return (
      <>
      
      <SpeedInsights />
         <Background
            style={{
               position: "fixed",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               zIndex: -2,
            }}
         />
         <Navbar logo="KP" />
         <main className="page-content">

         <section id="home">
            <Home />
         </section>
         <section id="about">
            <About />
         </section>

         <section id="project">
            <Project />
         </section>

         <section id="contact">
            <Form />
         </section>

         <Footer />
         </main>
      </>
   );
}

export default App;
