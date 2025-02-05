import sImg1 from "/public/images/services/service_image_1.webp";
import sImg2 from "/public/images/services/service_image_2.webp";
import sImg3 from "/public/images/services/service_image_3.webp";
import sImg4 from "/public/images/services/service_image_4.webp";
import sImg5 from "/public/images/services/service_image_5.webp";

// import icon1 from "/public/images/icons/icon_code.svg";
// import icon2 from "/public/images/icons/icon_programming_tree.svg";
// import icon3 from "/public/images/icons/icon_monitor_2.svg";
// import icon4 from "/public/images/icons/icon_phone.svg";
// import icon5 from "/public/images/icons/icon_bug.svg";
// import icon6 from "/public/images/icons/icon_programming.svg";
import icon1 from "/public/images/icons/newicon.svg";
import icon2 from "/public/images/icons/mob_app.svg";
import icon3 from "/public/images/icons/digital_marketing.svg";
import icon4 from "/public/images/icons/ux_ui.svg";
import icon5 from "/public/images/icons/word_press.svg";
import icon6 from "/public/images/icons/graphic_design.svg";

import icon7 from "/public/images/icons/icon_analisis_2.svg";
import icon8 from "/public/images/icons/icon_process.svg";
import icon9 from "/public/images/icons/icon_chart_2.svg";
import icon10 from "/public/images/icons/icon_meeting.svg";
import icon11 from "/public/images/icons/icon_bulb_2.svg";
import icon12 from "/public/images/icons/icon_speed_miter.svg";

const Services = [
  {
    Id: "1",
    sImg: sImg1,
    title: "IT Management Services",
    slug: "IT-Management-Services",
    thumb1: "Strategy",
    thumb2: "Consultation",
    col: "col-lg-6",
    description:
      "Visit new places to discover with a Tourist Visa. We deliver your documents ...",
  },
  {
    Id: "2",
    sImg: sImg2,
    title: "Data Tracking and Security",
    slug: "Data-Tracking-and-Security",
    thumb1: "Management",
    thumb2: "Transfer",
    col: "col-lg-6",
    description:
      "Developing your trade, setting up new sales channels Your visa is ready...",
  },
  {
    Id: "3",
    sImg: sImg3,
    title: "Website Development",
    slug: "Website-Development",
    thumb1: "Landing Page",
    thumb2: "Plugins",
    col: "col-lg-4",
    description:
      "Developing your trade, setting up new sales channels Your visa is ready...",
  },
  {
    Id: "4",
    sImg: sImg4,
    title: "Modern Technology Solution",
    slug: "Modern-Technology-Solution",
    thumb1: "Consultation",
    thumb2: "solution",
    col: "col-lg-4",
    description:
      "Embarking on a journey of higher education in a foreign country opens doors to...",
  },
  {
    Id: "5",
    sImg: sImg5,
    title: "UI/UX Design Services",
    slug: "UI-UX-Design-Services",
    thumb1: "Website",
    thumb2: "Mobile App",
    col: "col-lg-4",
    description:
      "Expert Guidance for a Seamless Immigration Journey Expert Guidance...",
  },
  {
    Id: "6",
    sImg: icon1,
    title: "Web Development",
    slug: "Web Development",
    features: [
      "Responsive websites",
      "Seamless, user-friendly designs",
      "Tailored business solutions",
      "Superior functional performance",
    ],
    detail:
      "Transform your online presence with our comprehensive web development services. We create responsive, user-friendly websites tailored to meet your business needs, ensuring a seamless user experience and robust functionality.",
  },
  {
    Id: "7",
    sImg: icon2,
    title: "App Development",
    slug: "App Development",
    features: [
      "TechGuard Audit",
      "CyberSafe Audit & IT Consulting",
      "AssuranceEdge & IT Consulting",
      "IT Sentry Audit & IT Consulting",
    ],
    detail:
      "Bring your ideas to life with our custom app development solutions. We specialize in creating innovative, high-performance mobile and web applications designed to engage users and drive business growth.",
  },
  {
    Id: "8",
    sImg: icon3,
    title: "Digital Marketing",
    slug: "Digital Marketing",
    features: [
      "Web app development services",
      "Web portal development services",
      "Website development services",
      "Offshore web development",
    ],
    detail:
      "Elevate your brand with our expert digital marketing services. From SEO and social media management to content creation and PPC campaigns, we develop strategies that increase your online visibility and boost your ROI.",
  },
  {
    Id: "9",
    sImg: icon4,
    title: "UI/UX Designing",
    slug: "UI-UX Designing",
    features: [
      "Android development services",
      "iOS app development services",
      "Mobile application design services",
      "Enterprise mobile app development",
    ],
    detail:
      "Enhance your digital presence with our expert UI/UX design services. We create intuitive, user-friendly interfaces that boost engagement and satisfaction. Our stunning designs are tailored to meet your specific needs.",
  },
  {
    Id: "10",
    sImg: icon5,
    title: "WordPress Development",
    slug: "WordPress Development",
    features: [
      "PixelPerfection UI/UX Design",
      "DesignCraft UI/UX Design",
      "CreativeWave UI/UX Design",
      "InterfaceGenius UI/UX Design",
    ],
    detail:
      "Build a flexible website with our WordPress development services. We create custom themes, plugins, and functionality to meet your goals. Our team ensures your site is secure, responsive, and optimized for performance.",
  },
  {
    Id: "11",
    sImg: icon6,
    title: "Graphic Designing",
    slug: "Graphic Designing",
    features: [
      "CareCraft Maintenance",
      "FixItPro Maintenance",
      "TechCare Maintenance",
      "AssistEdge Maintenance",
    ],
    detail:
      "Elevate your brand identity with our comprehensive graphic design services. From logos and brochures to social media graphics and marketing materials, we deliver visually appealing designs that capture your brand's essence.",
  },
  {
    Id: "12",
    sImg: icon7,
    title: "Strategic Planning and Execution",
    slug: "Strategic-Planning-and-Execution",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
  {
    Id: "13",
    sImg: icon8,
    title: "Business Process Optimization",
    slug: "Business-Process-Optimization",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
  {
    Id: "14",
    sImg: icon9,
    title: "Digital Transformation Consulting",
    slug: "Digital-Transformation-Consulting",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
  {
    Id: "15",
    sImg: icon10,
    title: "Strategic Planning and Execution",
    slug: "Strategic-Planning-and-Executions",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
  {
    Id: "16",
    sImg: icon11,
    title: "Change Management Solutions",
    slug: "Change-Management-Solutions",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
  {
    Id: "17",
    sImg: icon12,
    title: "Performance Metrics and KPI Development",
    slug: "Performance-Metrics-and-KPI-Development",
    description:
      "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
  },
];

export default Services;
