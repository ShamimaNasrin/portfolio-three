import { Toaster } from "react-hot-toast";
import MainPage from "./pages/mainPage/MainPage";
import ScrollToTop from "./components/buttons/ScrollToTop";

function App() {
  return (
    <>
      <MainPage />
      <Toaster />
      <ScrollToTop />
    </>
  );
}

export default App;
