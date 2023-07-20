import React from "react";
import hire from '../../assets/images/GIF/hire-app-dev.gif';
import part_time from '../../assets/images/icons/part-time.png';
import full_time from '../../assets/images/icons/full-time.png';
import hourly_time from '../../assets/images/icons/hourly-time.png';
import developer_2 from '../../assets/images/hire-developer-2.webp';
import developer_2_1 from '../../assets/images/hire-developer-2.png';
import badge_a from '../../assets/images/icons/badge-a.webp';
import badge_a1 from '../../assets/images/icons/badge-a.png';
import badge_b from '../../assets/images/icons/badge-b.webp';
import badge_b1 from '../../assets/images/icons/badge-b.png';
import badge_c from '../../assets/images/icons/badge-c.webp';
import badge_c1 from '../../assets/images/icons/badge-c.png';
import resourse from '../../assets/images/icons/resources.webp';
import resourse1 from '../../assets/images/icons/resources.png';
import report from '../../assets/images/icons/report.webp';
import report1 from '../../assets/images/icons/report.png';
import developer from '../../assets/images/icons/developer.webp';
import developer1 from '../../assets/images/icons/developer.png';
import support from '../../assets/images/icons/support.webp';
import support1 from '../../assets/images/icons/support.png';




const HireAppDevelopers = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*start hire app developers  */}
            <section className="page-heading-sec r-bg-hire pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 col-md-6">
                            <div className="hero-content pera-block">
                                <h1 className="" data-aos="fade-in" data-aos-delay={100}>
                                    <span className="ree-tt">Hire app</span> Developers Company
                                </h1>
                                <ul className="ul-list-icon mt30">
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Monthly/Yearly hiring
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Direct Access of resource
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        160 man hours guaranteed
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Daily/Weekly/Monthly reporting via email
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Flexible Office hours depend on timezone
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Daily/Weekly/Monthly code delivery
                                    </li>
                                </ul>
                                <a
                                    href="contact-us.php"
                                    className="ree-btn  ree-btn-grdt1 mt40 mb30 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={100}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="sol-image">
                                <img
                                    src={hire}
                                    alt="web development"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our hiring developer process*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">We Hiring Developers </h2>
                                <p>Our Hiring process follows a proven approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30">
                            <a href="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={part_time}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Part Time Hiring</h4>
                                        <p>
                                            Learn everything you need to become a professional PHP and
                                            in-demand languages developer with practical exercises &amp;
                                            projects.{" "}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30">
                            <a href="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <img
                                                src={full_time}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Full Time Hiring</h4>
                                        <p>
                                            Learn everything you need to become a professional PHP and
                                            in-demand languages developer with practical exercises &amp;
                                            projects.{" "}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 ">
                            <a href="#">
                                <div className="process-content ree-card">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <img
                                                src={hourly_time}
                                                alt="service"
                                                className="icon70 mb20"
                                            />
                                        </div>
                                        <h4>Hourly Hiring</h4>
                                        <p>
                                            Learn everything you need to become a professional PHP and
                                            in-demand languages developer with practical exercises &amp;
                                            projects.{" "}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our hiring developer process end*/}
            {/*start hire iphone developers  */}
            <section className="pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 ">
                            <div className="text-center pt30 pb30">
                                <picture>
                                    <source srcSet={developer_2} type="image/webp" />
                                    <source srcSet={developer_2_1} type="image/png" />
                                    <img
                                        loading="lazy"
                                        src={developer_2_1}
                                        className="img-fluid mb20"
                                        alt="hire-developer"
                                        width={500}
                                        height={415}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 vcenter">
                            <div className="hero-content-x">
                                <h3 className="mb15">Hire iPhone Application Developers</h3>
                                <p>
                                    Whether you are start-up, small/medium or enterprise company, our
                                    hire iPhone app developer is best suitable model for you as it
                                    gives best value for money. With more than 500+ apps developed, we
                                    are one of the best iPhone application development companies.
                                </p>
                                <p>
                                    As our iPhone app developers are proficient in Swift, Objective-C
                                    and React Native, you have multiple choices in technology to
                                    choose with in respect to your product need. Whether you want to
                                    extend your team or want to build your own iPhone team, hire
                                    iPhone app developer model helps you.
                                </p>
                                <p style={{ fontWeight: "bold" }}>
                                    Have an awesome idea? We will provide a quick analysis and free
                                    proposal for it. Don’t worry, it is secure and confidential.
                                </p>
                                <a
                                    href="contact-us.php"
                                    className="ree-btn  ree-btn-grdt1 mt40 mb30 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={100}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end hire iphone developers  */}
            {/*start home about we are targeticon  */}
            <section className="home-about pt60 pb60 r-bg-a">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-4">
                            <div className="about-content-home m-mb60 pera-block">
                                <span className="sub-heading mb15">
                                    Why Choose Developer from Targeticon
                                </span>
                                <h3>
                                    <span className="ree-text rt40">Top-rated</span> Web And Mobile
                                    App Development Company
                                </h3>
                                <p>
                                    Targeticon started its operation in the year 2015. We are
                                    Worldwide, based Web, App and Digital Marketing Company.
                                </p>
                                <div className="company-budges mt40 mb40">
                                    <div className="img-budges">
                                        <picture>
                                            <source
                                                srcSet={badge_a}
                                                type="image/webp"
                                            />
                                            <source srcSet={badge_a1} type="image/png" />
                                            <img
                                                loading="lazy"
                                                src={badge_a1}
                                                className="img-fluid mb20"
                                                alt="Awards badges"
                                                width={110}
                                                height={53}
                                            />
                                        </picture>
                                    </div>
                                    <div className="img-budges">
                                        <picture>
                                            <source
                                                srcSet={badge_b}
                                                type="image/webp"
                                            />
                                            <source srcSet={badge_b1} type="image/png" />
                                            <img
                                                loading="lazy"
                                                src={badge_b1}
                                                className="img-fluid mb20"
                                                alt="Awards badges"
                                                width={110}
                                                height={53}
                                            />
                                        </picture>
                                    </div>
                                    <div className="img-budges">
                                        <picture>
                                            <source
                                                srcSet={badge_c}
                                                type="image/webp"
                                            />
                                            <source srcSet={badge_c1} type="image/png" />
                                            <img
                                                loading="lazy"
                                                src={badge_c1}
                                                className="img-fluid mb20"
                                                alt="Awards badges"
                                                width={110}
                                                height={53}
                                            />
                                        </picture>
                                    </div>
                                </div>
                                <div className="btn-sets">
                                    <a href="about.php" className="ree-btn  ree-btn-grdt2 mr20">
                                        About Us <i className="fas fa-arrow-right fa-btn" />
                                    </a>
                                    <div className="vid-btntitl"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="company-stats">
                                <div className="row">
                                    <div className="col-lg-6 col-12 m-pr7 why-choose-dev-from-targeticon">
                                        <a href="#">
                                            <div
                                                className="stats-box stat-bx-1 process-content ree-card ree-card-new we-are-t-box"
                                                data-aos="fade-up"
                                                data-aos-delay={100}
                                            >
                                                <div className="process-icon">
                                                    <picture>
                                                        <source
                                                            srcSet={resourse}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={resourse1}
                                                            type="image/png"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={resourse1}
                                                            className="img-fluid mb20"
                                                            alt="resources"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </picture>
                                                </div>
                                                <h4>Dedicated Resource On Demand.</h4>
                                                <p className="mt20">
                                                    'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years,
                                                    sometimes by accident.
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div
                                                className="stats-box stat-bx-2 mt20 process-content ree-card ree-card-new we-are-t-box"
                                                data-aos="fade-up"
                                                data-aos-delay={200}
                                            >
                                                <div className="process-icon">
                                                    <picture>
                                                        <source
                                                            srcSet={report}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={report1}
                                                            type="image/png"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={report1}
                                                            className="img-fluid mb20"
                                                            alt="report"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </picture>
                                                </div>
                                                <h4>Daily/Weekly/ Monthly Reporting.</h4>
                                                <p className="mt20">
                                                    'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years,
                                                    sometimes by accident.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-12 m-pl7 why-choose-dev-from-targeticon">
                                        <a href="#">
                                            <div
                                                className="stats-box stat-bx-3 mt100 process-content ree-card ree-card-new we-are-t-box"
                                                data-aos="fade-up"
                                                data-aos-delay={300}
                                            >
                                                <div className="process-icon">
                                                    <picture>
                                                        <source
                                                            srcSet={developer}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={developer1}
                                                            type="image/png"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={developer1}
                                                            className="img-fluid mb20"
                                                            alt="developer"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </picture>
                                                </div>
                                                <h4>Direct Communication With Developers.</h4>
                                                <p className="mt20">
                                                    'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years,
                                                    sometimes by accident.
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div
                                                className="stats-box stat-bx-4 mt20 process-content ree-card ree-card-new we-are-t-box"
                                                data-aos="fade-up"
                                                data-aos-delay={400}
                                            >
                                                <div className="process-icon">
                                                    <picture>
                                                        <source
                                                            srcSet={support}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={support1}
                                                            type="image/png"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={support1}
                                                            className="img-fluid mb20"
                                                            alt="support"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </picture>
                                                </div>
                                                <h4>Emergency Support Without Extra Cost.</h4>
                                                <p className="mt20">
                                                    'lorem ipsum' will uncover many web sites still in their
                                                    infancy. Various versions have evolved over the years,
                                                    sometimes by accident.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*home about we are targeticon end*/}
            {/*start industries  */}
            {/*?php include 'include/industries-serve.php';?*/}
            {/*industries end  */}
            {/*start technologies tools*/}
            {/*?php include'include/our-tools.php';?*/}
            {/*end technologies tools*/}
            {/*start Client Testimonial*/}
            {/*?php include'include/client-testimonial.php';?*/}
            {/*end Client Testimonial */}
            {/*start header  */}
            {/*?php include 'include/footer.php';?*/}
            {/*header end  */}
        </div>
    );
};
export default HireAppDevelopers;
