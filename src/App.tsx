import { Route, Routes } from "react-router-dom";
import { SplashPage, PopupPage, OverlapPage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashPage />} />
        <Route path="/popup" element={<PopupPage />} />
        <Route path="/overlap" element={<OverlapPage />} />
      </Routes>
    </>
  );
};

export default App;
