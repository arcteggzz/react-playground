import { Route, Routes } from "react-router-dom";
import { SplashPage, PopupPage, OverlapPage } from "./pages";
import { AuthWrapper, DashboardWrapper } from "./layout";
import { Login, Signup } from "./pages/AuthPages";
import { ProfilePage, SettingsPage } from "./pages/DashboardPages";
import { DASHBOARD } from "./utils/routePaths";

export const App = () => {
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashPage />} />
        <Route path="/popup" element={<PopupPage />} />
        <Route path="/overlap" element={<OverlapPage />} />

        <Route path={DASHBOARD} element={<DashboardWrapper />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="/auth/" element={<AuthWrapper />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
