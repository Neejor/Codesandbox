import "./styles.css";
import MatchSec from "./matchSection";
import Navbar from "./navbar";
import ProfileModal from "./profileModal";

export default function App() {
  return (
    <div className="App">
      <ProfileModal />
      <Navbar />
      <h3 className="matchHeading">Mark your preferences!</h3>
      <MatchSec />
    </div>
  );
}
