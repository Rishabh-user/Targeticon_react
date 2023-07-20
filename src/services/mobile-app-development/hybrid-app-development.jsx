import React from "react";
import { NavLink } from "react-router-dom";
import hybridgif from '../../assets/images/GIF/HybridApp-Development.gif';
import overview from '../../assets/images/overview.png';
import userinterface from '../../assets/images/icons/user-interfaces2.png';
import developmentcost from '../../assets/images/icons/development-cost.png';
import offlinesupport from '../../assets/images/icons/offline-support.png';
import integration from '../../assets/images/icons/intergration-icon.png';
import girlbro from '../../assets/images/girl-bro.png';

const HybridAppDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-g pt60 pb60 hybird-app-dev">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Hybrid</span>App Development
                                </h1>
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
                            <div
                                className="sol-img m-mt30"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <img
                                    src={hybridgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width={550}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start overview*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={overview}
                                        className="img-fluid mb20"
                                        alt="overview"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p>
                                    Before the introduction of Android application development, Hybrid
                                    mobile apps were mainly deployed in all the mobile phones. Hybrid
                                    mobile apps are any mobile application that is built with a
                                    combination of web technologies like HTML, CSS, and JavaScript and
                                    are hosted inside a native application that uses a mobile
                                    platform’s Web View. Thus the Hybrid app is covered by a thin
                                    native container that provides access to native platform features.
                                    Target Icon is such an organization who is well-trusted in the
                                    mobile application domain of the IT industry for developing Hybrid
                                    mobile apps.
                                </p>
                                <p>
                                    These Hybrid mobile apps could be found in the apps store for
                                    installing them in the mobile devices. React Native is another
                                    technology used for the development of Hybrid mobile app in Target
                                    Icon. The company ensures the implementation of the latest
                                    technologies for accomplishing the latest trends of the market.
                                    The hybrid apps are compatible with various mobile platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our iPhone App Development Process*/}
            <section className="r-bg-d  pt60 pb60 benefit-hybrid-mob">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">
                                    Benefits in Developing Hybrid Mobile Applications
                                </h2>
                                <p>
                                    Apart from the interest of compatibility with various mobile
                                    platforms, it has a few other advantages which are as listed
                                    below:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={userinterface}
                                                    className="img-fluid mb20"
                                                    alt="interfaces"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Improved User Interface</h4>
                                        <p>
                                            All the mobile users expect the applications to appear in a
                                            fast and glitch-free manner that can be handled conveniently
                                            like it should be instantly responsive in different devices.
                                            Hybrid mobile apps provide a responsive screen with the
                                            capability to adjust to different device screens
                                            configurations. It also solves the problem of fluctuation in
                                            data streaming. The hybrid mobile app UI is lightweight which
                                            helps in loading any content and high definition graphics.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={developmentcost}
                                                    className="img-fluid mb20"
                                                    alt="development-cost"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Reduced Development Cost</h4>
                                        <p>
                                            Developing a hybrid mobile application is relatively cheaper
                                            than any other web or native mobile application and also takes
                                            lesser time. As it is cost-efficient, so it plays a vital role
                                            in helping the enterprise to get their product in the market
                                            at a very less time. Thus to speed up the development process
                                            of hybrid mobile apps, the developers use various development
                                            frameworks like Xamarin, PhoneGap, etc.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={offlinesupport}
                                                    className="img-fluid mb20"
                                                    alt="offline-support"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Offline Support</h4>
                                        <p>
                                            A hybrid mobile app provides the benefit of accessing mobile
                                            apps data at the time of poor or no internet connection. These
                                            apps store the API of the mobile to save the offline data that
                                            helps in loading the application quickly. Most of the users
                                            tend to reduce the mobile data consumption but wants to have
                                            uninterrupted access to the app’s data which is possible with
                                            the hybrid mobile apps.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={integration}
                                                    className="img-fluid mb20"
                                                    alt="intergration-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Ease of Integration</h4>
                                        <p>
                                            The hybrid apps leverage the internal programming system of
                                            the mobile through an overlay that helps in the
                                            synchronization with other compatible apps. It reduces the
                                            problem of integration and works well with the device’s native
                                            applications like camera, GPS, etc.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our iPhone App Development Process end*/}
            {/*start Conclusion*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p>
                                    Hybrid mobile apps are highly flexible, platform independent,
                                    convenient to use and compatible with any mobile device. The
                                    benefit of easy integration and offline support makes the apps
                                    ready to market in this technologically competitive era.
                                </p>
                                <p>
                                    TargetIcon provides top class hybrid app development services that
                                    are not only cost-oriented but are also quality driven, that too
                                    in much lesser time.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={girlbro}
                                        className="img-fluid mb20"
                                        alt="interfaces"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Conclusion*/}
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            {/*?php include 'include/our-tools.php';?*/}
            {/*end our tools  */}
            {/*start footer  */}
            {/*?php include 'include/footer.php';?*/}
            {/*end footer  */}
        </div>
    );
};
export default HybridAppDevelopment;