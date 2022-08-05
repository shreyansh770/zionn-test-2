import SidebarP from "./Components/SidebarP";
import Signup from "./Components/Signup";
import Signin  from "./Components/Signin";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Onboardingflow from "./Components/Onboardingflow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<SidebarP />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/onboarding" element={<Onboardingflow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
