import Profile from "./Profile.jsx";
import List from "./list";
import { useSelector } from "react-redux";

export default function () {
  return (
    <section className="matchSection">
      <div>
        <Profile name="bob" id={0} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <List />
      </div>
    </section>
  );
}
