import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Disclaimer from "./components/layout/Disclaimer";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Disclaimer/>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;