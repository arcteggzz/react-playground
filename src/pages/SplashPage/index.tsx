import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <>
      <section className="">
        <Link to={"/popup"} className="text-blue-600 underline">
          Popup page
        </Link>
      </section>
    </>
  );
};

export default SplashPage;
