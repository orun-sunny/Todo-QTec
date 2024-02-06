import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./Task/TaskBoard";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <HeroSection />

        <TaskBoard />
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
}
