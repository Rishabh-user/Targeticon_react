import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../components/our-tools';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user from '../assets/images/users/user4.jpg';
import fgil from '../assets/images/FGLI-screen-short.png';
import customerlogo from '../assets/images/brand-logo/customer-logo-4.png';
import oliva from '../assets/images/oliva-screen-short.png';
import customerlogo2 from '../assets/images/brand-logo/customer-logo-2.png';
import tstpc from '../assets/images/TSTPC-screen-short.png';
import tstpclogo from '../assets/images/brand-logo/TSTPC-logo.png';
import tsig from '../assets/images/T-SIG.png';
import tsocial from '../assets/images/brand-logo/t-social.png';
import gcli from '../assets/images/GCFL.png';
import gclilogo from '../assets/images/brand-logo/GCFL-logo.png';
import virtuallyvocal from '../assets/images/virtuallyvocal.png';
import VirtuallyVocallogo from '../assets/images/brand-logo/virtuallyvocal-logo.png';
import sociallocket from '../assets/images/sociallocket-screen.png';
import sociallocketlogo from '../assets/images/brand-logo/sociallocket-logo.png';
import performanceauditions from '../assets/images/Performer-Auditions-screen.png';
import performanceauditionslogo from '../assets/images/brand-logo/PerformerAuditions-logo.png';
import zandu from '../assets/images/zandu-care-screen.png';
import zandulogo from '../assets/images/brand-logo/zandu-logo.png';
import n1building from '../assets/images/n1-building-screen.png';
import n1buildinglogo from '../assets/images/brand-logo/n1-Building-logo.png';
import rafawater from '../assets/images/rafawater-screen.png';
import rafawaterlogo from '../assets/images/brand-logo/rafawater-logo.png';
import olivashop from '../assets/images/oliva-shop-screen.png';
import remodlescreen from '../assets/images/remodle-screen.png';
import customerlogo3 from '../assets/images/brand-logo/customer-logo-3.png';
import portfolioappscreen from '../assets/images/case-study/portfolio-App-screen-make-1.png';
import portfolioappscreen2 from '../assets/images/case-study/portfolio-App-screen-make-2.png';
import portfolioappscreen3 from '../assets/images/case-study/portfolio-App-screen-make-3.png';
import portfolioappscreen4 from '../assets/images/case-study/portfolio-App-screen-make-4.png';


