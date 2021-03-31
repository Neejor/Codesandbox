import TransComp from "./transComp";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function () {
  const upLine = useAnimation();
  const downLine = useAnimation();

  async function upSeq() {
    await upLine.start({
      height: "27vh",
      transition: { duration: 1, type: "tween" }
    });
    await upLine.start({
      height: "0",
      transition: { delay: 2.5, duration: 1, type: "tween" }
    });
  }

  async function downSeq() {
    await downLine.start({
      height: "25vh",
      transition: { duration: 1, type: "tween" }
    });
    await downLine.start({
      height: "0",
      transition: { delay: 2.5, duration: 1, type: "tween" }
    });
  }

  useEffect(() => {
    upSeq();
    downSeq();
  }, []);

  return (
    <div className="home">
      <motion.div
        initial={{ height: 0 }}
        animate={upLine}
        className="transLine transLineUp"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={downLine}
        className="transLine transLineDown"
      />
      <TransComp />
    </div>
  );
}
