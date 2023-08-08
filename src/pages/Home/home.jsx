import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "./components/slider";
import TopBrandsTrustSlider from "../../components/top-brands-trust-slider";
import officeviewimg from '../../assets/images/others/office-view-2.png';
import Tageticoncircle from '../../assets/images/Target-icon.png';
import Cicleround from '../../assets/images/others/app-development.webp';
import TopIt from '../../assets/images/brand-logo/top-it.png';
import AppfuturaLogo from '../../assets/images/brand-logo/appfutura-logo.png';
import GoodFirmlogo from '../../assets/images/brand-logo/goodfirm-logo.png';
import ClutchLogo from '../../assets/images/brand-logo/clutch-logo.png';
import MobileAppLogo from '../../assets/images/brand-logo/mobile-app-logo.png';
import MobileAppDevelopment from '../../assets/images/Awesome-Services/mobile-app-development.png';
import Webapplication from '../../assets/images/Awesome-Services/web-application.png';
import UiUx from '../../assets/images/Awesome-Services/ui-ux.png';
import Cloud from '../../assets/images/Awesome-Services/cloud.png';
import JS from '../../assets/images/Awesome-Services/js.png';
import Webtesting from '../../assets/images/Awesome-Services/web-testing.png';
import Enterprise from '../../assets/images/Awesome-Services/enterprice-intergration.png';
import OursTools from "../../components/our-tools";
import JoinOurTeam from "../../components/join-our-team";
import ServeIndustries from "../../components/industries-serve";
import FormInfo from "../../components/form-info";
import Location from "../../components/location";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon </title> 
            </Helmet>
            <Slider />
            <TopBrandsTrustSlider />
            {/*we are targeticon*/}
            <section
                className="home-about pt60 pb60 r-bg-acf"
                id="about"
                style={{ backgroundColor: "#d1cbc766" }}
            >
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="about-content-home text-center">
                                {/*<h3 class="mb15" style="color: #0067b0;">We the Targeticon</h3>*/}
                                <h2 className="mb15">
                                    Started in 2016, We are the Best &amp; Trusted Application
                                    Development &amp; Mobile Apps development company recognised and
                                    awarded for delivering top-notch projects.
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
                <div className="agency-info-ree mt60">
                    <div className="agency-picture">
                        <picture>
                            <source
                                media="(max-width:991px)"
                                srcSet="images/others/office-view-2-mobile.jpg"
                                type="image/jpg"
                            />
                            <img
                                loading="lazy"
                                srcSet={officeviewimg}
                                className="w-100 img-fluid"
                                alt="Office-team"
                                width={1600}
                                height={535}
                            />
                        </picture>
                    </div>
                    <div className="container">
                        <div className="row key-and-award">
                            <div className="ree-app-st-a flx-end m-order2">
                                <div className="btnctm">
                                    <NavLink
                                        to="/about"
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
                                                <span>200</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Project Delivered</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>60</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Happy Clients</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>50</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Experts Team</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>6</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Success Years</p>
                                        </div>
                                    </div>
                                    <div className="agency-info-anim text-center">
                                        <div className="animated-logo">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    srcSet={Tageticoncircle}
                                                    className="logo-anim img-fluid"
                                                    alt="Targeticon"
                                                    width={101}
                                                    height={102}
                                                />
                                            </picture>
                                            <img
                                                src={Cicleround}
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
                    <div className="row justify-content-center vcenter">
                        <div className="col-md-12">
                            <div className="app-awards owl-carousesl">
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                srcSet={TopIt}
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                srcSet={AppfuturaLogo}
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                srcSet={GoodFirmlogo}
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                srcSet={ClutchLogo}
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <NavLink to="#">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                srcSet={MobileAppLogo}
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </NavLink>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*we are Targeticon end*/}
            {/*start Awesome services*/}
            <section className="r-bg-i pt60 pb60" id="service">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-9">
                            <div className="sec-heading text-center pera-block">
                                <h2>Awesome Services</h2>
                                <p>
                                    At Targeticon, our adept developers implement the latest and
                                    choicest resources and technologies, which aids in enhancing
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay={100}>
                            <NavLink to="/mobile-app-development" className="ree-card reebgb h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Mobile App Development</h4>
                                    <p>With the help of innovative technologies, develop customized
                                        mobile apps.</p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={MobileAppDevelopment}
                                            className="img-fluid"
                                            alt="Mobile App Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay={200}>
                            <NavLink to="/web-app-development" className="ree-card reebgd h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Web Application Development</h4>
                                    <p>We have implemented feature-rich qualities and features for
                                        improved workflow.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={Webapplication}
                                            className="img-fluid"
                                            alt="Web Application Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay={300}>
                            <NavLink to="/ui-ux-design" className="ree-card reebga h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">UI/UX Design</h4>
                                    <p>We use the most resourceful and beneficial tools in creating a
                                        versatile and empowering user.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={UiUx}
                                            className="img-fluid"
                                            alt="UI/UX Design"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay={400}>
                            <NavLink to="/cloud" className="ree-card reebgc h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Cloud</h4>
                                    <p> We facilitate making affordable, reliable, and secure cloud
                                        solutions.</p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={Cloud}
                                            className="img-fluid"
                                            alt="Cloud"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 cardadd" data-aos="fade-up" data-aos-delay={500}>
                            <NavLink to="/js-stack-development" className="ree-card reebgc h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">JS Stack Development</h4>
                                    <p>This versatile and robust development is convenient to use and
                                        enhances progress.</p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={JS}
                                            className="img-fluid"
                                            alt="JS Stack Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 cardadd" data-aos="fade-up" data-aos-delay={600}>
                            <NavLink to="" className="ree-card reebgd h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Website Testing</h4>
                                    <p>Website for problems before you make that web application or
                                        website live.</p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={Webtesting}
                                            className="img-fluid"
                                            alt="Website Testing"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 cardadd" data-aos="fade-up" data-aos-delay={700}>
                            <NavLink to="/enterprise-integration" className="ree-card reebga h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Enterprise Integration</h4>
                                    <p>
                                        Our company builds effective and automated enterprise
                                        integration to leverage productivity.
                                    </p>
                                </div>
                                <div className="creative-img mt30">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={Enterprise}
                                            className="img-fluid"
                                            alt="Enterprise Integration"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="cta-block-wide mt50">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3> Hire World-Class{" "}<span className="ree-text rt40">Developers</span>
                                    </h3>
                                    <NavLink to="/hire-app-developers" target="_blank" className="ree-btn  ree-btn-grdt1 mw-80"
                                    > Hire Now <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*services end*/}

            {/*start technologies tools*/}
            <OursTools />
            {/*end technologies tools*/}

            {/*start Client Testimonial*/}
            {/* <section class="Testimonial">
            <?php //include'include/client-testimonial.php';?>
                </section> */}
            {/*end Client Testimonial */}

            {/*start join our team  */}
            <JoinOurTeam />
            {/*end join our team  */}

            {/*Industries We Serve*/}
            <ServeIndustries />
            {/*Industries We Serve end*/}


            {/*contact info*/}
            <FormInfo />
            {/*contact info end*/}

            {/*start find us location  */}
            <Location />
            {/*end find us location  */}

        </div>
    );
};
export default Home;