import {
  DASHBOARD,
  DASHBOARD_SETTINGS,
  DASHBOARD_PROFILE,
} from "../utils/routePaths";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    linkName: "Profile",
    route: `${DASHBOARD}${DASHBOARD_PROFILE}`,
  },
  {
    linkName: "Settings",
    route: `${DASHBOARD}${DASHBOARD_SETTINGS}`,
  },
];

const LinkItem = ({
  linkName,
  route,
  active,
}: {
  linkName: string;
  route: string;
  active: boolean;
}) => {
  console.log(active);

  return (
    <>
      <div className={`relative h-[80px] ${active ? `` : ``}`}>
        <div
          className={`w-full h-full rounded-bl-[40px] ml-[20px] flex items-center justify-center ${
            active ? `rounded-tl-[40px] bg-blue-700` : ``
          }`}
        >
          <Link
            to={route}
            className={`${active ? `text-white` : `text-blue-700`}`}
          >
            {linkName}
          </Link>
        </div>

        {active && (
          <>
            <div className="absolute h-[40px] w-[40px] right-0 top-[-40px] bg-blue-700">
              <div className="w-full h-full bg-white rounded-br-[40px]"></div>
            </div>
            <div className="absolute h-[40px] w-[40px] right-0 bottom-[-40px] bg-blue-700">
              <div className="w-full h-full bg-white rounded-tr-[40px]"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex flex-col w-full h-screen bg-blue-700">
        <div className="bg-blue-700 h-[10vh]">Blue banner on top</div>

        <div className="bg-white h-[90vh] rounded-tl-[40px] py-[80px] flex flex-col gap-[40px]">
          {links.map((link, index) => {
            return (
              <LinkItem
                linkName={link.linkName}
                route={link.route}
                active={pathname === link.route}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
