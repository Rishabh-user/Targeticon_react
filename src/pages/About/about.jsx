import React from "react";
import { Link } from "react-router-dom";
import marketing from '../../assets/images/GIF/marketing.gif';
import hero from '../../assets/images/hero.webp';
import hero1 from '../../assets/images/hero.png';
import softwaredevelp from '../../assets/images/icons/Software-Development.webp';
import softwaredevelp1 from '../../assets/images/icons/Software-Development.png'
import mobiledevlp from '../../assets/images/icons/mobile-and-web-development.webp';
import mobiledevlp1 from '../../assets/images/icons/mobile-and-web-development.png';
import customer_centric from '../../assets/images/icons/Customer-Centric.webp';
import customer_centric1 from '../../assets/images/icons/Customer-Centric.png';
import countries from '../../assets/images/icons/countries.webp';
import countries1 from '../../assets/images/icons/countries.png';
import hero_11 from '../../assets/images/here-11.webp';
import hero_11_1 from '../../assets/images/here-11.png';
import vision from '../../assets/images/vision.webp';
import vision1 from '../../assets/images/vision.png';
import hero_team from '../../assets/images/hero-team.webp';
import hero_team1 from '../../assets/images/hero-team.png';
import businessprocess from '../../assets/images/icons/Business-process.webp';
import businessprocess1 from '../../assets/images/icons/Business-process.png';
import defining_goals from '../../assets/images/icons/Defining-Goals.webp';
import defining_goals1 from '../../assets/images/icons/Defining-Goals.png';
import effective from '../../assets/images/icons/Effective-Collaboration.webp';
import effective1 from '../../assets/images/icons/Effective-Collaboration.png';
import implementation from '../../assets/images/icons/Implementation.webp';
import implementation1 from '../../assets/images/icons/Implementation.png';
import result from '../../assets/images/icons/Measuring-Results.webp';
import result1 from '../../assets/images/icons/Measuring-Results.png';
import customer from '../../assets/images/icons/Customer-service.webp';
import customer1 from '../../assets/images/icons/Customer-service.png';
import techinal from '../../assets/images/icons/Technical-Support.webp';
import techinal1 from '../../assets/images/icons/Technical-Support.png';
import legal_process from '../../assets/images/icons/Legal-process.webp';
import legal_process1 from '../../assets/images/icons/Legal-process.png';
import time_material from '../../assets/images/icons/time-material.webp';
import time_material1 from '../../assets/images/icons/time-material.png';
import fix_cost from '../../assets/images/icons/fixed-cost.webp';
import fix_cost1 from '../../assets/images/icons/fixed-cost.png';
import resourse from '../../assets/images/icons/Dedicated-Resource.webp';
import resourse1 from '../../assets/images/icons/Dedicated-Resource.png';
import infrastructure from '../../assets/images/infrastructure.webp';
import infrastructure1 from '../../assets/images/infrastructure.png';


