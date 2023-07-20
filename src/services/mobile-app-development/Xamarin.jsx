import React from "react";
import { NavLink } from "react-router-dom";
import xamarin1 from '../../assets/images/Xamarin.png';
import xamarin2 from '../../assets/images/xamarin2.png';
import xamarinlogo from '../../assets/images/icons/xamarin-logo.png';
import girlbro from '../../assets/images/girl-bro.png';


const Xamarin = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-g pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Xamarin </span>Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    {" "}
                                    The efficient team of coders of Target Icon uses Xamarin tool in
                                    developing the mobile apps. Xamarin is originally based on C#
                                    coding. Along with the release of Xamarin 2.0, it also included
                                    two main components, Xamarin Studio.
                                </p>
                                <a
                                    href="contact-us.php"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="sol-img m-mt30"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <picture>
                                    <img
                                        fetchpriority="high"
                                        src={xamarin1}
                                        className="img-fluid"
                                        alt="xamarin"
                                        width={500}
                                        height={512}
                                    />
                                </picture>
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
                                        src={xamarin2}
                                        className="img-fluid"
                                        alt="hybird-app"
                                        width={732}
                                        height={377}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p>
                                    Xamarin is a Microsoft owned California based Software Company
                                    which was founded in 2011 by the engineers who created Mono for
                                    Android that are cross-platform implementations of the Common
                                    Language Specifications and Common Language Infrastructure.
                                    Developers use Xamarin tools to write native, Android, iOS and
                                    Windows apps code with share code and native user interfaces
                                    across multiple platforms..
                                </p>
                                <p>
                                    {" "}
                                    which is the re-branding of the open-source IDE MonoDevelop and
                                    integration with Visual Studio, i.e., Microsoft’s IDE for the.Net
                                    framework that allows using Visual Studio for creating
                                    applications for Android and iOS, and as well as for Windows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our Integrated Development Environment*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Integrated Development Environment</h2>
                                <p>
                                    Apart from the interest of compatibility with various device
                                    platforms, it has a few other advantages which are as listed
                                    below:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <a href="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={xamarinlogo}
                                                    className="img-fluid mb20"
                                                    alt="Xamarin"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Xamarin for Visual Studio</h4>
                                        <p>
                                            Xamarin supplies add-ins to the Microsoft Visual Studio that
                                            allows developers to build Android, iOS and Windows app within
                                            the IDE utilizing Intellisense and Code Completion. It is the
                                            only IDE that is compatible with native Android, iOS and
                                            Windows app development within Microsoft Visual Studio. It has
                                            extensions within MS Visual Studio that provide full support
                                            for the building, debugging and deploying of the apps on a
                                            simulator or a device.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <a href="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={xamarinlogo}
                                                    className="img-fluid mb20"
                                                    alt="Xamarin"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Xamarin Studio </h4>
                                        <p>
                                            For the mobile app development, it is a standalone IDE on
                                            Windows and MAC OS. It is a part of Xamarin 2.0 version that
                                            is based on the open-source project MonoDevelop. Apart from
                                            the function of debugging, it includes code completion in C#
                                            that is an Android UI builder for creating user interfaces
                                            without XML, and integration with Xcode interface builder for
                                            iOS app design.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <a href="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={xamarinlogo}
                                                    className="img-fluid mb20"
                                                    alt="Xamarin"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Xamarin.Mac</h4>
                                        <p>
                                            It was created for use as a tool for the application
                                            development with Apple technology by using the C# programming
                                            language for Mac OS, i.e. Xamarin Mac. It provides the
                                            facility of 90% of code reuse to the developers across
                                            Android, Windows, and iOS. It provides the developers with the
                                            ability to build complete native Cocoa apps for Mac OS.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mt30 mb15">
                            <a href="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={xamarinlogo}
                                                    className="img-fluid mb20"
                                                    alt="Xamarin"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Xamarin.Forms</h4>
                                        <p>
                                            The Xamarin forms make the development easier for the
                                            developers by providing the facility for in-built forms that
                                            can be used while building the interface. The entire new 3.0
                                            version of Xamarin forms has been about reducing the friction
                                            in positioning the Android bottom tabs that are created while
                                            building the forms, checking the spellings of the content and
                                            capitalization and prediction on text controls. There have
                                            been few improvements like setting ImeOptions, coloring
                                            various elements bars and switches, etc.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our iPhone App Development Process end*/}
            {/*start overview*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p>
                                    The Microsoft owned product Xamarin is the most convenient and
                                    cross-platform oriented framework that helps the Android, iOS and
                                    other mobile application developers to create the code structure
                                    of the interfaces commendable rate.{" "}
                                </p>
                                <p>
                                    {" "}
                                    It is the most convenient tool for developing mobile applications
                                    at ease by reducing both time and cost. It is not only beneficial
                                    for the development team but also for the company who provides the
                                    facility to the application coding team for its implementation and
                                    deployment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={girlbro}
                                        className="img-fluid"
                                        alt="Conclusion"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
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
export default Xamarin;