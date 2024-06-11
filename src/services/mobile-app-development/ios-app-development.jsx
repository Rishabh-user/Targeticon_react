import React from "react";
import Tools from '../../components/our-tools';
import { NavLink } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ioscourse from '../../assets/images/ios-course.png';
import portfolio1 from '../../assets/images/portfolio/portfolio-1.jpg';
import portfolio2 from '../../assets/images/portfolio/portfolio-2.jpg';
import portfolio3 from '../../assets/images/portfolio/portfolio-3.jpg';
import ios from '../../assets/images/GIF/ios.gif';
import discovery from '../../assets/images/icons/discovery.png';
import uiuxdesign from '../../assets/images/icons/ui-ux-design-icon.png';
import architecture from '../../assets/images/icons/architecture.png';
import release from '../../assets/images/icons/first-release.png';
import qualityassurance from '../../assets/images/icons/Quality-assurance.png';
import development from '../../assets/images/icons/development6.png';
import android from '../../assets/images/android.png';
import postlaunch from '../../assets/images/icons/post-launch.png';


const IosAppDevelopment = () => {
    const options = {
        items: 3,
        margin: 20,
        dot: true,
        loop: true,
        nav: false,
    };

    return (
        <div>
            <section className="page-heading-sec r-bg-hire pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings mt40 mb30">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">iOS</span>App Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Targeticon is a gifted iPhone app development company which
                                    recognised for building a highly performance and adaptable iPhone
                                    apps.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Native iPhone App Development For any enterprise category
                                    application, you wish a project manager, technical-designer,
                                    graphic designer , Programmer, QA and tester. These 6 key skills
                                    are essential if you are doing not need to compromise on the
                                    performance, security , quantity ability of the app. Most of the
                                    application developing companies trust the programmers to fill in
                                    these areas that are a special discipline in themselves.
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
                        <div className="col-lg-6">
                            <div className="sol-img" data-aos="fade-in" data-aos-delay={200}>
                                <img
                                    src={ioscourse}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="700px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Services We Offer*/}
            <section className="r-bg-a pt60 pb60 iPhone-range">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-8 vcenter">
                            <div className="heading-hz-btn">
                                <h2>
                                    The<span className="ree-text rt40 ml10 mr10">Range</span>of iPhone
                                    Application Development
                                </h2>
                                <h6 className="mt10">Services We Offer</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-4 vcenter">
                            <div className="link-sol-header">
                                <NavLink to="https://separateweb.com/" className="ree-card-link-two">
                                    View All <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row mt60">
                        <div className="col-lg-12 new">
                            <div className="full-work-block  owl-carousel">
                                <OwlCarousel {...options} className="full-work-block ">
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                <img
                                                    src={portfolio1}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#"> Custom iPhone Apps</NavLink>{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone/iPad Games</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio3}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">Enterprise iPhone Apps </NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone App UX/UI Design</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone Widget/Extension Development</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone Consultation</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone App Support Optimization</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="fwb-main-x fwb-a h-100">
                                        <div className="work-thumbnails">
                                            <NavLink to="#">
                                                {" "}
                                                <img
                                                    src={portfolio2}
                                                    alt="portfolio Targeticon"
                                                    className="img-fluid"
                                                />{" "}
                                            </NavLink>
                                        </div>
                                        <div className="work-details">
                                            <h4>
                                                <NavLink to="#">iPhone App Integration</NavLink>
                                            </h4>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Services We Offer*/}
            {/*start join our team*/}
            <section className=" pt60 pb60" style={{ backgroundColor: "#f8525e" }}>
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <img
                                    src={ios}
                                    alt="hybird-app"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15 hybird-iphone-heading">
                                    Hybrid iPhone App Development{" "}
                                </h2>
                                <p className="hybird-iphone-pragraf">
                                    Similarly, the cross-platforms need specific programming
                                    background. We've got dedicated programmers in every of the stream
                                    seeantial for app building and disciplines to make sure an
                                    enterprise category development of your application
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end join our team*/}
            {/*-our iPhone App Development Process*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">iPhone App Development Process</h2>
                                <p>
                                    The iPhone Application Development Process which Results in
                                    Engaging Apps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={discovery}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Discovery</h4>
                                        <p>
                                            We have a being confident on our abilities to show ideas into
                                            a fascinating reality with fine-tuned and appreciated
                                            applications for iPhones and iPad.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <img
                                                src={uiuxdesign}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>UX/UI Design</h4>
                                        <p>
                                            We produce merely stunning user interfaces that are advised by
                                            current trends yet as unaltered style principles. We design,
                                            example flows and concepts with users, iterating towards an
                                            agreeable &amp; effective user expertise.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={architecture}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Architecture</h4>
                                        <p>
                                            Our team of estemmed iphone app along facilitate build winning
                                            iOS apps for businesses, brands or startups to life with
                                            best-in-class technologies and efficient methodologies.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={release}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>First Release</h4>
                                        <p>
                                            Our professional team of app developers are paasionate with
                                            mixing up the creative thinking and innovation by making use
                                            of the advanced tools to deliver most awaited apps that may be
                                            supplied to any or all your wants.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={qualityassurance}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Quality Assurance</h4>
                                        <p>
                                            Our extremely dedicated and qualified team members of iPhone
                                            app developers &amp; iPad app developers are turned-out to
                                            making an expertise.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">06</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={development}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Development</h4>
                                        <p>
                                            Our principal is to produce customer-centric solutions that
                                            are accepted happily and comfortably by all. We tend to boast
                                            on being Australia’s one amongst the moral, innovative and
                                            reliable iOS app development firms.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">07</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={android}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>App Submission On Appstore</h4>
                                        <p>
                                            We are honoured in delivering quality iOS mobile application
                                            development service, that bring your ideas to life. Place your
                                            dream infront of us and that we can switch it into reality.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">08</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={postlaunch}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Post Launch</h4>
                                        <p>
                                            With the cutting edge application solution, several companies
                                            have pioneered groundbreaking businesses, got new revenue
                                            streams and developed remarkable, healthy relationships with
                                            customers.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*start client testimonial  */}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}
        </div>
    );
};
export default IosAppDevelopment;