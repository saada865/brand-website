import Page1 from "./components/Main-Page/Page1";
import Images from "./components/Main-Page/Images";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page2 from "./components/Contact-Page/Page2";
import Page3 from "./components/Profile-Page/Page3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className=" h-full w-screen bg-[#ffffff]">

    // </div>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page3 />} />
        <Route path="/contact" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Navbar />
      <Header />
      <Images />
      <Footer /> */
}
