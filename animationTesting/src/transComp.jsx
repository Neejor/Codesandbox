import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function () {
  const layerVar = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { duration: 1, type: "tween" } }
  };
  const textVar = {
    initial: {
      opacity: 0,

      y: "10px",
      rotate: "-90deg"
    },
    animate: (i) => ({
      opacity: 1,

      y: "0px",
      rotate: "0deg",
      transition: {
        delay: 1 + i * 0.13,
        type: "tween"
      }
    })
  };

  const firstAnim = useAnimation();
  const secondAnim = useAnimation();
  const textAnim = useAnimation();

  async function firstSeq() {
    await firstAnim.start({ x: 0, transition: { duration: 1, type: "tween" } });
    await firstAnim.start({
      x: "-100vw",
      transition: { duration: 1, type: "tween", delay: 2.5 }
    });
  }

  async function secondSeq() {
    await secondAnim.start({
      x: 0,
      transition: { duration: 1, type: "tween" }
    });
    await secondAnim.start({
      x: "100vw",
      transition: { duration: 1, type: "tween", delay: 2.5 }
    });
  }

  async function textSeq() {
    await textAnim.start({
      scale: 3,
      transition: {
        delay: 1.5 + 11 * 0.13,
        duration: 0.5,
        type: "tween"
      }
    });
    await textAnim.start({
      opacity: 0
    });
  }

  let text = "FAR ROCKAWAY";
  text = text.split("");
  console.log(text);

  function retText(item, i) {
    return (
      <motion.span
        variants={textVar}
        initial="initial"
        animate="animate"
        custom={i}
      >
        {item}
      </motion.span>
    );
  }
  useEffect(() => {
    firstSeq();
    secondSeq();
    textSeq();
  }, []);
  return (
    <div className="transCompContainer">
      <motion.div
        variants={layerVar}
        initial="initial"
        animate={firstAnim}
        className="firstLayer"
      >
        <motion.p animate={textAnim}>{text.map(retText)}</motion.p>
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={secondAnim}
        className="secondLayer"
      />
      <div className="thirdLayer"></div>
    </div>
  );
}
