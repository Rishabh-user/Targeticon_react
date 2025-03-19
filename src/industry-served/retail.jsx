import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FormIndustries from "../components/form-industries";
import Tools from '../components/our-tools';
import retailgif from '../assets/images/GIF/retail.gif';
import retailservice from '../assets/images/icons/retail-service1.png';

const Retail = () => {

    useEffect(() => {
        // Add CSS to hide ".powered-by"
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = ".powered-by { display: none !important; }";
        document.head.appendChild(style);
    
        return () => {
          // Cleanup: Remove CSS when leaving the page
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        };
      }, []);
    
      useEffect(() => {
        const reactScriptId = "react-sdk-script";
        const reactDomScriptId = "react-dom-sdk-script";
        const vozzoScriptId = "vozzo-sdk-script";
    
        // Function to add a script dynamically
        const addScript = (id, src) => {
          if (!document.getElementById(id)) {
            const script = document.createElement("script");
            script.id = id;
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
          }
        };
    
        // Add all required scripts
        addScript(reactScriptId, "https://unpkg.com/react@18.2.0/umd/react.production.min.js");
        addScript(reactDomScriptId, "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js");
        addScript(vozzoScriptId, "https://vozzo-jsx.s3.eu-north-1.amazonaws.com/agent-web-sdk-dev.js");
    
        // Wait for the VozzoAI script to load before calling `VozzoAI.open`
        const vozzoScript = document.getElementById(vozzoScriptId);
        if (vozzoScript) {
          vozzoScript.onload = () => {
            if (window.VozzoAI) {
              window.VozzoAI.open("704ab62e-b494-46c5-b185-f14aef1cb16a");
            } else {
              console.error("VozzoAI SDK failed to load.");
            }
          };
        }
    
        return () => {
          // Cleanup: Remove scripts after unmounting
          setTimeout(() => {
            [reactScriptId, reactDomScriptId, vozzoScriptId].forEach((id) => {
              const script = document.getElementById(id);
              if (script && document.body.contains(script)) {
                document.body.removeChild(script);
              }
            });
    
            // Remove VozzoAI from memory
            if (window.VozzoAI) {
              window.VozzoAI = undefined;
            }
          }, 100);
        };
      }, []);

    return (
        <div>
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-6 vcenter">
                            <div className="hero-content pera-block">
                                <span className="sub-heading mb15">We scale brands</span>
                                <h1 data-aos="fade-in" data-aos-delay={100}>
                                    Retail
                                </h1>
                                <p data-aos="fade-in" data-aos-delay={200}>
                                    We spread a wide range of efficient Retail services and best
                                    solutions across the online business processes.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={250}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 vcenter">
                            <div className="sol-image m-mt30">
                                <img
                                    src={retailgif}
                                    alt="retail"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                    data-aos-delay={200}
                                    width="700px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*hero Section End*/}
            {/*start home-about  */}
            <section className="home-about pt60 pb60 r-bg-a">
                <div className="container" id="about">
                    <div className="row vcenter">
                        <div className="col-lg-7">
                            <div className="about-content-home">
                                <span className="sub-heading mb15">We Are Targeticon</span>
                                <h2>
                                    <span className="ree-text rt40">Retail</span> Overview
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    These online platforms develop apps which are made with the help
                                    of ASP.Net. These provide you the platform to get an opportunity.
                                    The services and products provided to the clients help them in
                                    increasing their current business along with keeping in mind to
                                    maintain the costs. The team which works dedicating their time and
                                    energy ensure that the client satisfaction is the utmost priority.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    {" "}
                                    The industry served by these online companies includes retail
                                    services, banking and finance, education and so on. In this page
                                    we will talk about retail services.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    The retail services are the best option to get your business at
                                    the great heights by taking care of the costs as well. The retail
                                    servicing team includes continuity teams which take care of
                                    incremental sales and brand visibility by having an eye on the
                                    in-store selling. The merchandising with the help of tablet
                                    technology is also taken care of. All the reset and surge projects
                                    are handled by the team operating the projects and the in-store
                                    execution is all handled by them.
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
                        <div className="col-lg-8">
                            <div className="sec-heading text-center pera-block">
                                <h2>
                                    Various advantages of{" "}
                                    <span className="ree-text rt40">Retail technology </span>services
                                </h2>
                                <p>
                                    The advantages of retail technology services provide a huge
                                    platform and competitive field by leveraging ground-breaking field
                                    merchandising skill and in-store retailing applications. There are
                                    various benefiting points which will provide you with a complete
                                    picture of the retail technology services. These are as follows:
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
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="retail-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">In-store merchandising</h3>
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
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="retail-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Reporting</h3>
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
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="retail-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">In-store selling</h3>
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
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="retail-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">No stress</h3>
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
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="retail-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Provides the best quality</h3>
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
            {/*start footer  */}
            {/*?php include 'include/footer.php';?*/}
            {/*end footer  */}
        </div>
    );
};
export default Retail;