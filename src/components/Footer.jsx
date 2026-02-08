
const Footer = () => {
   return (
      <>
         <div
            className="inset-x-0 bottom-0 w-full flex flex-col md:flex-row justify-evenly  items-center text-white text-xs md:text-xl"
            style={{
               height: "70px",
               backdropFilter: "blur(12px)",
               background: "rgba(36, 37, 46, 0.3)",
               zIndex: 10,
            }}
         >
            <p>
            Designed and Developed with ❤️ by @Kaushik Patil
            </p>
            <p>Copyright ©️ Kaushik 2026</p>
         </div>
      </>
   );
};

export default Footer;
