import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../components/our-tools';
import fgil from '../assets/images/FGLI-screen-short.png';

const FutureGeneralLifeInsurance = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-g pt60 pb60 portfolio-details-banner">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-12">
                            <div className="page-headings pb60 pt60 career-detail-head text-center">
                                <h1
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    className="ree-text txt-white mb20"
                                >
                                    Future Generali Life Insurance
                                </h1>
                                <h6
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                    className="ree-text txt-white"
                                >
                                    UX, UI, Graphic Design
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/* start portfolio details*/}
            <div className="port-head-sec pt60 pb60 r-bg-x">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <span
                                    className="sub-heading mb15"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <i className="fas fa-briefcase mr5" /> Portfolio Details
                                </span>
                                <h1 className="mb15" data-aos="fade-up" data-aos-delay={300}>
                                    Future Generali Life Insurance
                                </h1>
                                <p className="h-light" data-aos="fade-up" data-aos-delay={400}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis.
                                </p>
                                <NavLink to="https://life.futuregenerali.in/"
                                    target="_blank"
                                    className="port-links mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={500}
                                >
                                    Go to Website <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="sol-img m-mt30"
                                data-aos="fade-in"
                                data-aos-delay={400}
                            >
                                <img
                                    src={fgil}
                                    alt="portfolio"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end portfolio details*/}
            {/*-our description*/}
            <section className="r-bg-ti pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-sm-12 mt30 career-box">
                                    <div className="career-info">
                                        <h4 className="mb10">Who we are</h4>
                                        <p className="mb20">
                                            We believe lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Phasellus feugiat elit vitae enim lacinia semper. Cras
                                            nulla lectus, porttitor vitae urna iaculis, malesuada
                                            tincidunt lectus. Proin nec tellus sit amet massa auctor
                                            imperdiet id vitae diam. Aenean gravida est nec diam suscipit
                                            iaculis. Praesent urna velit, auctor nec turpis et, vehicula
                                            lobortis sem. Vivamus convallis mi sagittis eleifend laoreet.
                                            Praesent vitae venenatis enim. Nulla tincidunt felis et lectus
                                            rhoncus laoreet.
                                        </p>
                                        <h4 className="mb10">What we’re looking for</h4>
                                        <p className="mb30">
                                            Cras nulla lectus, porttitor vitae urna iaculis, malesuada
                                            tincidunt lectus. Proin nec tellus sit amet massa auctor
                                            imperdiet id vitae diam. Aenean gravida est nec diam suscipit
                                            iaculis. Praesent urna velit.
                                        </p>
                                        <ul>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Energized to join a startup
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Excited to mentor more junior developers
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Good at problem selection, problem solving, and course
                                                correcting
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Focused on best practices
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Highly pragmatic and collaborative
                                            </li>
                                        </ul>
                                        <h4 className="mb10 mt30">What we’re looking for</h4>
                                        <ul>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                3+ years of work experience
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Proficient in Ruby and PHP
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Understanding of OOP principles and practices
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                MySQL database design skills
                                            </li>
                                            <li className="mb10">
                                                <i className="far fa-hand-point-right mr10" />
                                                Version control and Git workflow
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our description end*/}
            {/*needs and solution*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <h3>Client's Need</h3>
                            <p className="mt15">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <p className="mt15">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                        <div className="col-lg-6 m-mt30">
                            <h3>Our Solutions</h3>
                            <p className="mt15">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt15">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt40">
                        <div className="col-lg-6">
                            <div className="center-btn big-txt">
                                <NavLink to="#" className="ree-btn  ree-btn-grdt2">
                                    <i className="fas fa-arrow-left fa-btn mr5" /> Previous Project{" "}
                                </NavLink>
                                <NavLink to="#" className="ree-btn  ree-btn-grdt2">
                                    {" "}
                                    Next Project <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start client testimonial  */}
            {/*?php include '../include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}
        </div>
    );
};
export default FutureGeneralLifeInsurance; 