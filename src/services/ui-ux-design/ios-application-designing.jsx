import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import iosphone from '../../assets/images/ios-phone.png';
import iphone from '../../assets/images/iphone-14-13.png';
import investigation from '../../assets/images/icons/investigation-anlysis.png';
import designing from '../../assets/images/icons/designing-icon.png';
import development from '../../assets/images/icons/developmenticon1.png';
import testing from '../../assets/images/icons/intergration-testing.png';
import launching from '../../assets/images/icons/launching-icon.png';
import whyus from '../../assets/images/why-us.png';

const IosApplicationDesigning = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-cssdd pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={80}>
                                    <span className="ree-text rt45 mr10">iOS</span> Application Design
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Full-cycle iOS Application Design industry's best practices for
                                    custom framework development for robust and scalable applications
                                    using the full spectrum of Microsoft technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    {" "}
                                    The world are the iOS and the Android. Although intense
                                    competition from other smartphone companies iPhone remains the
                                    first choice among people across the globe.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    A team of Apple master coders develops the iOS app using the
                                    latest Framework and are fascinating in the area of development.
                                    The goal of the Target Icon is to provide the best services with
                                    high quality and cost-effective to its customer.
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
                            <div
                                className="sol-img m-mt30 ios-designing-img"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={iosphone}
                                        className="img-fluid"
                                        alt="ios-app"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start overview*/}
            <section className="r-bg-abc pt60 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={iphone}
                                        className="img-fluid"
                                        alt="iphones"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15 mt30">Overview</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Developed by iOS, ios Application Designing platform.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    The two most popular mobile platforms across the world are the iOS
                                    and the Android. Although intense competition from other
                                    smartphone companies iPhone remains the first choice among people
                                    across the globe. Android uses Material Design whereas the iOS use
                                    Human Interface Design. There are two designers, namely the app
                                    designers and website designers.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    The app designers when designing an app need to select between iOS
                                    and Android before starting the initial process of designing. How
                                    good it feels for the designer when they design an iOS app? What
                                    if the app you have developed is appreciated and ranks high
                                    against all countless competitors? The designer will be at the top
                                    of his career.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    A technology consulting company Target Icon provides its customer
                                    with excellent designs and other services regarding technology.
                                    The iOS application designers are well qualified with high skills
                                    to design an iOS app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our Application Development Life Cycle*/}
            <section className="r-bg-xx pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Application Development Life Cycle</h2>
                                <p>
                                    As an iOS developer, we know the life cycle of an application and
                                    this application lifecycle can help you to understand the overall
                                    performance of an app. So, the Lifecycle of an iOS app is as
                                    follows.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={investigation}
                                                    className="img-fluid mb20"
                                                    alt="investigation-anlysis"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Investigation and Analysis</h4>
                                        <p>
                                            The most important this for developing an iOS app is to make a
                                            concrete base for developers to work on. So, investigating and
                                            analyzing the requirements of our clients are the first things
                                            we do for making the process easier for our team members.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={designing}
                                                    className="img-fluid mb20"
                                                    alt="designing-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Designing</h4>
                                        <p>
                                            UIApplication Delegate is a protocol that the app has to
                                            implement. This will notify the user events such as app
                                            launch, the app goes into the background or foreground mode,
                                            the app is terminated and other events. The initial
                                            application setup takes place in this process.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={development}
                                                    className="img-fluid mb20"
                                                    alt="developmenticon1"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Development</h4>
                                        <p>
                                            This is where the real fun begins. Here all the codes
                                            regarding the applications are written and are formulated in
                                            the fastest way possible by our talented team members.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={testing}
                                                    className="img-fluid mb20"
                                                    alt="intergration-testing"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Integration and Testing</h4>
                                        <p>
                                            After the development is complete, experts check and test the
                                            applications for bugs or errors for the initial eradication of
                                            any problems from the get-go. Although it sounds simple, there
                                            are many different types of tests that an application has to
                                            go through and pass to be able to launch.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={launching}
                                                    className="img-fluid mb20"
                                                    alt="launching-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Launching</h4>
                                        <p>
                                            After everything is completed, and the app has cleared all the
                                            pre-requisites then the developers and the marketing team
                                            inform the client, and then they can eventually launch their
                                            brand new application
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-Application Development Life Cycle end*/}
            {/*start Why Us?*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Why Us?</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Targeticon provides one of the most effective offshore services.
                                    Over the years we have been continually delivering the best
                                    digital products to our clients. Most of the people across the
                                    world use iOS smartphones and its necessary to give the best iOS
                                    app to its customer.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    {" "}
                                    In Today's world, everyone is dependent on an app which makes life
                                    more relaxed and hassle-free. More than 20% of the user around the
                                    globe uses iOS smartphone, and at Target Icon you will get the
                                    best design app created by the best development team that will
                                    meet your requirements.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={whyus}
                                        className="img-fluid"
                                        alt="iphones"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}
        </div>
    );
};
export default IosApplicationDesigning;