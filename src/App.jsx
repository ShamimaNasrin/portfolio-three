import { Toaster } from "react-hot-toast";
import MainPage from "./pages/mainPage/MainPage";
import ScrollToTop from "./components/buttons/ScrollToTop";

function App() {
  return (
    <>
      <MainPage />
      <p className="text-blue-500">shamima nasrin</p>
      <Toaster />
      <ScrollToTop />
    </>
  );
}

export default App;
