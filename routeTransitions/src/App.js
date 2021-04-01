import "./styles.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimateTrans from "./AnimateTrans";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimateTrans loc={location} />
    </div>
  );
}

export default App;
