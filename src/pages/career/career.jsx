import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import Tools from '../../components/our-tools';
import { apiEndpoint } from '../../js/api';
import career from '../../assets/images/career-page-img.png';
import careerpage from '../../assets/images/career-page-img-mobile-view.png';
// const option = [
//     { value: 1, label: 'Java' },
//     { value: 2, label: 'React' },
//     { value: 3, label: 'Dot Net' },
//     { value: 4, label: 'HTML' },
// ];

const Career = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // [in this we write post beacause it is a API of posts,'/posts' is the specific endpoint for retrieving posts(ie. https://green.app.sociallocket.com/api/v1/posts) ]
                const response = await fetch(`${apiEndpoint}/career/get-all-career/`);
                const data = await response.json();
                console.log(data); // Print the data array in the console and we write data.result because we are getting the data of result array not fully api as a array
                // 'console.log(data.result)' it assumes that the API response has a result field containing the array of users.
                setUsers(data);
                // [here also we have done the same to get only values that are stored in result array otherwise it take full api as a array]
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    const options = users.map(user => ({
        value: user.id,
        label: user.title,
    }));
    const option = users.map(user => ({
        value: user.id,
        label: user.shortDescription,
    }));

    return (
        <div>
            <section className="page-heading-sec r-bg-g pt60 pb60 career-banner">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-12">
                            <div className="page-headings pb60 pt60 career-page-head">
                                <h6
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    className="ree-text mb10 txt-white"
                                >
                                    Career Page
                                </h6>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    className="ree-text txt-white"
                                >
                                    Join Targeticon <br />
                                    We are Hiring
                                </h1>
                            </div>
                            <div className="row vcenter">
                                <div className="col-md-12">
                                    <div className="search-filter">
                                        <ul>
                                            <li>
                                                <div className="Function-filter text-center search-bar">
                                                    <input
                                                        type="search"
                                                        className="search form-control"
                                                        id="floatingInput"
                                                        placeholder="Keywords..."
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Function-filter text-center">
                                                    <Select
                                                        isMulti
                                                        options={options}
                                                        placeholder="Choose Your Skills"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Function-filter text-center">
                                                    <Select
                                                        isMulti
                                                        options={option}
                                                        placeholder="Choose Your location"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="go-button text-center">
                                                    <input
                                                        type="submit"
                                                        className="apply-btn w-100"
                                                        name="Find My Future"
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Why Work with Targeticon*/}
            <section className="r-bg-main pt60 pb60 career-text-below-img">
                <div className="text-center career-img-destop">
                    <img
                        loading="lazy"
                        src={career}
                        className="img-fluid"
                        alt="career"
                        width={1600}
                        height={550}
                    />
                </div>
                <div className="text-center career-img-mobile">
                    <img
                        loading="lazy"
                        src={careerpage}
                        className="img-fluid"
                        alt="career"
                        width={680}
                        height={1100}
                    />
                </div>
                <div className="container">
                    <div className="row vcenter justify-content-center">
                        <div className="col-md-10 vcenter">
                            <div className="cta-heading mt50">
                                <h4 className="mb30 txt-white">
                                    To be one of us is to embrace challenge, embody intelligence, and
                                    move quickly. It means you see technology as a means, but the end
                                    is always making an impact in our clients' most pressing
                                    challenges. We want you to feel empowered, be free to embrace your
                                    inner-entrepreneur, and drive to deliver solutions that you are
                                    proud of. This is what CARING is all about..
                                </h4>
                                <h4 className="txt-white">
                                    At Nagarro, you can work from anywhere, now and forever. Our
                                    mission statement of “making distance irrelevant between
                                    intelligent people” has never been truer. You can work from one of
                                    our amazing “hives,” your home, or anywhere else! You decide.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Why Work with Targeticon*/}
            {/*-our career opportunities*/}
            <section className="r-bg-ti pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-md-9">
                            <div className="page-headings text-center">
                                <h6 className="txt-blue">OPEN ROLES</h6>
                                <h2 className="mb15">Target Icon Career opportunities</h2>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row mt30 justify-content-center">
                                {users.map((career, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box" key={career.id}>
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">{index + 1}</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>{career.title}</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            {/* {users.category[0].subCategory[0].experience} */}

                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        {career.shortDescription}

                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="career/career-details">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box">
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">02</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>UI/UX Designer</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            Gurugram
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut elit tellus, luctus nec ullam.
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="/career-details">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box">
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">03</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>Graphic Designer</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            Mumbai
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut elit tellus, luctus nec ullam.
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="#">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box">
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">04</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>Sr. UI Designer </h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            Mumbai
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut elit tellus, luctus nec ullam.
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="/career-details">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box">
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">05</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>Java Developer</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            Noida
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut elit tellus, luctus nec ullam.
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="/career-details">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box">
                                        <div>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">06</span>
                                                <div className="process-block">
                                                    <div className="process-icon">
                                                        <h4>React Developer</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            Noida
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut elit tellus, luctus nec ullam.
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to="/career-details">See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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
export default Career;