import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function () {
  const transit = {
    duration: 1,
    type: "spring"
  };

  const transVariants = {
    init: { scale: 0.3, opacity: 1, x: -400, transition: transit },
    anim: { scale: 1, opacity: 1, x: 0, transition: transit },
    exit: { scale: 0.4, opacity: 0, x: 400, transition: transit }
  };
  return (
    <motion.div
      variants={transVariants}
      initial="init"
      animate="anim"
      exit="exit"
      className="container"
    >
      <div className="content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a79XgKvvi2VyAu54LI21MbKrfSlZTL9iPA&usqp=CAU" />
      </div>
      <div className="oth"></div>
      <Link to="/sec">Second</Link>
    </motion.div>
  );
}
