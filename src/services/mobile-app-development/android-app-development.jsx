import React from "react";
import Tools from "../../components/our-tools";
import { NavLink } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import androidgif from '../../assets/images/GIF/Android.gif';
import portfolio1 from '../../assets/images/portfolio/portfolio-1.jpg';
import portfolio2 from '../../assets/images/portfolio/portfolio-2.jpg';
import portfolio3 from '../../assets/images/portfolio/portfolio-3.jpg';
import userinterface from '../../assets/images/icons/user-interface.png';
import mobility from '../../assets/images/icons/mobility.png';
import creativity from '../../assets/images/icons/app-cretivity.png';
import price from '../../assets/images/icons/reasonable-price.png';
import compatibility from '../../assets/images/icons/compatibility.png';
import girlbro from '../../assets/images/girl-bro.png';


const AndroidAppDevelopment = () => {
    const options = {
        items: 3,
        margin: 20,
        dot: true,
        loop: true,
        nav: false,
    };

    return (
        <div>
            <section className="sec-pad r-bg-xyz Android-App-Dev">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45">Android</span> App Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    In the high-end technology era, the use of mobile phones,
                                    particularly the smartphones has taken the telecommunication and
                                    electronic gadgets to a certain edge. With the advent of Android
                                    Operating System for the smartphones, it made the operations
                                    extraordinarily flexible and convenient to access all the
                                    installed applications on the Android platform.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Thus the technology for developing Android Apps has been
                                    introduced along with the development and release of Android
                                    Operating System. The Android Apps are compatible to run only on
                                    Android Operating System. In recent days, the Android applications
                                    have acquired a considerable share of the overall mobile app
                                    market in the developing countries.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img " data-aos="fade-in">
                                <img
                                    src={androidgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Services We Offer*/}
            <section className="r-bg-c pt60 pb60 iPhone-range">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 col-sm-8 vcenter">
                            <div className="heading-hz-btn">
                                <h2>The Range of iPhone Application Development</h2>
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
                                <OwlCarousel options={options} className="full-work-block ">
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
            {/*-our Benefits of Developing Android Application*/}
            <section className="r-bg-d  pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Benefits of Developing Android Application</h2>
                                <p>
                                    The Android application development has given a shape to the age
                                    of smartphone applications which has simplified the regular
                                    activities of the users. Thus the benefits of an Android app are
                                    listed below:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={userinterface}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Customized User Interface</h4>
                                        <p>
                                            The designers and developers of the application can build the
                                            user interface according to the requirement of the client and
                                            can also add few features.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <img
                                                src={mobility}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Mobility of Enterprise</h4>
                                        <p>
                                            Enterprise or organization can be integrated into a single
                                            Android app, where all the different functions can be
                                            performed with flexibility and ease.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={creativity}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Application of Creativity</h4>
                                        <p>
                                            The application developers can utilize their complete
                                            creativity skills, according to the permissions of Google and
                                            come up with a useful form.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={price}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Reasonable Price</h4>
                                        <p>
                                            The Android application development comes at very reasonable
                                            pricing with Target Icon apart from being customized or highly
                                            technologized.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={compatibility}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Compatibility</h4>
                                        <p>
                                            The Android application can be used on any devices that are
                                            running Android Operating System without any alteration in the
                                            performance of the application.{" "}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our Benefits of Developing Android Application end*/}
            {/*Start Final Reviews*/}
            <section className="page-heading-sec r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div
                                className="sol-img m-mt30 mb20"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={girlbro}
                                        className="img-fluid mb20 mt20"
                                        alt="reviews"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45">Final Reviews</span>
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Target Icon being one of the trusted companies in developing
                                    customized Android application adds its useful contribution to the
                                    huge share of the Android application market. The utilization of
                                    an Android app in several regular activities like booking railway
                                    tickets, movie tickets, buying groceries, payment of bills,
                                    transferring money, etc. has made the life of all the people
                                    hassle-free
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    It acts as a boon to the social development in the developing
                                    countries and gives shape to the technology edge with its
                                    upgradation. The creativity of all the Android application
                                    developers defines the existence of the smartphone era because the
                                    Android-based smartphones are of no use without the applications.
                                </p>
                            </div>
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
export default AndroidAppDevelopment;