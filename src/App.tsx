import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Disclaimer from "./components/layout/Disclaimer";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Disclaimer/>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;