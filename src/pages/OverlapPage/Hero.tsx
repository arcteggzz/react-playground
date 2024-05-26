import "./OverlapPage.css";
import sneaker from "./pngtree-sports-shoes-shoe-style-png-image_7078509.png";
import sneaker2 from "./shoespng.parspng.com-12.png";
import { useState } from "react";

const Hero = () => {
  const centered = `w-full h-screen flex items-center justify-center`;
  const absoluteTop = `w-screen h-screen absolute left-0 top-0`;

  const sneakers = [sneaker, sneaker2];

  const [currentSneaker, setcurrentSneaker] = useState(0);

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center relative">
        <div className={`${centered} ${absoluteTop}`}>
          <h1 className="font-extrabold text-[240px] tracking-wider text-[red]">
            KELVIN
          </h1>
        </div>

        <div className={`${centered} ${absoluteTop}`}>
          <img
            src={sneakers[currentSneaker]}
            alt=""
            className="w-[25vw] h-auto"
          />
        </div>

        <div className={`${centered} ${absoluteTop}`}>
          <h1 className="stroke-font">KELVIN</h1>
        </div>

        <div className={`${centered} ${absoluteTop}`}>
          <div
            className={
              "w-full h-screen flex items-start justify-center space-x-10"
            }
          >
            <button onClick={() => setcurrentSneaker(currentSneaker - 1)}>
              Previous
            </button>
            <button onClick={() => setcurrentSneaker(currentSneaker + 1)}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
