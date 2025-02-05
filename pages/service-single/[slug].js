import React, { Fragment, useState, useEffect } from "react";
import Services from "../../api/service";
import ServicesContent from "../../api/servicesContent";
import ServicesOfferContent from "../../api/servicesOfferContent";
import ServicesWhyUsContent from "../../api/servicesWhyUsContent";
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";
import Header from "../../components/header/Header";
import Header2 from "../../components/Header2/Header2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/software-company-components/Footer/Footer";
//import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProcessTechnology from "../../components/software-company-components/ProcessTechnology/ProcessTechnology";
import srImg from "/public/images/services/service_details_image_1.webp";
import srImg2 from "/public/images/services/service_details_image_2.webp";
import srImg3 from "/public/images/services/service_details_image_3.webp";
import srImg4 from "/public/images/services/service_details_image_4.webp";
import icon from "/public/images/icons/icon_check_3.svg";
import Image from "next/image";

const ServiceSinglePage = (props) => {
  const router = useRouter();

  const ServiceDetails = Services.find(
    (item) => item.slug === router.query.slug
  );

  const content = ServicesContent.find(
    (item) => item.slug === router.query.slug
  );

  const servicesOfferContent = ServicesOfferContent.find(
    (item) => item.slug === router.query.slug
  );

  const servicesWhyUsContent = ServicesWhyUsContent.find(
    (item) => item.slug === router.query.slug
  );
  
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <Header2 />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle={ServiceDetails?.title}
          pagesub={"Details 😍"}
          pageTop={"Services"}
          img={content?.img}
          bgImage={content?.bgImage}
          title={content?.title}
        />
        <section className="service_details_section section_space bg-light">
          <div className="container">
            {/* <div className="details_item_image position-relative">
              <Image src={srImg} alt="Service Details" />
              <button
                className="video_btn ripple_effect"
                onClick={() => setOpen(true)}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            </div> */}

            <h2 className="details_item_title">{ServiceDetails?.title}</h2>
            <p>
              {content?.heroText}
            </p>

            <section className="service-section">
              <h2>What We Offer</h2>
              <div className="offer_layout">
                <div className="offer_box" data-aos="fade-up">
                  <h3 className="offer_heading">
                    {servicesOfferContent?.heading1}
                  </h3>
                  <p className="offer_content">
                    {servicesOfferContent?.content1}
                  </p>
                </div>
                <div className="offer_box" data-aos="fade-up">
                  <h3 className="offer_heading">
                    {servicesOfferContent?.heading2}
                  </h3>
                  <p className="offer_content">
                    {servicesOfferContent?.content2}
                  </p>
                </div>
                <div className="offer_box" data-aos="fade-up">
                  <h3 className="offer_heading">
                    {servicesOfferContent?.heading3}
                  </h3>
                  <p className="offer_content">
                    {servicesOfferContent?.content3}
                  </p>
                </div>
                <div className="offer_box" data-aos="fade-up">
                  <h3 className="offer_heading">
                    {servicesOfferContent?.heading4}
                  </h3>
                  <p className="offer_content">
                    {servicesOfferContent?.content4}
                  </p>
                </div>
                <div className="offer_box" data-aos="fade-up">
                  <h3 className="offer_heading">
                    {servicesOfferContent?.heading5}
                  </h3>
                  <p className="offer_content">
                    {servicesOfferContent?.content5}
                  </p>
                </div>
              </div>
            </section>

            <section className="why-choose-us">
              <h2 style={{ color: "white" }}>Why Choose Us</h2>
              <div className="why-choose-us-layout">
                <div className="why-us-box">
                  <h3 className="why-us-heading">
                    {servicesWhyUsContent?.heading1}
                  </h3>
                  <p className="why-us-content">
                    {servicesWhyUsContent?.content1}
                  </p>
                </div>
                <div className="why-us-box">
                  <h3 className="why-us-heading">
                    {servicesWhyUsContent?.heading2}
                  </h3>
                  <p className="why-us-content">
                    {servicesWhyUsContent?.content2}
                  </p>
                </div>
                <div className="why-us-box">
                  <h3 className="why-us-heading">
                    {servicesWhyUsContent?.heading3}
                  </h3>
                  <p className="why-us-content">
                    {servicesWhyUsContent?.content3}
                  </p>
                </div>
                <div className="why-us-box">
                  <h3 className="why-us-heading">
                    {servicesWhyUsContent?.heading4}
                  </h3>
                  <p className="why-us-content">
                    {servicesWhyUsContent?.content4}
                  </p>
                </div>
                <div>
                  <h3 className="why-us-heading">
                    {servicesWhyUsContent?.heading5}
                  </h3>
                  <p className="why-us-content">
                    {servicesWhyUsContent?.content5}
                  </p>
                </div>
              </div>
            </section>

            <section id="our-approach">
              <h2>Our Approach</h2>
              <p>{content?.approachText}</p>
              <div class="approach-steps">
                <div class="step">
                  <h3>{content?.approach1}</h3>
                  <p>{content?.approach1Details}</p>
                </div>
                <div class="step">
                  <h3>{content?.approach2}</h3>
                  <p>{content?.approach2Details}</p>
                </div>
                <div class="step">
                  <h3>{content?.approach3}</h3>
                  <p>{content?.approach3Details}</p>
                </div>
                <div class="step">
                  <h3>{content?.approach4}</h3>
                  <p>{content?.approach4Details}</p>
                </div>
                <div class="step">
                  <h3>{content?.approach5}</h3>
                  <p>{content?.approach5Details}</p>
                </div>
                <div class="step">
                  <h3>{content?.approach6}</h3>
                  <p>{content?.approach6Details}</p>
                </div>
              </div>
            </section>


            {/* <h3 className="details_item_info_title">Services Outcome</h3>
            <p className="mb-4">
              Here are six key points that can be associated with a digital
              Transformation gallery case global Digital Systems Engineer
              Services leader helping Fortune 500 companies on their innovation
              agenda:
            </p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Scalability and Flexibility
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Performance Optimization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">User Experience</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Training and Education
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg2} alt="Service Details" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg3} alt="Service Details" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg4} alt="Service Details" />
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
export default ServiceSinglePage;
