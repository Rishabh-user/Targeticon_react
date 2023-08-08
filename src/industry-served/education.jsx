import React from "react";
import { Link } from "react-router-dom";
import OursTools from "../components/our-tools";
import EducationImg from '../assets/images/education-img.png';
import FormIndustries from "../components/form-industries";
import EducationService from '../assets/images/icons/education-services .png';



const Education = () => {
    return (
        <div>
            {/*start Hero Section  */}
            <section className="page-heading-sec r-bg-k pt40 pb40">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-6">
                            <div className="hero-content pera-block">
                                <span className="sub-heading mb15">We scale brands</span>
                                <h1 data-aos="fade-in" data-aos-delay={100}>
                                    Education
                                </h1>
                                <p data-aos="fade-in" data-aos-delay={200}>
                                    The web development arena is where you get all the solutions to
                                    your problems. Explore this page and get your best one.
                                </p>
                                <Link
                                    to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={250}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 vcenter">
                            <div className="sol-image">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={EducationImg}
                                        className="img-fluid mb20"
                                        alt="education"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*hero Section End*/}
            {/*start home-about  */}
            <section className="home-about pt60 pb60 r-bg-a">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-7">
                            <div className="about-content-home m-mb60 pera-block">
                                <span className="sub-heading mb15">We Are Targeticon</span>
                                <h2>
                                    <span className="ree-text rt40">Education</span> Overview
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    There are many sites which help in getting your field of work done
                                    in easy steps without any hustle. The extremely amazing services
                                    in the web development develop applications which make the
                                    efficient projects and its management. These development services
                                    use Microsoft technologies which employ industries practices in
                                    the best possible manner. The ASP.Net. Expertise provides the best
                                    experience to the clients according to their needs and preferable
                                    technology.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    {" "}
                                    In the development of hybrid applications, these development
                                    services use technologies such as HTML, JavaScript, CSS, React
                                    native etc.These development services experts provide service in
                                    the field of education along with other industries like banking
                                    and insurance, publishing, manufacturing, retail, travel and
                                    social, media and advertising, and entertainment.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    These development services developers provide you with websites to
                                    improve the education management field to compete with the world’s
                                    leading educational brands. There are many ways to find out the
                                    solutions for the educational management to improve and to get
                                    this into action it does not matter where you want the solution.
                                    It can be on the web, mobile or cloud, internet of things,
                                    artificial intelligence etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="form-contact-hom pt20 pb20">
                                <FormIndustries />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*home-about end*/}
            {/*start services*/}
            <section className="r-bg-i pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="sec-heading text-center pera-block">
                                <h2>
                                    Benefits of{" "}
                                    <span className="ree-text rt40">Education technology </span>
                                    services
                                </h2>
                                <p>
                                    There are a number of things which can be put into focus if the
                                    organizations adopt the education technology service. The benefits
                                    of this can add a lot of more opportunities to the students,
                                    teachers and a better understanding of their relations as well.
                                    The functioning of the entire system could become easy to handle
                                    and efficient in its working. The listed points below will add a
                                    clear picture to the whole:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={EducationService}
                                            className="img-fluid mb20"
                                            alt="education-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Collaboration</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={EducationService}
                                            className="img-fluid mb20"
                                            alt="education-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Get confidence</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={EducationService}
                                            className="img-fluid mb20"
                                            alt="education-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Effective and easy to use</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={EducationService}
                                            className="img-fluid mb20"
                                            alt="education-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Best technical solution</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={EducationService}
                                            className="img-fluid mb20"
                                            alt="education-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">A complete software</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*services end*/}
            {/*start client testimonial  */}

            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}

            {/*start our tools */}
            <OursTools />
            {/*end our tools  */}


        </div>
    );
};
export default Education;