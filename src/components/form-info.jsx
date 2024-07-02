import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BestPrice from '../assets/images/icons/best-price.png';
import QualityService from '../assets/images/icons/quality-service.png';
import GoodSupport from '../assets/images/icons/good-support.png';
import Satisfaction from '../assets/images/icons/satification.png';
//import { apiEndpoint1 } from "../js/api";
import { apiEndpoint } from "../js/api";

const FormInfo = () => {
     const [services, setServices] = useState([]);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     contact: '',
    //     subject: '',
    //     skype: '',
    //     service: '',
    //     message: '',
    //     //recaptcha: '',
    // });

    // const [errors, setErrors] = useState({
    //     name: '',
    //     email: '',
    //     contact: '',
    //     subject: '',
    //     skype: '',
    //     service: '',
    //     message: '',
    //     //recaptcha: '',
    // });
    // // this is for setting the error

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //       }));
    //     // Clear the error message for the corresponding field when the user starts typing	
    //     setErrors({
    //         ...errors,
    //         [name]: '',
    //     });
       
    // };

    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors = {};    //change

    //     // ... (same as before)
    //     // eslint-disable-next-line no-useless-escape
    //     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const userRegex = /^[a-zA-Z]{3,20}$/i;
    //     const contactRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
    //     //const skypeRegex = /^[a-zA-Z]{3,20}$/i; // Corrected regex for skype
    //     const messageRegex = /^.{3,}$/; // Updated the regex for message to accept any 3 or more characters

    //     if (!formData.name.trim()) {
    //         isValid = false;
    //         newErrors.name = 'Please Enter your Full Name';
    //     } else if (!userRegex.test(formData.name)) {
    //         isValid = false;
    //         newErrors.name = 'Please Enter a valid Full Name (3-20 characters, only letters)';
    //     }

    //     if (!formData.email.trim()) {
    //         isValid = false;
    //         newErrors.email = 'Please Enter your Email ID';
    //     } else if (!emailRegex.test(formData.email)) {
    //         isValid = false;
    //         newErrors.email = 'Please Enter a valid Email ID';
    //     }

    //     if (!formData.contact.trim()) {
    //         isValid = false;
    //         newErrors.contact = 'Please Enter a valid contact Number';
    //     } else if (!contactRegex.test(formData.contact)) {
    //         isValid = false;
    //         newErrors.contact = 'Please Enter a valid contact Number';
    //     }       

    //     if (!formData.message.trim()) {
    //         isValid = false;
    //         newErrors.message = 'Please Enter your Message';
    //     } else if (!messageRegex.test(formData.message)) {
    //         isValid = false;
    //         newErrors.message = 'Please Enter a valid Message (at least 3 characters)';
    //     }

    //     setErrors(newErrors);
    //     console.log('formData:', formData); // Debugging statement to log formData
    //     console.log('errors:', errors); // Debugging statement to log errors
    //     return isValid;
    // };
    useEffect(() => {
        fetch(`${apiEndpoint}/services/read/`)
          .then(response => response.json())
          .then(data => setServices(data.services))
          .catch(error => console.error('Error fetching services:', error));
      }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const isValid = validateForm();

    //     if (isValid) {
    //         try {
    //             const response = await fetch(`${apiEndpoint1}/contactus/contact`, {
    //                 method: 'POST', // Change to your desired HTTP method/
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin' : '*'
    //                 },
    //                 body: JSON.stringify(formData),
                    
    //             });
                
    //             if (response.ok) {
    //                 console.log('Form submitted successfully');
    //                 // Handle success or other UI updates here
    //             } else {
    //                 console.error('Form submission failed');
    //                 // Handle error or other UI updates here
    //             }
    //         } catch (error) {
    //             console.error('Error sending form data:', error);
    //             // Handle error or other UI updates here
    //         }

    //         // Reset the form fields after successful submission
    //         setFormData({
    //             name: "",
    //             email: "",
    //             contact: "",
    //             subject: '',
    //             skype: "",
    //             service: '',
    //             message: "",
    //             //recaptcha: "",
    //         });

    //         // Clear the errors state
    //         setErrors({
    //             name: '',
    //             email: '',
    //             contact: '',
    //             subject: '',
    //             skype: '',
    //             service: '',
    //             message: '',
    //             //recaptcha: '',
    //         });
    //     // } else {
    //     //     console.log('Form validation failed:', errors);
    //     // }
    // };
    const [formData, setFormData] =  useState({
        name: "",
        email: "",
        contact: "",
        skype: "",
        subject: "",
        service: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      };
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = {};

    // Validate name
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate contact
    if (!formData.contact) {
      validationErrors.contact = 'Contact is required';
    }

    // Validate message
    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }


    if (Object.keys(validationErrors).length === 0) {
      try {
        let res = await fetch(`${apiEndpoint}/contactus/contact`, {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
            contact: formData.contact,
            subject: formData.subject,
            skype: formData.skype,
            message: formData.message,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          console.log(resJson.message);
          
        } else {
          console.log(resJson.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
        setErrors(validationErrors);
      }
    };


    return (
        <div>
            {/*start contact form*/}
            <div className="contact-form-sec pt60 pb60 r-bg-a">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-7">
                            <div className="form-contact-hom m-mt60">
                                <div className="form-block bg-w">
                                    <div className="form-head">
                                        <h3>Please fill in the form below.</h3>
                                    </div>
                                    <div className="form-body">
                                        <form className="google-form" onSubmit={handleSubmit}>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        id="user_name"
                                                        className="txtName validate"
                                                        placeholder="Full Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.name && <div className="error">{errors.name}</div>}
                                                    {/* {successMessage && <div className="success">{successMessage}</div>} */}
                                                    {/* <span id="errName" /> */}

                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="email"
                                                        id="user_email"
                                                        className="txtEmail validate"
                                                        placeholder="Email Address"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    {/* <span id="errEmail" /> */}

                                                    {errors.email && <div className="error">{errors.email}</div>}
                                                    {/* {<div className="success">{successMessage1}</div>} */}
                                                </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="number"
                                                        id="user_contact"
                                                        className="txtPhone 10digit validate"
                                                        placeholder="Contact Number"
                                                        name="contact"
                                                        value={formData.contact}
                                                        onChange={handleChange}
                                                    />
                                                    {/* <span id="errcontactno" /> */}
                                                    {errors.contact && <div className="error">{errors.contact}</div>}
                                                    {/* {<div className="success">{successMessage2}</div>} */}
                                                    {/* {successMessage && <div className="success"><spam>{successMessage2}</spam></div>} */}
                                                </div>
                                                <div className="col-md-6">
                                                    <select
                                                        //id="user_service"
                                                        className="validate"
                                                        name="service"
                                                        
                                                        onChange={handleChange}
                                                    >
                                                      <option>Select a service</option>
                                                        {services.map(service => (
                                                        <option key={service.id} value={service.name}>
                                                            {service.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    {/* <span id="errServices" /> */}
                                                </div>
                                            </div>
                                            
                                            <div className="fieldsets ">
                                                <textarea
                                                    placeholder="Message"
                                                    //id="user_message"
                                                    className="validate"
                                                    name="message"
                                                    onChange={handleChange}
                                                />
                                                {errors.message && <p className="error">{errors.message}</p>}
                                            </div>
                                            <div className="md-form mb-5">
                                                <div
                                                    className="g-recaptcha"
                                                    data-sitekey="6LdUx3MUAAAAAESf8Rbb261t-_I_sb1BBi3MWrij"
                                                />
                                                <span />
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck"
                                                    name="example1"
                                                    defaultChecked="checked"
                                                />
                                                <label
                                                    className="custom-control-label label-f-form"
                                                    htmlFor="customCheck"
                                                >
                                                    I agree to the{" "}
                                                    <NavLink to="">Terms &amp; Conditions</NavLink> of
                                                    Targeticon.
                                                </label>
                                            </div>
                                            {/* <input
                                                id="page_URL"
                                                type="hidden"
                                                defaultValue=""
                                                name="Entry"
                                            /> */}
                                            <div className="fieldsets mt20">
                                                <input
                                                    type="submit"
                                                    //id="submit"
                                                    className="ree-btn ree-btn-grdt1 w-100"
                                                    name="submit"
                                                    //onClick={handleSubmit}
                                                    defaultValue="Send your inquiry"
                                                />
                                                <div className="form-response" />
                                            </div>
                                            <p className="trm">
                                                <i className="fas fa-lock" />
                                                We hate spam, and we respect your privacy.
                                            </p>
                                            <div className="form-btm-set text-center mt15">
                                                <h5>We Deliver</h5>
                                                <div className="icon-setss mt20">
                                                    <div className="icon-rows">
                                                        <div className="icon-imgg">
                                                            <picture>
                                                                <img
                                                                    loading="lazy"
                                                                    src={BestPrice}
                                                                    className="img-fluid"
                                                                    alt="best-price"
                                                                    width={42}
                                                                    height={42}
                                                                />
                                                            </picture>
                                                        </div>
                                                        <div className="icon-txt">
                                                            <p>Best Price</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-rows">
                                                        <div className="icon-imgg">
                                                            <picture>
                                                                <img
                                                                    loading="lazy"
                                                                    src={QualityService}
                                                                    className="img-fluid"
                                                                    alt="quality-service"
                                                                    width={42}
                                                                    height={42}
                                                                />
                                                            </picture>
                                                        </div>
                                                        <div className="icon-txt">
                                                            <p>Quality Service</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-rows">
                                                        <div className="icon-imgg">
                                                            <picture>
                                                                <img
                                                                    loading="lazy"
                                                                    src={GoodSupport}
                                                                    className="img-fluid"
                                                                    alt="good-support"
                                                                    width={42}
                                                                    height={42}
                                                                />
                                                            </picture>
                                                        </div>
                                                        <div className="icon-txt">
                                                            <p>Good Support</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-rows">
                                                        <div className="icon-imgg">
                                                            <picture>
                                                                <img
                                                                    loading="lazy"
                                                                    src={Satisfaction}
                                                                    className="img-fluid"
                                                                    alt="satification"
                                                                    width={42}
                                                                    height={42}
                                                                />
                                                            </picture>
                                                        </div>
                                                        <div className="icon-txt">
                                                            <p>Satisfaction</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 icon-side">
                            <div className="get-conct-2 pera-block d-ml50">
                                <h3>Get in touch</h3>
                                <div className="contact-detalnk">
                                    <NavLink to="tel:+911204171403">
                                        <i className="fas fa-phone-alt" /><span>+91-120-4171403</span>
                                    </NavLink>
                                    <NavLink to="https://wa.me/+919818757597"  target="_blank" rel="noreferrer">
                                        <i className="fab fa-whatsapp" /> <span>+91-9818757597</span>
                                    </NavLink>
                                    <NavLink to="mailto:info@targeticon.com">
                                        <i className="fas fa-envelope" />
                                        <span>info@targeticon.com</span>
                                    </NavLink>
                                    <NavLink to="skype:target.icon?chat">
                                        <i className="fab fa-skype" /> <span>target.icon</span>
                                    </NavLink>
                                </div>
                                <h3 className="mt60">Come meet us</h3>
                                <div className="contact-detalnk">
                                    <NavLink
                                        to="https://goo.gl/maps/41xxF5oywoTKUusLA"
                                         target="_blank" rel="noreferrer"
                                        className="contact-addressii"
                                    >
                                        <i className="fas fa-map-marker-alt" />
                                        Office No: 12A01, 13<sup>th</sup> Floor, The Iconic Corenthum,
                                        <br /> A-41, Sector-62, Noida (UP) - 201301{" "}
                                    </NavLink>
                                    <NavLink to="https://goo.gl/maps/41xxF5oywoTKUusLA"  target="_blank" rel="noreferrer">
                                        <i className="fas fa-location-arrow" />{" "}
                                        <span>Get Directions</span>
                                    </NavLink>
                                </div>
                                <h3 className="mt60">Follow us</h3>
                                <ul className="footer_social mt10">
                                    <li>
                                        <NavLink
                                            to="https://www.linkedin.com/company/targeticon/"
                                             target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Linkedin Account"
                                        >
                                            <i className="fab fa-linkedin-in" aria-hidden="true" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        {" "}
                                        <NavLink
                                            to="https://www.instagram.com/targeticon_tech/?igshid=YmMyMTA2M2Y%3D"
                                             target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Instagram Profile"
                                        >
                                            <i className="fab fa-instagram" aria-hidden="true" />
                                        </NavLink>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <NavLink
                                            to="https://www.facebook.com/targeticon"
                                             target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Facebook Profile"
                                        >
                                            <i className="fab fa-facebook-f" aria-hidden="true" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="https://www.youtube.com/channel/UCb_vpek2kqoYph9uTCFbAeg"
                                             target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Youtube Channel"
                                        >
                                            <i className="fab fa-youtube" aria-hidden="true" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*contact form end*/}
        </div>
    );
};
export default FormInfo;