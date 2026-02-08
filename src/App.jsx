import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects/Project";
import Form from "./components/Contact";
Form

function App() {
   return (
      <>
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
         <div id="home">
            <Home />
         </div>
         <div id="about">
            <About />
         </div>

         <div id="project">
            <Project />
         </div>

         <div id="contact">
            <Form />
         </div>

         <Footer />
      </>
   );
}

export default App;
