import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import investtelangana from '../assets/images/invest-telangana.png';
import investtelanganalogo from '../assets/images/invest-telangana-logo.png';
import fgil from '../assets/images/FGLI-screen-short.png';
import fglilogo from '../assets/images/brand-logo/fgli-logo.png';
import delhimetro from '../assets/images/delhi-metro.png';
import delhimetrologo from '../assets/images/delhi-metro-logo.png';
import oliva from '../assets/images/oliva-screen-short.png';
import farming from '../assets/images/farming-screen.png';
import farminglogo from '../assets/images/farming-logo.png';
import olivalogo from '../assets/images/oliva-logo.png';
import tstpc from '../assets/images/TSTPC-screen-short.png';
import tstpclogo from '../assets/images/TSTPC-logo.png';
import FDscreen from '../assets/images/floor-direct-screen.png';
import FDlogo from '../assets/images/FD-logo.png';
import tsig from '../assets/images/T-SIG.png';
import qyred from '../assets/images/qyred-screen.png'; 
import qyredlogo from '../assets/images/qryde-logo.png';
import gcli from '../assets/images/GCFL.png';
import gclilogo from '../assets/images/brand-logo/GCFL-logo.png';
import virtuallyvocal from '../assets/images/virtuallyvocal.png';
import VirtuallyVocallogo from '../assets/images/brand-logo/virtuallyvocal-logo.png';
import sociallocket from '../assets/images/sociallocket-screen.png';
import sociallocketlogo from '../assets/images/brand-logo/sociallocket-logo.png';
import performanceauditions from '../assets/images/Performer-Auditions-screen.png';
import performanceauditionslogo from '../assets/images/brand-logo/PerformerAuditions-logo.png';
import ms from '../assets/images/ms-img.png';
import mslogo from '../assets/images/ms-logo.png';
import zandu from '../assets/images/zandu-care-screen.png';
import zandulogo from '../assets/images/zandu-logo.png';
import n1building from '../assets/images/n1-building-screen.png';
import n1buildinglogo from '../assets/images/brand-logo/n1-Building-logo.png';
import rafawater from '../assets/images/rafawater-screen.png';
import rafawaterlogo from '../assets/images/brand-logo/rafawater-logo.png';
import fabindialogo from '../assets/images/brand-logo/fabindia-logo.png';
import fabindia from '../assets/images/fabindia-screen.png';
import orgranicindialogo from '../assets/images/brand-logo/orgranicindia-logo.png';
import orgranicindia from '../assets/images/orgranicindia-screen.png';
import awslogo from '../assets/images/brand-logo/aws-logo.png';
import awsscreen from '../assets/images/aws-screen.png';
import lucidantlogo from '../assets/images/brand-logo/lucidant-logo.png';
import lucidantscreen from '../assets/images/lucidant-screen.png';
import remodlescreen from '../assets/images/remodle-screen.png';
import remodlelogo from '../assets/images/remodel-logo.png';
import portfolioappscreen from '../assets/images/case-study/portfolio-App-screen-make-1.png';
import portfolioappscreen2 from '../assets/images/case-study/portfolio-App-screen-make-2.png';
import portfolioappscreen3 from '../assets/images/case-study/portfolio-App-screen-make-3.png';
import portfolioappscreen4 from '../assets/images/case-study/portfolio-App-screen-make-4.png';
import olivaappscreen from '../assets/images/portfolio-App-screen-oliva.png';
import ramsunappscreen from '../assets/images/portfolio-App-screen-ramsun.png';
import Dmetroappscreen from '../assets/images/portfolio-App-screen-Delhi-metro.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";

