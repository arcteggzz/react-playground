import { Link, Outlet } from "react-router-dom";

const AuthWrapper = () => {
  return (
    <>
      <div className="w-screen flex flex-col">
        <div className="w-[50%]">
          <Link to={"/auth/signup"}>Signup</Link>
          <Link to={"/auth/login"}>Login</Link>
        </div>
      </div>

      <div className="w-[50%]">
        <Outlet />
      </div>
    </>
  );
};

export default AuthWrapper;
