import React from "react";
import { Link } from "react-router-dom";
import HireAppDeveloper from '../assets/images/Hire_world_class_Developers-mobile.jpg';

const JoinOurTeam = () => {
    return (
        <div>
            {/*start join our team*/}
            <section className="sec-pad dark-bg pt120 pb120 join-team-bg">
                {/* <section class="r-bg-a sec-pad dark-bg pt120 pb120 join-team-bg" style="background-color:#070d1f;"> */}
                <div className="container">
                    <div className="ree">
                        <div className="row">
                            <div className="col-lg-6 hide-for-mobile">
                                <div className="ct-sol-img mt-0 mb-5">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={HireAppDeveloper}
                                            className="img-fluid"
                                            alt="Hire_world_class_Developers"
                                            width={700}
                                            height={542}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-6 vcenter">
                                <div className="cta-heading">
                                    <h2 className="mb15">
                                        Hire world-class{" "}
                                        <span className="ree-text rt40">Developers</span> for your
                                        <span className="ree-text rt40"> Project</span>
                                    </h2>
                                    <p
                                        className="hire-world-class-developers-content"
                                        style={{ color: "#fff" }}
                                    >
                                        We have a dexterity team of designers &amp; developers that
                                        works on clients projects excellently and delivers the project
                                        on timeline. We have a dexterity team of designers &amp;
                                        developers that works on clients projects excellently and
                                        delivers the project on timeline.
                                    </p>
                                    <Link
                                        to="/hire-app-developers"
                                        target="_blank"
                                        className="ree-btn  ree-btn-grdt1 mw-80 mt40"
                                    >
                                        Start Your Project <i className="fas fa-arrow-right fa-btn" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end join our team*/}
        </div>
    );
};
export default JoinOurTeam;