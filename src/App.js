import Header from "./components/Header";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" h-full w-screen bg-[#ffffff]">
      <Navbar />
      <Header />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
