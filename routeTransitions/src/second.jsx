import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function () {
  const transition = {
    duration: 1,
    type: "spring"
  };

  const transVariants = {
    initial: { scale: 0.3, opacity: 1, x: -400, transition: { transition } },
    animate: { scale: 1, opacity: 1, x: 0, transition: { transition } },
    exit1: { scale: 0.4, opacity: 0, x: 400, transition: { transition } }
  };
  return (
    <motion.div
      variants={transVariants}
      initial="initial"
      animate="animate"
      exit="exit1"
      className="container"
    >
      <div className="content">
        <img src="https://fashioneditorials.com/wp-content/uploads/2017/10/i-D-Japan-Chanel-Haute-Couture-With-Nana-Komatsu-Angelo-Pennetta-1.jpg" />
      </div>
      <div className="oth"></div>
      <Link to="/">First</Link>
    </motion.div>
  );
}
