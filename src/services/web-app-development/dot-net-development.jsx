import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import dotnetgif from '../../assets/images/GIF/dot-net.gif';
import dotnetservice from '../../assets/images/GIF/dot-net-service.gif';
import dotnetasp from '../../assets/images/icons/asp-dot-net-icon.png';
import expertise from '../../assets/images/asp-dot-net-Expertise.png';
import advancewebapp from '../../assets/images/icons/Advanced-Web-Application.png';
import enterpriceapp from '../../assets/images/icons/Enterprise-Applications.png';
//import pwa from '../../assets/images/icons/pwa.png';

const DotNetDevelopment = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-cd pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">ASP.NET</span>Development
                                    Services
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    Full-cycle ASP.NET development services employing industry's best
                                    practices for custom framework development for robust and scalable
                                    applications using the full spectrum of Microsoft technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Developed by Microsoft, ASP.Net is a web development platform. The
                                    first version of the platform was developed in the year 2002.
                                    Since then, it has been constantly updated and fixed to appeal to
                                    all forms of developers out there.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={250}>
                                    The platform has a variety of uses ranging from web development to
                                    mobile platform development services. These services can be used
                                    for a variety of client applications.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={250}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30" data-aos="fade-in">
                                <img
                                    src={dotnetgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="800px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start overview*/}
            <section className="r-bg-xx pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <img
                                    src={dotnetservice}
                                    alt="hybird-app"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15 pt30">ASP.NET Development Services</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={50}>
                                    Developed by Microsoft, ASP.Net is a web development platform.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={80}>
                                    {" "}
                                    Due to its massive advantages in real-world applications, we at
                                    TargetIcon use the platform to provide renowned ground-breaking
                                    services in the web development arena. Due to our expertise in the
                                    ASP.Net platform, we help critical business at developing
                                    applications which make use of efficient project management and
                                    transparent work methodologies
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Our integral team of programmers provide an improvised user
                                    experience as demanded and desired by our clients. We ensure that
                                    our team analyzes, defines, develops, tests and only after
                                    conducting such operations do they deploy the application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our How PWA Works*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">How ASP.NET Works</h2>
                                <p>
                                    This rich experience of PWAs is fueled by three in number columns:
                                    the administration laborer, application shell, and the web
                                    application show.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={dotnetasp}
                                                    className="img-fluid mb20"
                                                    alt="asp-dot-net-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Custom ASP.Net Development</h4>
                                        <p>
                                            ASP.Net was designed in a manner in which it could serve up
                                            custom content to end users. In order to exploit this
                                            advantage, our team of ASP.NET programmers employ
                                            functionalities which fit the specific needs of our clients
                                            and the end-users. Apart from a plethora of technical
                                            advantages, the platform contains aspects which directly
                                            affect the end-user. Another advantage of the ASP.Net platform
                                            is that it is constantly updated during off-peak hours. This
                                            enables people to have an application which is powered by the
                                            latest version of the platform.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={dotnetasp}
                                                    className="img-fluid mb20"
                                                    alt="asp-dot-net-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>ASP.Net Integration</h4>
                                        <p>
                                            The platform various highly advantageous integration services.
                                            Our highly skilled programmers provide solutions to clients
                                            which are integrated with Microsoft’s platform. Integrating
                                            existing with ASP.Net allows our programmers to deliver
                                            products and services which are robust and highly progressive,
                                            not to mention quite secure and functional. This allows our
                                            clients to maximize their businesses to have an increase in
                                            their performance while maintaining their costs.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={dotnetasp}
                                                    className="img-fluid mb20"
                                                    alt="asp-dot-net-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>3rd Party ASP.Net Customization</h4>
                                        <p>
                                            Third party customization allows for a range of controls with
                                            unique features. To make sure this is a feature which is
                                            completely utilized our coders efficiently customize third
                                            party ASP.NET solutions which fit our clients’ businesses
                                            perfectly. A few examples of services in which we offer
                                            ASP.Net customization are CMS-enabled solutions,
                                            customizable/configurable solutions etc. These solutions are
                                            robust which enhance the enterprise’s functioning.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={dotnetasp}
                                                    className="img-fluid mb20"
                                                    alt="asp-dot-net-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Migration to ASP.Net</h4>
                                        <p>
                                            Owing to the new versions of ASP.Net, it becomes highly
                                            necessary for migration activities. Migration activities are
                                            an essential part of web development as they help in enhancing
                                            the end-user experience. However, migrating is a quite tedious
                                            job as it contains several tweakings such as recompilation of
                                            existing web pages, choosing the right web application, right
                                            wizard for execution etc. This is where we come into the scene
                                            again. Our team of .Net programmers adopt strategies which
                                            deliver the most adaptive and quick systems for migration.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our How PWA Works end*/}
            {/*start Our ASP.NET Expertise*/}
            <section className="r-bg-xyz pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Our ASP.NET Expertise</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={50}>
                                    We at TargetIcon provide one of the best services when it comes to
                                    ASP.Net. This is due to our team of programmers who have invested
                                    their time in training themselves and resources as well as in
                                    developing highly-efficient practices using Microsoft’s .Net
                                    architecture. It is owing to these practices that we enable the
                                    development of rapid, error-free applications.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Our expertise and experience in the field of ASP.Net allows us to
                                    develop and deliver enterprise products to our customer. These
                                    products are successfully implemented with ASP.Net which are
                                    specialized to be customized as per the needs of the customers
                                    according to the business and the preferred technology.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={expertise}
                                        className="img-fluid mb20"
                                        alt="asp-dot-net-Expertise"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Our ASP.NET Expertisen*/}
            {/*start Qualities of Our Advanced and Enterprise*/}
            <section className="r-bg-xx pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-12">
                            <div className="sec-heading text-center">
                                <h2 className="mb15">Qualities of Our Advanced and Enterprise</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={advancewebapp}
                                            className="img-fluid mb20"
                                            alt="Advanced-Web-Application"
                                            width={60}
                                            height={60}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Advanced Web Application</h3>
                                    <p>
                                        Developing advanced web applications require successful design
                                        and correct implementation ASP.Net. Our programmers make sure of
                                        this and it is due to this that our applications have edge over
                                        applications developed by other organizations. Apart from this,
                                        our applications are coded to be dynamic and rich in ASP.Net
                                        features and functionalities. These functionalities and features
                                        allow our applications to be efficient which maximize our
                                        client’s businesses by a huge margin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={enterpriceapp}
                                            className="img-fluid mb20"
                                            alt="Enterprise-Applications"
                                            width={60}
                                            height={60}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Enterprise Applications</h3>
                                    <p>
                                        One of our top suits is developing enterprise applications by
                                        making use of ASP.Net. We are highly adept in developing
                                        collaborative enterprise web applications using the .Net
                                        technology. Due to this, our signature applications are
                                        flexible, reliable, reusable and have low-maintenance
                                        requirements.
                                    </p>
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
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}
        </div>
    );
};
export default DotNetDevelopment;