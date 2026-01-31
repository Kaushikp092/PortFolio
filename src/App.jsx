import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";

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
               zIndex: -1,
            }}
         />
         <Navbar logo="KP" />
         <Home />
         
         {/* Footer */}
         <Footer />
      </>
   );
}

export default App;
