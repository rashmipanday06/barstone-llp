import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PracticeDetails from "../pages/Practices/PracticeDetails";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />} />

      {/* Homepage sections */}
      <Route path="/about" element={<Home />} />
      <Route path="/practices" element={<Home />} />
      <Route path="/people" element={<Home />} />
      <Route path="/insights" element={<Home />} />
      <Route path="/careers" element={<Home />} />
      <Route path="/contact" element={<Home />} />

      {/* Individual practice */}
      <Route
        path="/practices/:slug"
        element={<PracticeDetails />}
      />

    </Routes>
  );
};

export default AppRoutes;