const Index = () => {
    const options = {
        items: 5,
        margin: 20,
        dot: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 2, 
                margin: 10,
            },
            590: {
                items: 2, 
                margin: 10,
            },
            768: {
                items: 3, 
                margin: 15, 
            },
            1024: {
                items: 5, 
                margin: 20, 
            }
        }
    };
    

    return (
        <div>
            <>
                {/* Start Header */}
                {/*?php include '../include/header.php';?*/}
                {/* Header End */}
                {/*page head*/}
                <div className="col-lg-12 port-head-sec pt80 pb80 portfolio-page vcenter d-flex">
                    <div className="container">
                    <div className="row vcenter ">
                        <div className="col-lg-12">
                            <div className="page-headings text-center">
                                {/* <span class="sub-heading mb15 txt-white" data-aos="fade-in" data-aos-delay="100"><i class="fas fa-briefcase mr5"></i> Quality Work</span> */}
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
                                <Link
                                to="contact-us.php"
                                className="ree-btn  ree-btn-grdt1 mt40"
                                data-aos="fade-in"
                                data-aos-delay={400}>Get Quote <i className="fas fa-arrow-right fa-btn" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*page head end*/}
                {/*portfolio items*/}
                {/* Tabs */}
                <section className="col-lg-12 zup pt60 pb60 portfolio-brand">
                    <div className="container">
                    <div className="row justify-content-center vcenter portfolio">
                        <div className="col-lg-8">
                        <div className="sec-heading text-center pera-block">
                            <h2>
                            <span className="ree-text rt40 txt-blue">
                                Quality is more important than quantity{" "}
                            </span>
                            </h2>
                            <p>Take a look of our latest work.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 mt60">
                        <div className="tab-17 tabs-layout">
                            <Tabs>
                                <TabList>
                                    <Tab>All</Tab>
                                    <Tab> Website UI</Tab>
                                    <Tab>Application UI</Tab>
                                    <Tab>Website Development</Tab>
                                    <Tab>Application Development</Tab>
                                    <Tab>Payment Gateway</Tab>
                                </TabList>
                                <TabPanel title="ALL">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-12 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={fgil}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={fglilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Future Generali Life Insurance</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Life insurance is an irreplaceable part of a sound
                                                financial plan. It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://life.futuregenerali.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/future-generali-life-insurance"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={oliva}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details portfolio-user-info">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={olivalogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set">
                                                <h5>Oliva Skin &amp; Hair Clinic</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Oliva Skin &amp; Hair Clinic irreplaceable part of a
                                                sound financial plan. It helps in securing your
                                                family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.olivaclinic.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/oliva-clinic"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tstpc}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tsig}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={gcli}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={gclilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Get Cash For Laptop</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Get Cash For Laptop part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.getcashforlaptop.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={virtuallyvocal}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={VirtuallyVocallogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Virtually Vocal</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Virtually Vocal part of a sound financial plan. It
                                                helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.virtuallyvocal.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={sociallocket}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={sociallocketlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Social Locket</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Social Locket part of a sound financial plan. It
                                                helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://green.app.sociallocket.com/da"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={performanceauditions}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={performanceauditionslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Performer Auditions</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Performer Auditions part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="http://stage.performerauditions.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={FDscreen}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={FDlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Floor Direct</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                When you are looking for flooring in Islington and
                                                around London there is only one place to call.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.floordirectltd.co.uk/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={qyred}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={qyredlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>QRyde by HBSS</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Provide dispatchers greater control over their rides
                                                and enable them to re-route and alert the riders
                                                accordingly
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://qryde.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={farming}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={farminglogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Farm &amp; Rural Mission PVT LTD.</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Farm &amp; Rural Mission PVT. LTD. Cultivating Smart
                                                Growth Ideas.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://xd.adobe.com/view/648b071c-e88b-41f8-bafe-412fccb85840-31d8/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={investtelangana}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={investtelanganalogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Invest Telangana</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                The Best State to do Business in India, One of the
                                                Best Performing States
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/invest-telangana/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={delhimetro}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={delhimetrologo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Delhi Metro</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                DMRC to start QR code-based entry system at stations
                                                soon in India.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/delhimetrorail/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={ms}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={mslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Marks &amp; Spencer London</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Marks &amp; Spencer London Change your life Style
                                                with Marks &amp; Spencer
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.marksandspencer.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={zandu}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={zandulogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Zandu Care</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Zandu Care, the online store of Zandu, The best
                                                place to shop Ayurvedic medicines
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://consult.zanducare.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={n1building}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={n1buildinglogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>N1 Building Contractors Ltd.</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                N1 Building Contractors remodeling &amp; redesign
                                                your Dream Bathrooms and Kitchens
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.n1buildingcontractors.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={rafawater}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={rafawaterlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Rafa Water</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Water is the most important natural resource on
                                                earth, and the most vital one for all forms of life,
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.rafawater.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={remodlescreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={remodlelogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Remodel Republic</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Remodel Republic remodeling &amp; redesign your
                                                    Dream home and gardens
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.remodelrepublic.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={oliva}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={olivalogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Shop Oliva Clinic</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Shop Oliva Clinic The best place to hair and face
                                                    Treatment medicines
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://shop.olivaclinic.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={fabindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={fabindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>fabindia</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Fabindia was established in 1960 primarily to promote the fascinating crafts of India.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.fabindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={orgranicindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={orgranicindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Orgranic India</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                At ORGANIC INDIA we celebrate the healing power of Mother Nature to nourish.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://organicindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={awsscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={awslogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>AWS Asian Worldwide Services</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    ASIAN WORLDWIDE SERVICES (INDIA) PVT. LTD. a joint venture company of AWS Singapore.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://aws-india.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={lucidantscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={lucidantlogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Lucidant Polymers</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                High-performance polymer matrices for your biological separations or nanolayer-active coating.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.lucidant.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel title="Website UI">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={fgil}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={fglilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Future Generali Life Insurance</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Life insurance is an irreplaceable part of a sound
                                                financial plan. It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://life.futuregenerali.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/future-generali-life-insurance"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={sociallocket}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={sociallocketlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Social Locket</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Social Locket part of a sound financial plan. It
                                                helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://green.app.sociallocket.com/da"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={performanceauditions}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={performanceauditionslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Performer Auditions</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Performer Auditions part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="http://stage.performerauditions.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={FDscreen}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={FDlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Floor Direct</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                When you are looking for flooring in Islington and
                                                around London there is only one place to call.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.floordirectltd.co.uk/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={delhimetro}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={delhimetrologo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Delhi Metro</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                DMRC to start QR code-based entry system at stations
                                                soon
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/delhimetrorail/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={gcli}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={gclilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Get Cash For Laptop</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Get Cash For Laptop part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.getcashforlaptop.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={farming}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={farminglogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Farm &amp; Rural Mission PVT LTD.</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Farm &amp; Rural Mission PVT. LTD. Cultivating Smart
                                                Growth Ideas.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://xd.adobe.com/view/648b071c-e88b-41f8-bafe-412fccb85840-31d8/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tstpc}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tsig}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tstpc}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Invest Telangana</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                The Best State to do Business in India, One of the
                                                Best Performing States
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/invest-telangana/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={fabindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={fabindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>fabindia</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Fabindia was established in 1960 primarily to promote the fascinating crafts of India.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.fabindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={orgranicindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={orgranicindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Orgranic India</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                At ORGANIC INDIA we celebrate the healing power of Mother Nature to nourish.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://organicindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={awsscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={awslogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>AWS Asian Worldwide Services</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    ASIAN WORLDWIDE SERVICES (INDIA) PVT. LTD. a joint venture company of AWS Singapore.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://aws-india.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={lucidantscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={lucidantlogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Lucidant Polymers</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                High-performance polymer matrices for your biological separations or nanolayer-active coating.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.lucidant.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel title="Application UI">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={delhimetro}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={delhimetrologo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Delhi Metro</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                DMRC to start QR code-based entry system at stations
                                                soon
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/delhimetrorail/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel title="Website Development">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={fgil}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={fglilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Future Generali Life Insurance</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Life insurance is an irreplaceable part of a sound
                                                financial plan. It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://life.futuregenerali.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/future-generali-life-insurance"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={oliva}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details portfolio-user-info">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={olivalogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set">
                                                <h5>Oliva Skin &amp; Hair Clinic</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Oliva Skin &amp; Hair Clinic irreplaceable part of a
                                                sound financial plan. It helps in securing your
                                                family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.olivaclinic.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/oliva-clinic"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tstpc}
                                                alt="portfolio targeticon"
                                                className="img-fluid"
                                                />{" "}
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={tsig}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={tstpclogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>TSTPC Ltd</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd.
                                                part of a sound financial plan. It helps in securing
                                                your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://tstpc.telangana.gov.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={gcli}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={gclilogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Get Cash For Laptop</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Get Cash For Laptop part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.getcashforlaptop.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={virtuallyvocal}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={VirtuallyVocallogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Virtually Vocal</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Virtually Vocal part of a sound financial plan. It
                                                helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.virtuallyvocal.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={sociallocket}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={sociallocketlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Social Locket</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Social Locket part of a sound financial plan. It
                                                helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://green.app.sociallocket.com/da"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={performanceauditions}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={performanceauditionslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Performer Auditions</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Performer Auditions part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="http://stage.performerauditions.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={FDscreen}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={FDlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Floor Direct</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                When you are looking for flooring in Islington and
                                                around London there is only one place to call.
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.floordirectltd.co.uk/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={investtelangana}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={investtelanganalogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Invest Telangana</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                The Best State to do Business in India, One of the
                                                Best Performing States
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/invest-telangana/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={delhimetro}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={delhimetrologo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Delhi Metro</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                DMRC to start QR code-based entry system at stations
                                                soon
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://securestaging.net/delhimetrorail/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={ms}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={mslogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Marks &amp; Spencer London</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Marks &amp; Spencer London Change your life Style
                                                with Marks &amp; Spencer
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.marksandspencer.in/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={zandu}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={zandulogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Zandu Care</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Zandu Care, the online store of Zandu, The best
                                                place to shop Ayurvedic medicines
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://consult.zanducare.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={n1building}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={n1buildinglogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>N1 Building Contractors Ltd.</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                N1 Building Contractors remodeling &amp; redesign
                                                your Dream Bathrooms and Kitchens
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.n1buildingcontractors.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={rafawater}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={rafawaterlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Rafa Water</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Water is the most important natural resource on
                                                earth, and the most vital one for all forms of life,
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.rafawater.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={remodlescreen}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={remodlelogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Remodel Republic</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Remodel Republic remodeling &amp; redesign your
                                                Dream home and gardens
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.remodelrepublic.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={oliva}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                    <div className="media vcenter mb20">
                                                        <div className="ree-icon-set img-round80">
                                                        <img
                                                            src={oliva}
                                                            alt="logo"
                                                            className="img-fluid"
                                                        />
                                                        </div>
                                                        <div className="ree-details-set poruser-info">
                                                        <h5>Shop Oliva Clinic</h5>
                                                        <span>Design by Targeticon</span>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Fabindia was established in 1960 primarily to promote the fascinating crafts of India.
                                                    </p>
                                                    <div className="portfolio-read-btn">
                                                        <Link
                                                        to="https://www.fabindia.com/"
                                                        target="_blank" rel="noreferrer"
                                                        className="port-links ree-btn-grdt1"
                                                        >
                                                        Live view
                                                        </Link>
                                                        <Link
                                                        to="/portfolio/tstpc-ltd"
                                                        target="_blank" rel="noreferrer"
                                                        className="port-links ree-btn-grdt1"
                                                        >
                                                        See Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={fabindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={fabindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>fabindia</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Fabindia was established in 1960 primarily to promote the fascinating crafts of India.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.fabindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={orgranicindia}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={orgranicindialogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Orgranic India</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                At ORGANIC INDIA we celebrate the healing power of Mother Nature to nourish.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://organicindia.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={awsscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={awslogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>AWS Asian Worldwide Services</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    ASIAN WORLDWIDE SERVICES (INDIA) PVT. LTD. a joint venture company of AWS Singapore.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://aws-india.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                            <div className="fwb-main-x portfolio-frame fwb-a">
                                                <div className="work-thumbnails">
                                                <Link to="#">
                                                    <img
                                                    src={lucidantscreen}
                                                    alt="portfolio"
                                                    className="img-fluid"
                                                    />
                                                </Link>
                                                </div>
                                                <div className="work-details">
                                                <div className="media vcenter mb20">
                                                    <div className="ree-icon-set img-round80">
                                                    <img
                                                        src={lucidantlogo}
                                                        alt="logo"
                                                        className="img-fluid"
                                                    />
                                                    </div>
                                                    <div className="ree-details-set poruser-info">
                                                    <h5>Lucidant Polymers</h5>
                                                    <span>Design by Targeticon</span>
                                                    </div>
                                                </div>
                                                <p>
                                                High-performance polymer matrices for your biological separations or nanolayer-active coating.
                                                </p>
                                                <div className="portfolio-read-btn">
                                                    <Link
                                                    to="https://www.lucidant.com/"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    Live view
                                                    </Link>
                                                    <Link
                                                    to="/portfolio/tstpc-ltd"
                                                    target="_blank" rel="noreferrer"
                                                    className="port-links ree-btn-grdt1"
                                                    >
                                                    See Details
                                                    </Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel title="Application Development">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={rafawater}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={rafawaterlogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Rafa Water</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Water is the most important natural resource on
                                                earth, and the most vital one for all forms of life,
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.rafawater.com/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel title="Payment Gateway">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6  col-sm-6 mt30">
                                        <div className="fwb-main-x portfolio-frame fwb-a">
                                            <div className="work-thumbnails">
                                            <Link to="#">
                                                <img
                                                src={oliva}
                                                alt="portfolio"
                                                className="img-fluid"
                                                />
                                            </Link>
                                            </div>
                                            <div className="work-details">
                                            <div className="media vcenter mb20">
                                                <div className="ree-icon-set img-round80">
                                                <img
                                                    src={olivalogo}
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                                </div>
                                                <div className="ree-details-set poruser-info">
                                                <h5>Shop Oliva Clinic</h5>
                                                <span>Design by Targeticon</span>
                                                </div>
                                            </div>
                                            <p>
                                                Shop Oliva Clinic The best place to hair and face
                                                Treatment medicines
                                            </p>
                                            <div className="portfolio-read-btn">
                                                <Link
                                                to="https://www.olivaclinic.com/ask-oliva/"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                Live view
                                                </Link>
                                                <Link
                                                to="/portfolio/tstpc-ltd"
                                                 target="_blank" rel="noreferrer"
                                                className="port-links ree-btn-grdt1"
                                                >
                                                See Details
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>                         
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Tabs */}

                
                {/*item screen*/}
                <section className="home-partners-block portfolio-App-screen pt60 pb60">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="sec-heading text-center">
                            <h2 className="mb15 txt-white">
                            <span className="ree-text rt40">App</span> Screens
                            </h2>
                            <p className="txt-white">
                            Experience Seamless Navigation Through Our App's Dynamic Interface
                            and Functionality Showcase
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="app-screenss owl-carousel mt70 dottss">
                        <OwlCarousel {...options}>                             
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="https://projects.invisionapp.com/d/main#/console/20209552/427240198/preview?scrollOffset=522#project_console"  target="_blank" rel="noreferrer">
                                        <img
                                            src={portfolioappscreen}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="https://www.figma.com/design/WXY0RTRzuiFQdeAF511UAt/Telangana-survey?node-id=0-1&t=h5VHZF2Yy4DCS16j-0"  target="_blank" rel="noreferrer">
                                        <img
                                            src={portfolioappscreen2}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="#">
                                        <img
                                            src={portfolioappscreen3}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="#">
                                        <img
                                            src={portfolioappscreen4}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="https://www.figma.com/proto/58cLM560auUeQO19mNB1zr/Ask-our-doc?page-id=0%3A1&node-id=18-1480&viewport=243%2C48%2C0.56&scaling=min-zoom&starting-point-node-id=507%3A145&show-proto-sidebar=1"  target="_blank" rel="noreferrer">
                                        <img
                                            src={olivaappscreen}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="https://xd.adobe.com/spec/747ef59c-a22d-48ad-5525-3719bfc0726a-024f/grid"  target="_blank" rel="noreferrer">
                                        <img
                                            src={ramsunappscreen}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itme-img">
                                        <Link to="https://xd.adobe.com/view/95665555-ffdf-4889-95c3-9679390a304c-c035/"  target="_blank" rel="noreferrer">
                                        <img
                                            src={Dmetroappscreen}
                                            alt="mockup"
                                            className="img-fluid"
                                        />
                                        </Link>
                                    </div>
                                </div>                            
                        </OwlCarousel> 
                    </div>
                                       
                    {/* <div className="app-screenss owl-carousel mt70 dottss">
                        <div className="appscreen">
                        
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="#">
                            <img
                                src={portfolioappscreen}
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="#">
                            <img
                                src={portfolioappscreen2}
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="#">
                            <img
                                src={portfolioappscreen3}
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="#">
                            <img
                                src={portfolioappscreen4}
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="#">
                            <img
                                src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-4.png"
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="https://xd.adobe.com/spec/747ef59c-a22d-48ad-5525-3719bfc0726a-024f/specs/">
                            <img
                                src=" <?php echo BASE_URL; ?>images/portfolio-App-screen-ramsun.png"
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="https://www.figma.com/proto/58cLM560auUeQO19mNB1zr/Ask-our-doc?page-id=0%3A1&node-id=18-1480&viewport=243%2C48%2C0.56&scaling=min-zoom&starting-point-node-id=507%3A145&show-proto-sidebar=1">
                            <img
                                src=" <?php echo BASE_URL; ?>images/portfolio-App-screen-oliva.png"
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="https://projects.invisionapp.com/d/main#/console/20209552/427240198/preview?scrollOffset=522#project_console">
                            <img
                                src=" <?php echo BASE_URL; ?>images/portfolio-App-screen-invision.png"
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                        <div className="appscreen">
                        <div className="itme-img">
                            <Link to="https://xd.adobe.com/view/95665555-ffdf-4889-95c3-9679390a304c-c035/">
                            <img
                                src=" <?php echo BASE_URL; ?>images/portfolio-App-screen-Delhi-metro.png"
                                alt="mockup"
                                className="img-fluid"
                            />
                            </Link>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </section>
                {/*item screen end*/}
                {/*start footer */}
                {/*?php include '../include/footer.php';?*/}
                {/* end footer
                */}
                </>

        </div>
    );
};
export default Index;