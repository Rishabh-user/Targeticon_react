import React from "react";
import Slider from "./components/slider";


const Home = () => {
    return (
        <div>
            <Slider />
            {/*we are targeticon*/}
            <section
                className="home-about pt60 pb60 r-bg-acf"
                id="about"
                style={{ backgroundColor: "#d1cbc766" }}
            >
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="about-content-home text-center">
                                {/*<h3 class="mb15" style="color: #0067b0;">We the Targeticon</h3>*/}
                                <h2 className="mb15">
                                    Started in 2016, We are the Best &amp; Trusted Application
                                    Development &amp; Mobile Apps development company recognised and
                                    awarded for delivering top-notch projects.
                                </h2>
                                <p>
                                    Targeticon started its operation in the year 2015. We are
                                    Worldwide, based Web, App and Digital Marketing Company. Our main
                                    Domain is Web Design, App Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agency-info-ree mt60">
                    <div className="agency-picture">
                        <picture>
                            <source
                                media="(max-width:991px)"
                                srcSet="images/others/office-view-2-mobile.webp"
                                type="image/webp"
                            />
                            <source
                                media="(max-width:991px)"
                                srcSet="images/others/office-view-2-mobile.jpg"
                                type="image/jpg"
                            />
                            <source srcSet="images/others/office-view-2.webp" type="image/webp" />
                            <source srcSet="images/others/office-view-2.png" type="image/png" />
                            <img
                                loading="lazy"
                                src="images/others/office-view-2.png"
                                className="w-100 img-fluid"
                                alt="Office-team"
                                width={1600}
                                height={535}
                            />
                        </picture>
                    </div>
                    <div className="container">
                        <div className="row key-and-award">
                            <div className="ree-app-st-a flx-end m-order2">
                                <div className="btnctm">
                                    <a
                                        href="about.php"
                                        className="ree-btn ree-btn-grdt2 mw-80 m-mt30"
                                    >
                                        Know More Targeticon
                                        <i className="fas fa-arrow-right fa-btn" />
                                    </a>
                                </div>
                            </div>
                            <div className="ree-app-st-b m-order1">
                                <div className="quick-key-points">
                                    <div className="key-highlights">
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>200</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Project Delivered</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>60</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Happy Clients</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>50</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Experts Team</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3>
                                                <span>6</span>
                                                <span>+</span>
                                            </h3>
                                            <p>Success Years</p>
                                        </div>
                                    </div>
                                    <div className="agency-info-anim text-center">
                                        <div className="animated-logo">
                                            <picture>
                                                <source
                                                    srcSet="images/Target-icon.webp"
                                                    type="image/webp"
                                                />
                                                <source srcSet="images/Target-icon.png" type="image/png" />
                                                <img
                                                    loading="lazy"
                                                    src="images/Target-icon.png"
                                                    className="logo-anim img-fluid"
                                                    alt="Targeticon"
                                                    width={101}
                                                    height={102}
                                                />
                                            </picture>
                                            <img
                                                src="images/others/app-development.webp"
                                                alt="Targeticon icon"
                                                className="circle-anim"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt60">
                    <div className="row justify-content-center vcenter">
                        <div className="col-md-12">
                            <div className="app-awards owl-carousesl">
                                <div className="award-achivt">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcSet="images/brand-logo/top-it.webp"
                                                type="image/webp"
                                            />
                                            <source
                                                srcSet="images/brand-logo/top-it.png"
                                                type="image/png"
                                            />
                                            <img
                                                loading="lazy"
                                                src="images/brand-logo/top-it.png"
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </a>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcSet="images/brand-logo/appfutura-logo.webp"
                                                type="image/webp"
                                            />
                                            <source
                                                srcSet="images/brand-logo/appfutura-logo.png"
                                                type="image/png"
                                            />
                                            <img
                                                loading="lazy"
                                                src="images/brand-logo/appfutura-logo.png"
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </a>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcSet="images/brand-logo/goodfirm-logo.webp"
                                                type="image/webp"
                                            />
                                            <source
                                                srcSet="images/brand-logo/goodfirm-logo.png"
                                                type="image/png"
                                            />
                                            <img
                                                loading="lazy"
                                                src="images/brand-logo/goodfirm-logo.png"
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </a>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcSet="images/brand-logo/clutch-logo.webp"
                                                type="image/webp"
                                            />
                                            <source
                                                srcSet="images/brand-logo/clutch-logo.png"
                                                type="image/png"
                                            />
                                            <img
                                                loading="lazy"
                                                src="images/brand-logo/clutch-logo.png"
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </a>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                                <div className="award-achivt">
                                    <a href="#">
                                        <picture>
                                            <source
                                                srcSet="images/brand-logo/mobile-app-logo.webp"
                                                type="image/webp"
                                            />
                                            <source
                                                srcSet="images/brand-logo/mobile-app-logo.png"
                                                type="image/png"
                                            />
                                            <img
                                                loading="lazy"
                                                src="images/brand-logo/mobile-app-logo.png"
                                                className="img-fluid"
                                                alt="Top App Developer Genuine Quality"
                                                width={228}
                                                height={226}
                                            />
                                        </picture>
                                    </a>
                                    <p>Top App Developer Genuine Quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*we are Targeticon end*/}
            {/*start Awesome services*/}
            <section className="r-bg-i pt60 pb60" id="service">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-9">
                            <div className="sec-heading text-center pera-block">
                                <h2>Awesome Services</h2>
                                <p>
                                    At Targeticon, our adept developers implement the latest and
                                    choicest resources and technologies, which aids in enhancing
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <a
                                href="mobile-app-development.php"
                                className="ree-card reebgb h-100"
                            >
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Mobile App Development</h4>
                                    <p>
                                        With the help of innovative technologies, develop customized
                                        mobile apps.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/mobile-app-development.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/mobile-app-development.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/mobile-app-development.png"
                                            className="img-fluid"
                                            alt="Mobile App Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <a href="web-app-development.php" className="ree-card reebgd h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Web Application Development</h4>
                                    <p>
                                        We have implemented feature-rich qualities and features for
                                        improved workflow.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/web-application.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/web-applicationt.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/web-application.png"
                                            className="img-fluid"
                                            alt="Web Application Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <a href="UI-UX-design.php" className="ree-card reebga h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">UI/UX Design</h4>
                                    <p>
                                        We use the most resourceful and beneficial tools in creating a
                                        versatile and empowering user.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/ui-ux.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/ui-ux.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/ui-ux.png"
                                            className="img-fluid"
                                            alt="UI/UX Design"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            <a href="Cloud.php" className="ree-card reebgc h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Cloud</h4>
                                    <p>
                                        We facilitate making affordable, reliable, and secure cloud
                                        solutions.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/cloud.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/cloud.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/cloud.png"
                                            className="img-fluid"
                                            alt="Cloud"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <a href="JS-Stack-Development.php" className="ree-card reebgc h-100">
                                <div className="creative-cntnt">
                                    <h4 className="mb15">JS Stack Development</h4>
                                    <p>
                                        This versatile and robust development is convenient to use and
                                        enhances progress.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/js.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/js.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/js.png"
                                            className="img-fluid"
                                            alt="JS Stack Development"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={600}
                        >
                            <a
                                href="Oracle-Forms-Development.php"
                                className="ree-card reebgd h-100"
                            >
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Website Testing</h4>
                                    <p>
                                        Website for problems before you make that web application or
                                        website live.
                                    </p>
                                </div>
                                <div className="creative-img">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/web-testing.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/web-testing.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/web-testing.png"
                                            className="img-fluid"
                                            alt="Website Testing"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 mt30"
                            data-aos="fade-up"
                            data-aos-delay={700}
                        >
                            <a
                                href="Enterprise-Integration.php"
                                className="ree-card reebga h-100"
                            >
                                <div className="creative-cntnt">
                                    <h4 className="mb15">Enterprise Integration</h4>
                                    <p>
                                        Our company builds effective and automated enterprise
                                        integration to leverage productivity.
                                    </p>
                                </div>
                                <div className="creative-img mt30">
                                    <picture>
                                        <source
                                            srcSet="images/Awesome-Services/enterprice-intergration.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="images/Awesome-Services/enterprice-intergration.png"
                                            type="image/png"
                                        />
                                        <img
                                            loading="lazy"
                                            src="images/Awesome-Services/enterprice-intergration.png"
                                            className="img-fluid"
                                            alt="Enterprise Integration"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="cta-block-wide mt50">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3>
                                        Hire World-Class{" "}
                                        <span className="ree-text rt40">Developers</span>
                                    </h3>
                                    <a
                                        href="hire-app-developers.php"
                                        target="_blank"
                                        className="ree-btn  ree-btn-grdt1 mw-80"
                                    >
                                        Hire Now <i className="fas fa-arrow-right fa-btn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*services end*/}
            {/*start technologies tools*/}
            {/*?php include'include/our-tools.php';?*/}
            {/*end technologies tools*/}
            {/*start Client Testimonial*/}
            {/* <section class="Testimonial">
            <?php //include'include/client-testimonial.php';?>
                </section> */}
            {/*end Client Testimonial */}
            {/*start join our team  */}
            {/*?php include 'include/join-our-team.php';?*/}
            {/*end join our team  */}
            {/*Industries We Serve*/}
            {/*?php include'include/industries-serve.php';?*/}
            {/*Industries We Serve end*/}
            {/*start blogs  */}

            {/*end blogs*/}
            {/*contact info*/}
            {/*?php include 'include/form-info.php';?*/}
            {/*contact info end*/}
            {/*start find us location  */}
            {/*?php include 'include/location.php';?*/}
            {/*end find us location  */}
            {/*start footer  */}
            {/*?php include 'include/footer.php';?*/}
            {/*end footer  */}
        </div>
    );
};
export default Home;