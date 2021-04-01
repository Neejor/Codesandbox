import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route
} from "react-router-dom";
import First from "./first";
import Second from "./second";
import { AnimatePresence } from "framer-motion";

// export default function (props) {
//   return (
//     <AnimatePresence exitBeforeEnter>
//       <Switch location={props.loc} key={props.loc.key}>
//         <Route exact path="/">
//           <First />
//         </Route>
//         <Route exact path="/sec">
//           <Second />
//         </Route>
//       </Switch>
//     </AnimatePresence>
//   );
// }

export default function () {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <First />
              </Route>
              <Route exact path="/sec">
                <Second />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
