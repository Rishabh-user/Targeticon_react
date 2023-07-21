import React from "react";
import { NavLink } from "react-router-dom";
import webgif from '../../assets/images/web-desining.gif';
import overview from '../../assets/images/overview.png';
import whyus from '../../assets/images/why-us.png';
import byfunction from '../../assets/images/by-function.png';
import content from '../../assets/images/content-based.png';
import reponsive from '../../assets/images/by-resposive.png';
import girlbro from '../../assets/images/girl-bro.png';

const WebsiteDesigning = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Website </span> Designing{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    Full-cycle Website Designing services employing industry's best
                                    practices for custom framework development for robust and scalable
                                    applications using the full spectrum of Microsoft technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    We live in a society where information is available at our
                                    fingertips. The user mainly surfs over the internet to get more
                                    information about a particular product or about a company.
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
                                    src={webgif}
                                    alt="web-desining"
                                    className="img-fluid"
                                    width={600}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Overview*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter flex-row-reverse">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p
                                    className="mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                    style={{ color: "#0067b0" }}
                                >
                                    Website Designing requirements analysis and specification{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    We live in a society where information is available at our
                                    fingertips. The user mainly surfs over the internet to get more
                                    information about a particular product or about a company. Every
                                    company has its website that gives clear information about their
                                    company.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={600}>
                                    Having a good website will attract people and will be appreciated,
                                    but having a great website will help to get more business. It will
                                    also grow your business by reaching to people across the world. No
                                    matter where your head office is situated, the website can be
                                    accessed by millions of people across the globe.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={overview}
                                        className="img-fluid"
                                        alt="Overview"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Overview*/}
            {/*start Why Us?*/}
            <section className="r-bg-cwe pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15" style={{ color: "#0067b0" }}>
                                    Why Us?
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Targeticon is a software consulting company that offers web
                                    development services to offshore clients and other local clients.
                                    The web developers at Targeticon will understand your business
                                    category and develops the layout of the website which includes all
                                    the requirements of the clients.
                                </p>
                                <ul className="ul-list-icon mt30">
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        The web design team at Target Icon creates a unique website with
                                        fantastic design and effects.
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        They design websites from static design to dynamic web design.
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={250}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        The designers have also redesigned the website by studying
                                        intensely on the previous design and develop an entirely new
                                        website.
                                    </li>
                                </ul>
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
            {/*end Why Us?*/}
            {/*Different Types of Websites Designs*/}
            <div className="pt60 pb60 r-bg-a">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Different Types of Websites Designs</h2>
                                <p
                                    className="port-tags mt20 h-light"
                                    data-aos="fade-up"
                                    style={{ color: "#0067b0" }}
                                >
                                    Different types of websites are classified depending upon their
                                    functionality, design, and content. The three types are
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-items mt60">
                        {/* portfolio row 1 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main text-center">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={byfunction}
                                            className="img-fluid"
                                            alt="Different Types of Websites Designs"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">By Function</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        A website can be classified into several kinds by their function
                                        they perform. Target Icon will help its client to create a
                                        website based on function. There are five different types of
                                        functionality based website that can be developed by the
                                        developers on the user requirement at Target Icon. Listed below
                                        are the five different types{" "}
                                    </p>
                                    <ul className="ul-list-icon mt30">
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={100}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Brochure functionality based website
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={150}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            E-commerce functionality based website
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Portal functionality based website
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={250}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Wiki functionality based website
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={300}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Social media feature based website.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main text-center">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={content}
                                            className="img-fluid"
                                            alt="Content-based website design"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Content-based website design
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={150}
                                    >
                                        The next type is a content design based website. If you ask the
                                        developers at Target Icon about a particular website, they will
                                        first look at the website and see how dynamic the content is.
                                        They will further confirm the content accessibility on all
                                        devices and accordingly respond to your queries. There are two
                                        types of content based websites:{" "}
                                    </p>
                                    <ul className="ul-list-icon mt30">
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Static or fixed content based websites
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Dynamic content based website
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 1 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Website design based on Responsiveness
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        The design based is also called as the responsive based website.
                                        These are the most popular one in recent times. Most companies
                                        prefer to develop a responsive website for their business. These
                                        websites can be used for all devices and accessed easily on all
                                        devices. The design based website is further divided into three
                                        types typically{" "}
                                    </p>
                                    <ul className="ul-list-icon mt30">
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={150}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Static based or fluid based website design
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Fluid or liquid-based website design
                                        </li>
                                        <li
                                            className="mt20 h-light"
                                            data-aos="fade-up"
                                            data-aos-delay={250}
                                        >
                                            <i className="fas fa-arrow-right" />
                                            Responsive based website design
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main text-center">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={reponsive}
                                            className="img-fluid"
                                            alt="Website design based on Responsiveness"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Different Types of Websites Designs end*/}
            {/*start Conclusion*/}
            <section className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Target Icon is one of the most trusted companies that provide
                                    fantastic web development services to its clients. The website is
                                    an integral part of any business in today’s world and developing
                                    an excellent dynamic website is a must.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    At Target Icon developers develop websites that load quickly,
                                    convey your message. So, if you're looking for a new web designing
                                    company for making your new website, you can contact us and we
                                    will make sure you're satisfied.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
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
export default WebsiteDesigning;