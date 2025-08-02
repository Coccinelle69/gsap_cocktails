import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    // <div className="flex-center h-[100dvh] ">
    //   <h1 className="text-3xl text-indigo-300">Hello GSAP</h1>
    // </div>
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
    </main>
  );
};

export default App;
