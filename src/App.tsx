import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Disclaimer from "./components/layout/Disclaimer";

function App() {
  return (
    <BrowserRouter>
    <Disclaimer/>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;