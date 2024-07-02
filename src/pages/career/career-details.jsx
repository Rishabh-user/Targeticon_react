import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Tools from '../../components/our-tools';
import { apicareer } from '../../js/api';

const CareerDetails = ({ match }) => {
    const [careerData, setCareer] = useState({});
    const { id } = useParams();
    useEffect(() => {
        // Fetch career data from the API
        fetch(`${apicareer}/careers/read/`)
            .then(response => response.json())
            .then(data => {
                const selectedCareer = data.careers.find(career => career.id === parseInt(id, 0));
                setCareer(selectedCareer || {});
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const career = careerData;

    return (
        <div>

            <section className="page-heading-sec r-bg-g pt60 pb60 career-detail-banner">

                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-6">
                            <div className="page-headings pb60 pt60 career-detail-head" >
                                <h1
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    className="ree-text txt-white mb20"
                                >
                                    {career.title}
                                </h1>
                                <h6
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                    className="ree-text txt-white"
                                >
                                    {career.skills && career.skills.map((skill, index) => (
                                        <span key={skill.id}>{skill.title}{index < career.skills.length - 1 && " / "}</span>
                                    ))}
                                </h6>

                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="page-headings pb60 pt60 career-detail-head">
                                <div className="go-button">
                                    <NavLink to="#">Apply Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/*page head end*/}
            {/*-our Integrated Development Environment*/}
            <section className="r-bg-ti pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-md-10">
                            <div className="row mt30 justify-content-center">
                                <div className="col-md-8 col-sm-12 mt30 career-box">
                                    <div className="career-info">
                                        <p>{career.long_desc}</p>
                                        {/* <h4 className="mb10">Who we are</h4>
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
                                        </ul> */}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mt30 career-connect">
                                    <div>
                                        <div className="process-content ree-card">
                                            <div className="process-block">
                                                <div className="process-icon">
                                                    <h4>Need help?</h4>
                                                </div>
                                                <p className="mb20">
                                                    Not sure exactly what we’re looking for or just want
                                                    clarification? We’d be happy to chat with you and clear
                                                    things up for you. Anytime
                                                </p>
                                                <div className="connect">
                                                    <div className="mb20 mt20">
                                                        <NavLink to="#">
                                                            <i className="fas fa-phone-alt mr10 mb20" /> +91 981
                                                            875 7597
                                                        </NavLink>
                                                        <NavLink to="#">
                                                            <i className="fas fa-envelope mr10" />
                                                            info@targeticon.com
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="share-job mt40 mb30">
                                            <h5>Share This Jobs</h5>
                                            <div className="mt15">
                                                <ul className="footer-links-list social-linkz d-flex">
                                                    <li>
                                                        <NavLink to="https://www.linkedin.com/company/targeticon/"
                                                             target="_blank" rel="noreferrer"
                                                        >
                                                            <i className="fab fa-linkedin" />
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="https://www.instagram.com/targeticoncompany/"
                                                             target="_blank" rel="noreferrer"
                                                        >
                                                            <i className="fab fa-instagram" />
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="https://www.facebook.com/targeticon"
                                                             target="_blank" rel="noreferrer"
                                                        >
                                                            <i className="fab fa-facebook-f" />
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="https://www.youtube.com/channel/UCb_vpek2kqoYph9uTCFbAeg"
                                                             target="_blank" rel="noreferrer"
                                                        >
                                                            <i className="fab fa-whatsapp" />
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="job-apply-form mt40">
                                        <div className="process-content ree-card">
                                            <div className="process-block w-100">
                                                <div className="process-icon w-100 text-center mb30">
                                                    <h4 className="mb-5">Apply For This Job</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <label>FIRST NAME</label>
                                                        <input
                                                            type="Name"
                                                            name=""
                                                            className="form-control"
                                                            placeholder="Your First Name"
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label>LAST NAME</label>
                                                        <input
                                                            type="Name"
                                                            name=""
                                                            className="form-control"
                                                            placeholder="Your Last Name"
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label>PHONE</label>
                                                        <input
                                                            type="Phone"
                                                            name=""
                                                            className="form-control"
                                                            placeholder="Your Number"
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label>EMAIL</label>
                                                        <input
                                                            type="email"
                                                            name=""
                                                            className="form-control"
                                                            placeholder="Your Email"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 mb-4 resume">
                                                        <label htmlFor="myfile">RESUME/CV</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="myfile"
                                                            name="myfile"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 mb-2">
                                                        <label>ADDITIONAL INFORMATION</label>
                                                        <textarea
                                                            rows={10}
                                                            className="w-100"
                                                            placeholder="Add Cover Letter or Anything Else You Want to Share"
                                                            defaultValue={"                                    "}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="i-agree d-flex">
                                                            <input
                                                                type="checkbox"
                                                                id="agree"
                                                                name="agree"
                                                                defaultValue="agree"
                                                            />
                                                            <label htmlFor="vehicle1">
                                                                I Have Read and Agree to The Terms &amp; Conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="submit-app-btn text-center">
                                                            <input
                                                                type="submit"
                                                                id="submit"
                                                                name="agree"
                                                                defaultValue="Submit Application"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default CareerDetails;