const Index = () => {
    const options = {
        items: 4,
        margin: 20,
        dot: true,
        loop: true,
        nav: false,
    };

    return (
        <div>
            {/* Start Header */}
            {/*?php include '../include/header.php';?*/}
            {/* Header End */}
            {/*page head*/}
            <div className="port-head-sec pt80 pb80 portfolio-page">
                <div className="container">
                    <div className="row vcenter ">
                        <div className="col-lg-7">
                            <div className="page-headings">
                                <span
                                    className="sub-heading mb15 txt-orange"
                                    data-aos="fade-in"
                                    data-aos-delay={100}
                                >
                                    <i className="fas fa-briefcase mr5" /> Quality Work
                                </span>
                                <h1
                                    className="mb15 txt-white"
                                    data-aos="fade-in"
                                    data-aos-delay={200}
                                >
                                    Some of our <span className="ree-text rt40">Finest</span> work.
                                </h1>
                                <p className="txt-white" data-aos="fade-in" data-aos-delay={300}>
                                    We Have Built High Impact Solutions Across Industries.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-in"
                                    data-aos-delay={400}
                                >
                                    Get Quote <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div
                                className="ree-card m-mt30 trust-review owl-carousel"
                                data-aos="fade-in"
                                data-aos-delay={500}
                            >
                                <div className="items">
                                    <div className="review-text">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type.
                                        </p>
                                    </div>
                                    <div className="ree-row-set mt30">
                                        <div className="media vcenter">
                                            <div className="ree-icon-set img-round80">
                                                <img
                                                    src={user}
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Lora Myka</h5>
                                                <p>
                                                    ABC Business, <small>Jaipur, Rajasthan</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="review-text">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type.
                                        </p>
                                    </div>
                                    <div className="ree-row-set mt30">
                                        <div className="media vcenter">
                                            <div className="ree-icon-set img-round80">
                                                <img
                                                    src={user}
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Lora Myka</h5>
                                                <p>
                                                    ABC Business, <small>Jaipur, Rajasthan</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt50">
                        <div className="col-lg-12">
                            <div className="company-special-work">
                                {/*?php include'../include/top-brands-trust-slider.php';?*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*page head end*/}
            {/*portfolio items*/}
            <div className="pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Creative work</h2>
                                <p>
                                    We have completed thousands of projects, some of them showing
                                    important projects here.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-items mt60">
                        {/* portfolio row 1 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={fgil}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        FGLI Creative Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Life insurance is an irreplaceable part of a sound financial
                                                plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://life.futuregenerali.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/future-general-life-insurance"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={customerlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Future Generali Life Insurance</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={oliva}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        Oliva Skin &amp; Hair Clinic Creative Designing Service by
                                        Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Oliva Skin &amp; Hair Clinic irreplaceable part of a sound
                                                financial plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://www.olivaclinic.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/oliva-clinic"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={customerlogo2}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Oliva Skin &amp; Hair Clinic</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 3 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={tstpc}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        TSTPC Ltd. Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd. part of a
                                                sound financial plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://tstpc.telangana.gov.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/tstpc"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>TSTPC Ltd.</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 4 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={tsig}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        T-SIG Ltd. Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                T-Social Impact Group Ltd. part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://csr.telangana.gov.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/t-sig"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={tsocial}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>T-SIG Ltd.</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 5 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={gcli}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        GetCashForLaptop Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Get Cash For Laptop part of a sound financial plan. It helps
                                                in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://www.getcashforlaptop.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/get-cash-for-laptop"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={gclilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>GetCashForLaptop</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 6 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={virtuallyvocal}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        Virtually Vocal Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Virtually Vocal part of a sound financial plan. It helps in
                                                securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://www.virtuallyvocal.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/virtually-vocal"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={VirtuallyVocallogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Virtually Vocal</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 7 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={sociallocket}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        Social Locket Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Social Locket part of a sound financial plan. It helps in
                                                securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="https://green.app.sociallocket.com/da"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/social-locket"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={sociallocketlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Social Locket</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 8 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <NavLink to="#">
                                            {" "}
                                            <img
                                                src={performanceauditions}
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <NavLink to="#" className="port-title-main">
                                        Performer Auditions Designing Service by Targeticon
                                    </NavLink>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Performer Auditions part of a sound financial plan. It helps
                                                in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <NavLink to="http://stage.performerauditions.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                            <NavLink to="/portfolio/performance-audition"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </NavLink>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src={performanceauditionslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Performer Auditions</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <ul class="pagination shadows">
                        <li><a href="#" class="prev">Prev</a></li>
                        <li class="pageNumber active"><a href="#">1</a></li>
                        <li class="pageNumber"><a href="#">2</a></li>
                        <li class="pageNumber"><a href="#">3</a></li>
                        <li class="pageNumber"><a href="#">4</a></li>
                        <li><a href="#" class="next">Next</a></li>
                    </ul>
                </div>
            </div> */}
                    </div>
                </div>
            </div>
            {/*portfolio end*/}
            {/*creative portfolio*/}
            <section className="dark-light-a pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-8 vcenter text-center">
                            <div className="heading-hz-btn">
                                <span className="sub-heading mb15">
                                    {/* QUALITY WORK */}Quality is more important than quantity
                                </span>
                                <h2 className="w-txt">
                                    Some of our <span className="ree-text rt40">Finest</span> Work
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt20 dark-bg">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <NavLink to="https://zanducare.com/" target="_blank">
                                    {" "}
                                    <img
                                        src={zandu}
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </NavLink>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src={zandulogo}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Zandu Care</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <NavLink to="https://zanducare.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                                <NavLink to="/portfolio/performance-audition"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <NavLink to="https://www.n1buildingcontractors.com/" target="_blank">
                                    {" "}
                                    <img
                                        src={n1building}
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </NavLink>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src={n1buildinglogo}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">N1 Building Contractors Ltd.</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <NavLink to="https://www.n1buildingcontractors.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                                <NavLink to="/portfolio/performance-audition"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <NavLink to="https://www.rafawater.com/">
                                    {" "}
                                    <img
                                        src={rafawater}
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </NavLink>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src={rafawaterlogo}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Rafa Water</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <NavLink to="https://www.rafawater.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                                <NavLink to="/portfolio/performance-audition"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <NavLink to="#">
                                    {" "}
                                    <img
                                        src={olivashop}
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </NavLink>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src={customerlogo2}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Shop Oliva Clinic</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <NavLink to="https://shop.olivaclinic.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                                <NavLink to="/portfolio/performance-audition"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <NavLink to="#">
                                    {" "}
                                    <img
                                        src={remodlescreen}
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </NavLink>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src={customerlogo3}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Remodel Republic</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <NavLink to="https://www.remodelrepublic.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                                <NavLink to="/portfolio/performance-audition"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row justify-content-center text-center mt60">
            <div class="col-lg-10">
                <div class="cta-heading-wide-bt">
                    <h3 class="w-txt">Take a look of our quality work</h3>
                    <a href="https://separateweb.com/" class="ree-btn  ree-btn-grdt1 mw-80 no-shadows">View All Work <i class="fas fa-arrow-right fa-btn"></i></a> 
                </div>
            </div>
            </div> */}
                </div>
            </section>
            {/*end portfolio*/}
            {/*item screen*/}
            <section className="home-partners-block r-bg-x pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="sec-heading text-center">
                                <h2 className="mb15">
                                    <span className="ree-text rt40">App</span> Screens
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-screenss owl-carousel mt70 dottss">
                        <OwlCarousel options={options} >
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen2}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen3}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen4}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen2}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="appscreen">
                                <div className="itme-img">
                                    <img
                                        src={portfolioappscreen4}
                                        alt="mockup"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <Tools />
            {/*start footer */}
            {/*?php include '../include/footer.php';?*/}
            {/* end footer
            */}
        </div>
    );
};
export default Index;