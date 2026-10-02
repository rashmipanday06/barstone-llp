import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Practices from "../pages/Practices/Practices";
import PracticeDetails from "../pages/Practices/PracticeDetails";
import People from "../pages/People/People";
import Insights from "../pages/Insights/Insights";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/practices" element={<Practices />} />

      <Route
        path="/practices/:slug"
        element={<PracticeDetails />}
      />

      <Route path="/people" element={<People />} />

      <Route path="/insights" element={<Insights />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;