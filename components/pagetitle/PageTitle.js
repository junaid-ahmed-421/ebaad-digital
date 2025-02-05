import React, { useState } from "react";
// import AppDevelopmentImg from "/public/images/services/5-1.png";
import AppDevelopmentImg from "/public/images/services/uii-uxx.webp";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import { Fade, Bounce, Slide } from "react-awesome-reveal";

const PageTitle = ({ title, bgImage, img }) => {
  // const [hovered, setHovered] = useState(false);
  return (
    <section
      className="page_banner_section text-center"
      style={{ backgroundImage: `url(${bgImage})`, height: "500px" }}
    >
      {/* <section className="page_banner_section text-center" style={{ backgroundImage: `url(${AppDevelopmentImg.src})`, height: '500px' }}> */}
      {/* <div className="container">
                <div className="heading_focus_text text-white">
                    {props.pageTop}
                    <span className="badge bg-secondary">{props.pagesub}</span>
                </div>
                <h1 className="page_title mb-0 text-white">{props.pageTitle}</h1>
            </div> */}
      {/* <div className="container d-flex justify-content-end">
        <Image src={img} alt="" width={352} height={352}/>
      </div> */}
      <div className="container d-flex justify-content-end">
        <Zoom>
          <div
            // style={{
            //   transform: hovered ? "scale(1.1) rotateY(10deg)" : "scale(1)",
            //   transition: "transform 0.3s ease-in-out",
            // }}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
          >
            {/* <Fade> */}
            <Image src={img} alt="" width={352} height={352} />
            {/* </Fade> */}
            {/* <Image src={img} alt="" width={352} height={352} /> */}
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default PageTitle;
