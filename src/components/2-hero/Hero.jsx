import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // @ts-ignore
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.6)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/MyPic1.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>  

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software designer, And Front-End Developer 

        </motion.h1>

        <p className="sub-title">
        I’m Hamza Ramadan Software Developer And Front-End Developer building responsive and scalable web applications. Specialized in
        React.js, Next.js, and modern UI frameworks like Tailwind CSS. Passionate about delivering Developer to contribute technical expertise and creative solutions. 
        </p>
        <p className="sub-title">
        I&lsquo;m a Front-End Developer with knowledge in designing, developing, and deploying web applications using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS and Next JS
        </p>

        <div className="all-icons flex">
          <a href="https://www.instagram.com/hamza.ramadan.1650/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/HamzaRamadan" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href="http://www.linkedin.com/in/hamza-ramadan-85320a240" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
