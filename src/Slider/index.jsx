import Image from "next/image";
import React from "react";
import Slide from "./js/slide";

if (typeof window !== "undefined") {
  console.log("You are on the browser");
  const slide = new Slide(".slide", ".slide-wrapper");
  slide.init();
} else {
  console.log("You are on the server");
}

const Slider = () => {
  const slide = React.useRef(null);
  const slidWrapper = React.useRef(null);
  const [dist, setDist] = React.useState({ finalPosition: 0, startX: 0, movement: 0 })
  
  return (
    <>
      <ul className="custom-controls">
        <li>
          <Image src="/foto1-thumb.jpg" alt="" width={100} height={100} />
        </li>
        <li>
          <Image src="/foto2-thumb.jpg" alt="" width={100} height={100} />
        </li>
        <li>
          <Image src="/foto3-thumb.jpg" alt="" width={100} height={100} />
        </li>
        <li>
          <Image src="/foto4-thumb.jpg" alt="" width={100} height={100} />
        </li>
        <li>
          <Image src="/foto5-thumb.jpg" alt="" width={100} height={100} />
        </li>
        <li>
          <Image src="/foto6-thumb.jpg" alt="" width={100} height={100} />
        </li>
      </ul>
      <div className="slide-wrapper" ref={slidWrapper}>
        <ul className="slide" ref={slide}>
          <li>
            <Image src="/foto1.jpg" alt="" width={1000} height={600} />
          </li>
          <li>
            <Image src="/foto2.jpg" alt="" width={1000} height={600} />
          </li>
          <li>
            <Image src="/foto3.jpg" alt="" width={1000} height={600} />
          </li>
          <li>
            <Image src="/foto4.jpg" alt="" width={1000} height={600} />
          </li>
          <li>
            <Image src="/foto5.jpg" alt="" width={1000} height={600} />
          </li>
          <li>
            <Image src="/foto6.jpg" alt="" width={1000} height={600} />
          </li>
        </ul>
      </div>
      <div className="arrow-nav">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
    </>
  );
};

export default Slider;
