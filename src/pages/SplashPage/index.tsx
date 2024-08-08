import { Link } from "react-router-dom";
import { DASHBOARD, DASHBOARD_PROFILE } from "../../utils/routePaths";

const SplashPage = () => {
  return (
    <>
      <section className="flex flex-col">
        <Link to={"/popup"} className="text-blue-600 underline">
          Popup page
        </Link>
        <Link
          to={`${DASHBOARD}${DASHBOARD_PROFILE}`}
          className="text-blue-600 underline"
        >
          Dashboard Profile
        </Link>
      </section>
    </>
  );
};

export default SplashPage;
