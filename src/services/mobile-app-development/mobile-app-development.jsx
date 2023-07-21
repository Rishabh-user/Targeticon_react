import React from "react";
import Tools from '../../components/our-tools';
import { NavLink } from "react-router-dom";
import mobileGif from '../../assets/images/GIF/Mobile-app-development.gif';
import officeView from '../../assets/images/others/office-view-2.png';
import targeticon from '../../assets/images/Target-icon.png';
import appdeveloper from '../../assets/images/others/app-development.webp';
import brandlogo from '../../assets/images/brand-logo/top-it.png';
import appfutura from '../../assets/images/brand-logo/appfutura-logo.png';
import goodfirm from '../../assets/images/brand-logo/goodfirm-logo.png';
import cluchlogo from '../../assets/images/brand-logo/clutch-logo.png';
import mobilelogo from '../../assets/images/brand-logo/mobile-app-logo.png';
import android from '../../assets/images/android.png';
import apple from '../../assets/images/apple.png';
import hybrid from '../../assets/images/icons/Hybrid.png';
import xamarin from '../../assets/images/icons/Xamarin.png';
import blockchain from '../../assets/images/icons/Blockchain.png';

const MobileAppDevelopment = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-h pt60 pb60 mobile-app-dev">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6 ">
                            <div className="page-headings ">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    We build a unique Mobile App Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Targeticon provides multi-platform applications to their clients
                                    along with quality and unmatched performance. Our primary goal is
                                    to fulfill all your requirements and create an application that
                                    satisfies your needs.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="sol-img" data-aos="fade-in" data-aos-delay={200}>
                                <img
                                    src={mobileGif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*,,,,,,,,,,,,,,,,we are targeticoin,,,,,,,,,,,,,,,*/}
            <section
                className="home-about sec-pad r-bg-acf"
                id="about"
                style={{ backgroundColor: "#d1cbc766" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-content-home text-center">
                                <h3 className="mb15" style={{ color: "#0067b0" }}>
                                    We Are Targeticon
                                </h3>
                                <h2 className="mb15">
                                    #1<span className="ree-text rt40">Mobile </span>App Company
                                    Awarded for its Top Features/Editor Apps Delivered.
                                </h2>
                                <p>
                                    Targeticon started its operation in the year 2015. We are
                                    Worldwide, based Web, App and Digital Marketing Company. Our main
                                    Domain is Web Design, App Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agency-info-ree mt100">
                    <div className="agency-picture">
                        <img
                            src={officeView}
                            alt="Office-team"
                            className="img-fluid"
                            width="100%"
                            height=""
                        />
                    </div>
                    <div className="container">
                        <div className="row key-and-award">
                            <div className="ree-app-st-a flx-end m-order2">
                                <div className="btnctm">
                                    <NavLink to="/about"
                                        className="ree-btn ree-btn-grdt2 mw-80 m-mt30"
                                    >
                                        Know More Targeticon
                                        <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="ree-app-st-b m-order1">
                                <div className="quick-key-points">
                                    <div className="key-highlights">
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>756</span> <span>+</span>
                                            </h3>
                                            <p>Project Delivered</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>478 </span> <span>+</span>
                                            </h3>
                                            <p>Enterprise Clients</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>150 </span> <span>+</span>
                                            </h3>
                                            <p>Experts Team</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>6 </span> <span>+</span>
                                            </h3>
                                            <p>Success Years</p>
                                        </div>
                                    </div>
                                    <div className="agency-info-anim text-center">
                                        <div className="animated-logo">
                                            <img src={targeticon}
                                                alt="Targeticon logo"
                                                className="logo-anim"
                                            />
                                            <img
                                                src={appdeveloper}
                                                alt="Targeticon icon"
                                                className="circle-anim"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt60">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="app-awards owl-carousesl">
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <img
                                            src={brandlogo}
                                            alt="top it"
                                            className="img-fluid"
                                        />
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <img
                                            src={appfutura}
                                            alt="top it"
                                            className="img-fluid"
                                        />
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <img
                                            src={goodfirm}
                                            alt="top it"
                                            className="img-fluid"
                                        />
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <img
                                            src={cluchlogo}
                                            alt="top it"
                                            className="img-fluid"
                                        />
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <img
                                            src={mobilelogo}
                                            alt="top it"
                                            className="img-fluid"
                                        />
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*we are Targeticon end*/}
            {/*start services*/}
            <section className="r-bg-i sec-pad" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="sec-heading text-center">
                                <h3 className="mb15" style={{ color: "#0067b0" }}>
                                    What can we provide you
                                </h3>
                                <p>
                                    Targeticon helps you build your apps in amoslt all the operating
                                    systems. We provides you with a huge variety of services in the
                                    field of application developing. The professionals are ready to
                                    work for you with all their skills and expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows">
                                    <img src={android} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/android-app-development">
                                            {" "}
                                            Android App <br />
                                            Development
                                        </NavLink>
                                    </h3>
                                    <p>
                                        These are the applications that can only run on the mobiles
                                        containing android operating system and nothing else.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/android-app-development"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />{" "}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={apple} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/ios-app-development">
                                            iOS App
                                            <br /> Development
                                        </NavLink>
                                    </h3>
                                    <p>
                                        These applications are only meant for iOS operating system and
                                        do not work on any other OS.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/ios-app-development" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={hybrid} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/hybrid-app-development">
                                            Hybrid App
                                            <br /> Development
                                        </NavLink>
                                    </h3>
                                    <p>
                                        Targeticon product design services cover The hybrid apps can
                                        work on both the android and iOS.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/hybrid-app-development"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={700}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={xamarin} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/xamarin">Xamarin</NavLink>
                                    </h3>
                                    <p>
                                        These are the apps that are available for windows and macOS.
                                        Therefore, these cannot be used on mobiles.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/xamarin" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={900}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={blockchain} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/blockchain-development">Blockchain Development</NavLink>
                                    </h3>
                                    <p>
                                        These are the applications which are build for performing
                                        blockchain transactions and linked with E-wallets.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/blockchain-development"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta-block-wide mt100">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3>
                                        Hire World-Class{" "}
                                        <span className="ree-text rt40">Developers</span>
                                    </h3>
                                    <NavLink to="/hire-app-developers"
                                        className="ree-btn  ree-btn-grdt1 mw-80"
                                    >
                                        Hire Now <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start client-testimonial  */}
            {/*end client-testimonial  */}
            {/*start our-tools  */}
            <Tools />
            {/*end our-tools  */}
        </div>
    );
};
export default MobileAppDevelopment;