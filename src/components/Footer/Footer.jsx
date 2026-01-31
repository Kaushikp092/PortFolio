
const Footer = () => {
   return (
      <>
         <div
            className="fixed inset-x-0 bottom-0 w-full flex justify-center items-center text-white text-2xl"
            style={{
               height: "60px",
               backdropFilter: "blur(12px)",
               background: "rgba(36, 37, 46, 0.3)",
               zIndex: 10,
            }}
         >
            Designed and Developed with ❤️ by @Kaushik Patil
         </div>
      </>
   );
};

export default Footer;