const About = () => {
    return (
        <div>

            {/* <section className="pt60 pb60">
            {/* <section className="pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div>
                <img src="images/targeticon-slider-banner.jpg" class="img-fluid " />
                
                </div>
                    </div>
                </div>
            </section> */}
            {/*page head*/}
            <section className="page-heading-sec about-pag-head pt60 pb60">
                <div className="container">
                    <div className="row flex-row-reverse vcenter">
                        <div className="col-lg-6">
                            <div className="pt30 pb30">
                                <img
                                    src={marketing}
                                    alt="Targeticon office"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-heading about-main-heading">
                                <span
                                    className="sub-heading mb15"
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                >
                                    <i className="fas fa-building mr5" /> Who We Are
                                </span>
                                <h1 data-aos="fade-up" data-aos-delay={60}>
                                    {" "}
                                    We are a creative digital agency based in India.
                                </h1>
                                <p className="mt30 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    We are a team of top talent delivering enterprise solutions
                                    globally. we evolve with the advancement in technology because we
                                    believe in making our technology as your innovation.
                                </p>
                                <p className="mt15 h-light" data-aos="fade-up" data-aos-delay={80}>
                                    Our experts provide a wide range of services including app design,
                                    web development, digital marketing, ecommerce solutions and cloud
                                    development. We stay updated with the technology to build
                                    innovative digital products that meet client requirements across
                                    multiple business verticals and domains by housing some of the
                                    best professionals in the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*about company*/}
            <section className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-4">
                            <div className="text-center mt30 mb30">
                                <picture>
                                    <source srcSet={hero} type="image/webp" />
                                    <source srcSet={hero1} type="image/png" />
                                    <img
                                        loading="lazy"
                                        src={hero1}
                                        className="img-fluid mb20"
                                        alt="About"
                                        width={500}
                                        height={400}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h4 className="mb15">
                                Targeticon is a full-service web, app and digital marketing company
                                based in India.
                            </h4>
                            <p>
                                The Targeticon has accomplished all the motives by action and has
                                been helpful for the clients. Clients requirements are delivered
                                with a creative mindset and are also known to be well equipped to
                                all the problems, their business are facing. We have come up with
                                unique and effective solutions to problems.
                            </p>
                            <p className="mt15">
                                To learn more about our approach to business and work, feel free to
                                hop on over to our Open Contact Page.
                            </p>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="company-stats2 roww mt30">
                                        <div className="statsnum counter-number mt30">
                                            <p>Complete Projects</p>
                                            <span className="counter">356</span> <span>+</span>
                                        </div>
                                        <div className="statsnum counter-number mt30">
                                            <p>Happy Clients</p>
                                            <span className="counter">280</span> <span>+</span>
                                        </div>
                                        <div className="statsnum counter-number mt30">
                                            <p>Expert Team</p>
                                            <span className="counter">150</span>
                                            <span>+</span>
                                        </div>
                                        <div className="statsnum counter-number mt30">
                                            <p>Success Years</p>
                                            <span className="counter">06</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*about company end*/}
            {/*About Targeticon*/}
            <section className="r-bg-x pt60 pb60 about-TGT">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-4 vcenter">
                            <div className="page-headings side-pghd">
                                <h2 className="mb15" style={{ color: "#0067b0" }}>
                                    About Targeticon
                                </h2>
                            </div>
                            <p>
                                The Targeticon has accomplished all the motives by action and has
                                been helpful for the clients. Clients requirements are delivered
                                with a creative mindset and are also known to be well equipped to
                                all the problems, their business are facing. We have come up with
                                unique and effective solutions to problems.
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="row vcenter">
                                <div className="col-lg-6 col-sm-6 mt30">
                                    <div className="about-targeticon-card">
                                        <div className="about-targeticon-card-img">
                                            <picture>
                                                <source
                                                    srcSet={softwaredevelp}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={softwaredevelp1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={softwaredevelp1}
                                                    className="img-fluid"
                                                    alt="Software-Development"
                                                    width={85}
                                                    height={85}
                                                />
                                            </picture>
                                        </div>
                                        <div className="side-texts">
                                            <h5>An Agile Software Development Company </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mt30">
                                    <div className="about-targeticon-card">
                                        <div className="about-targeticon-card-img">
                                            <picture>
                                                <source
                                                    srcSet={mobiledevlp}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={mobiledevlp1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={mobiledevlp1}
                                                    className="img-fluid"
                                                    alt="mobile-and-web-development"
                                                    width={85}
                                                    height={85}
                                                />
                                            </picture>
                                        </div>
                                        <div className="side-texts">
                                            <h5>Specialists in Mobile App and Website Development </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mt30">
                                    <div className="about-targeticon-card">
                                        <div className="about-targeticon-card-img">
                                            <picture>
                                                <source
                                                    srcSet={customer_centric}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={customer_centric1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={customer_centric1}
                                                    className="img-fluid"
                                                    alt="Customer-Centric"
                                                    width={85}
                                                    height={85}
                                                />
                                            </picture>
                                        </div>
                                        <div className="side-texts">
                                            <h5>Fast, Agile, Responsive, Customer-Centric Team </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mt30">
                                    <div className="about-targeticon-card">
                                        <div className="about-targeticon-card-img">
                                            <picture>
                                                <source
                                                    srcSet={countries}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={countries1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={countries1}
                                                    className="img-fluid"
                                                    alt="countries"
                                                    width={85}
                                                    height={85}
                                                />
                                            </picture>
                                        </div>
                                        <div className="side-texts">
                                            <h5>
                                                Clients across 19 countries including USA, Europe &amp;
                                                Australia{" "}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*company awards end*/}
            {/*mission and vision*/}
            <section className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-4 col-sm-12">
                            {/* Tabs nav */}
                            <ul
                                className="vrt-tabb nav nav-pills nav-pills-custom"
                                id="pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <li>
                                    <Link
                                        className="nav-link active"
                                        id="mission-tab"
                                        data-toggle="pill"
                                        to="#pills-mission"
                                        role="tab"
                                        aria-controls="pills-mission"
                                        aria-selected="true"
                                    >
                                        <i className="fas fa-rocket" /> Our Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        id="vision-tab"
                                        data-toggle="pill"
                                        to="#pills-vision"
                                        role="tab"
                                        aria-controls="pills-vision"
                                        aria-selected="false"
                                    >
                                        <i className="far fa-eye" /> Our Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        id="comit-tab"
                                        data-toggle="pill"
                                        to="#pills-comit"
                                        role="tab"
                                        aria-controls="pills-comit"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-hands-helping" /> Our Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            {/* Tabs content */}
                            <div className="tab-content tab-bg" id="pills-tabContent">
                                <div
                                    className="tab-pane fade  show active"
                                    id="pills-mission"
                                    role="tabpanel"
                                    aria-labelledby="mission-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="hovr-scale-main">
                                                <div className="text-center">
                                                    <picture>
                                                        <source
                                                            srcSet={hero_11}
                                                            type="image/webp"
                                                        />
                                                        <source srcSet={hero_11_1} type="image/png" />
                                                        <img
                                                            loading="lazy"
                                                            src={hero_11_1}
                                                            className="img-fluid mb20"
                                                            alt="About"
                                                            width={500}
                                                            height={377}
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <h3 className="mb10">Our Mission</h3>
                                            <p>
                                                Targeticon is equipped with all the latest technologies to
                                                face all the existing threats and battle the upcoming ones
                                                as well Targeticon is equipped with all the latest
                                                technologies to face all the existing threats and battle the
                                                upcoming ones as wellTargeticon is equipped with all the
                                                latest technologies to face all the existing threats and
                                                battle the upcoming ones as well.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-vision"
                                    role="tabpanel"
                                    aria-labelledby="vision-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="hovr-scale-main">
                                                <div className="text-center">
                                                    <picture>
                                                        <source srcSet={vision} type="image/webp" />
                                                        <source srcSet={vision1} type="image/png" />
                                                        <img
                                                            loading="lazy"
                                                            src={vision1}
                                                            className="img-fluid mb20"
                                                            alt="About"
                                                            width={500}
                                                            height={433}
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <h3 className="mb10">Our Vision</h3>
                                            <p>
                                                The company provides the Creative Minds Mobile Solutions and
                                                Web Solution at just the perfect age for the customers so
                                                that the best results are obtainedThe company provides the
                                                Creative Minds Mobile Solutions and Web Solution at just the
                                                perfect age for the customers so that the best results are
                                                obtainedThe company provides the Creative Minds Mobile
                                                Solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-comit"
                                    role="tabpanel"
                                    aria-labelledby="comit-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="hovr-scale-main">
                                                <div className="text-center">
                                                    <picture>
                                                        <source
                                                            srcSet={hero_team}
                                                            type="image/webp"
                                                        />
                                                        <source
                                                            srcSet={hero_team1}
                                                            type="image/png"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={hero_team1}
                                                            className="img-fluid mb20"
                                                            alt="About"
                                                            width={500}
                                                            height={344}
                                                        />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <h3 className="mb10">Our Team</h3>
                                            <p>
                                                With a brigade of experienced professionals and leading
                                                technologies, Targeticon is just the solution every netizen
                                                had been waiting for With a brigade of experienced
                                                professionals and leading technologies, Targeticon is just
                                                the solution every netizen had been waiting for With a
                                                brigade of experienced professionals and leading
                                                technologies, Targeticon is just the solution every netizen
                                                had been waiting for.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*mission and vision end*/}
            {/*start why targeticon*/}
            <section className="r-bg-x pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-7 text-center">
                            <div className="page-headings">
                                <h2 style={{ color: "#0067b0" }}>
                                    <span style={{ color: "#000" }}>Why</span> Targeticon
                                </h2>
                                <p className="mt15">
                                    Targeticon is a one stop solution that would help to provide a
                                    shield against all such heinous your business is facing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30">
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={businessprocess}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={businessprocess1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={businessprocess1}
                                            className="img-fluid"
                                            alt="Business-process"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Business process</h3>
                                    <p>
                                        We are ready to take up any kind of challenging in making count
                                        every step of your success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={defining_goals}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={defining_goals1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={defining_goals1}
                                            className="img-fluid"
                                            alt="Defining-Goals"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Defining Goals</h3>
                                    <p>
                                        We discuss how fast you want your results and your proposed
                                        budget after which we move on to the next step.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={effective}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={effective1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={effective1}
                                            className="img-fluid"
                                            alt="Effective-Collaboration"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Effective Collaboration</h3>
                                    <p>
                                        Our software house has been recognised by google for outstanding
                                        android application quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={implementation}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={implementation1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={implementation1}
                                            className="img-fluid"
                                            alt="Implementation"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Implementation</h3>
                                    <p>
                                        Running the campaigns for around 2-3 days and then critically
                                        analyzing the results to see how profitable the campaign is.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={result}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={result1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={result1}
                                            className="img-fluid"
                                            alt="Measuring-Results"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Measuring Results</h3>
                                    <p>
                                        If the test marketing is unsuccessful, we go back to the drawing
                                        board and come up with another plan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={customer}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={customer1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={customer1}
                                            className="img-fluid"
                                            alt="Customer-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Customer service</h3>
                                    <p>
                                        best of your needs at an affordability all we seek is an
                                        gratitude and joy in the client and satisfaction who seek our
                                        services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={techinal}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={techinal1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={techinal1}
                                            className="img-fluid"
                                            alt="Technical-Support"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Technical Support</h3>
                                    <p>
                                        best support with all our efforts to keep you on the top of your
                                        work nonetheless we are entrusted with it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <source
                                            srcSet={legal_process}
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet={legal_process1}
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src={legal_process1}
                                            className="img-fluid"
                                            alt="Legal-process"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Legal process</h3>
                                    <p>
                                        We provide you with the best solutions with all the legal
                                        clutter you are into with our team of experts assisting{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*why targeticon end*/}
            {/*Industries We Serve*/}
            {/*?php include'include/industries-serve.php';?*/}
            {/*Industries We Serve end*/}
            {/*-our Engagement Models*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15" style={{ color: "#0067b0" }}>
                                    Engagement Models
                                </h2>
                                <p>
                                    With flexibility and a service you can count on our availability
                                    is round the clock and approachable at the tap of a button we
                                    passionate in the work we endure and solutions we give you access
                                    to keep you unprecedented in the times.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt30">
                            <Link to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <source
                                                    srcSet={time_material}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={time_material1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={time_material1}
                                                    className="img-fluid mb20"
                                                    alt="About"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4 className="Engagement-Models-heading">
                                            Time &amp; Material
                                        </h4>
                                        <ul className="Engagement-Models mt15">
                                            <li className="mb5">
                                                <i className="fas fa-check mr10" />
                                                Uniform Billing Rate
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Manage Team
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Closely Work With Offshore team
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt30">
                            <Link to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <source
                                                    srcSet={fix_cost}
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet={fix_cost1}
                                                    type="image/png"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src={fix_cost1}
                                                    className="img-fluid mb20"
                                                    alt="About"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4 className="Engagement-Models-heading">Fixed Cost</h4>
                                        <ul className="Engagement-Models mt15">
                                            <li className="mb5">
                                                <i className="fas fa-check mr10" />
                                                Predictable Budget
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Fixed Timeframe
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Low Perceived
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt30 ">
                            <Link to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
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
                                                    alt="About"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4 className="Engagement-Models-heading">
                                            Dedicated Resource
                                        </h4>
                                        <ul className="Engagement-Models mt15">
                                            <li className="mb5">
                                                <i className="fas fa-check mr10" />
                                                Specialized Full Time Resources.
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                Quick Ramp Up/Down
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our Engagement Models end*/}
            <div className="pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <h2 className="mb10" style={{ color: "#0067b0" }}>
                                    Our infrastructure
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Counting on individuals is great but counting on expertise is
                                    where your trust is gained to keep you rise.
                                </p>
                                <p className="mt10" data-aos="fade-up" data-aos-delay={100}>
                                    {" "}
                                    We are here to provide the best of the individuals to carry out
                                    your work with ease and compassion, with a experts in the core
                                    team we are good at identifying the needs our client and take
                                    precise steps to fulfill all the needs of the organization and
                                    client we offer our service for.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="vcenter">
                                <div className="pt20 pb20">
                                    <picture>
                                        <source srcSet={infrastructure} type="image/webp" />
                                        <source srcSet={infrastructure1} type="image/png" />
                                        <img
                                            loading="lazy"
                                            src={infrastructure1}
                                            className="img-fluid mb20"
                                            alt="About"
                                            width={690}
                                            height={420}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*start Client Testimonial*/}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end Client Testimonial */}
            {/*start contact form*/}
            {/*?php include 'include/form-info.php';?*/}
            {/*contact form end*/}
            {/*start footer */}
            {/*?php include 'include/footer.php';?*/}
            {/* end footer */}
        </div>
    );
};
export default About;