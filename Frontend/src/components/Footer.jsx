import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div
        className="inset-x-0 bottom-0 w-full flex flex-col md:flex-row justify-around  items-center text-white text-xs md:text-xl"
        style={{
          height: "70px",
          backdropFilter: "blur(12px)",
          background: "rgba(36, 37, 46, 0.3)",
          zIndex: 10,
        }}
      >
        <p>Designed and Developed with ❤️ by @Kaushik Patil</p>
        <p>Copyright ©️ Kaushik 2026</p>
        <div>
          <a
            href="https://www.linkedin.com/in/kaushik-patil-644553343"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Kaushikp092"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
