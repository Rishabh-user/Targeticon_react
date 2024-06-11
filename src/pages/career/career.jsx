import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import Tools from '../../components/our-tools';
import { apicareer } from '../../js/api';
import career from '../../assets/images/career-page-img.png';
import careerpage from '../../assets/images/career-page-img-mobile-view.png';

const Career = () => {
    const [users, setUsers] = useState([]);
    const [careerOptions, setCareerOptions] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);
    const [selectedCareerTitles, setSelectedCareerTitles] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    //const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await fetch(`${apicareer}/careers/read/`);
                const data = await response.json();
                setUsers(data.careers);

                const careerOptions = data.careers.map(career => ({
                    value: career.title,
                    label: career.title
                }));
                setCareerOptions(careerOptions);

                const locationOptions = data.careers.map(career => ({
                    value: career.location,
                    label: career.location
                }));
                setLocationOptions(locationOptions);
            } catch (error) {
                console.error('Error fetching careers:', error);
            }
        };
        fetchCareers();
    }, []);

    const handleCareerTitleChange = (selectedOptions) => {
        setSelectedCareerTitles(selectedOptions);

        if (selectedOptions.length === 0) {
            setFilteredUsers(users); // Show all users when no titles are selected
        } else {
            const filteredData = users.filter(user =>
                selectedOptions.some(title => title.value === user.title)
            );
            setFilteredUsers(filteredData);
        }
    };

    // Similar logic for location filtering
    const handleLocationChange = (selectedOptions) => {
        setSelectedLocations(selectedOptions);

        if (selectedOptions.length === 0) {
            setFilteredUsers(users); // Show all users when no locations are selected
        } else {
            const filteredData = users.filter(user =>
                selectedOptions.some(location => user.location === location.label)
            );

            setFilteredUsers(filteredData);
        }
    };
    // const filteredDataSectionRef = useRef(null);
    // const handleSearch = () => {
    //     if (selectedCareerTitles.length === 0 && selectedLocations.length === 0) {
    //         setFilteredUsers(users); // Show all users when no selections are made
    //     } else {
    //         const filteredData = users.filter(user =>
    //             selectedCareerTitles.some(title => title.value === user.title) &&
    //             selectedLocations.some(location => user.location === location.value)
    //         );    
    //         setFilteredUsers(filteredData);    
    //         // Scroll to the filtered data section
    //         filteredDataSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    //     const lowercaseSearchQuery = searchQuery.toLowerCase(); 

    //     const filteredData = users.filter(user => {
    //         const lowercaseKeywords = user.keywords.map(keyword => keyword.keyword.toLowerCase());
    //         return lowercaseKeywords.includes(lowercaseSearchQuery);
    //     });

    //     setFilteredUsers(filteredData);
    // }; 



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
                                                    //value={searchQuery}
                                                    //onChange={(e) => setSearchQuery(e.target.value)}
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Function-filter text-center">
                                                    <Select
                                                        isMulti
                                                        options={careerOptions}
                                                        value={selectedCareerTitles}
                                                        onChange={handleCareerTitleChange}
                                                        placeholder="Choose Your Skills"

                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Function-filter text-center">
                                                    <Select
                                                        isMulti
                                                        options={locationOptions}
                                                        value={selectedLocations}
                                                        onChange={handleLocationChange}
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
                                                    //onClick={handleSearch}
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
                                {selectedCareerTitles.length === 0 && selectedLocations.length === 0 ? (
                                    // Display all users by default
                                    users.map((career, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box" key={career.id}>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">{index + 1}</span>
                                                <div className="process-block w-100">
                                                    <div className="process-icon">
                                                        <h4>{career.title}</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            {career.location}
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        {career.short_desc}
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to={`/career/${career.id}/${career.id}`}>See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : filteredUsers.length > 0 ? (
                                    // Display filtered users when selections are made
                                    filteredUsers.map((career, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 mt30 career-box" key={career.id}>
                                            <div className="process-content ree-card">
                                                <span className="setps hst-1">{index + 1}</span>
                                                <div className="process-block w-100">
                                                    <div className="process-icon">
                                                        <h4>{career.title}</h4>
                                                        <h6 className="mb20 txt-blue">
                                                            <i className="fas fa-map-marker-alt mr10" />
                                                            {career.location}
                                                        </h6>
                                                    </div>
                                                    <hr />
                                                    <p className="mb20">
                                                        {career.short_desc}
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="apply-button mb20">
                                                            <NavLink to="#">Apply</NavLink>
                                                        </div>
                                                        <div className="see-detail">
                                                            <NavLink to={`/career/${career.id}`}>See Detail</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No matching careers found.</p>
                                )}
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