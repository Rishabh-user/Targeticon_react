import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BestPrice from '../assets/images/icons/best-price.png';
import QualityService from '../assets/images/icons/quality-service.png';
import GoodSupport from '../assets/images/icons/good-support.png';
import Satisfaction from '../assets/images/icons/satification.png';

const FormInfo = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        skype: '',
        message: '',
        recaptcha: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phone: '',
        skype: '',
        message: '',
        recaptcha: '',
    });
    // this is for setting the error

    const [successMessage, setSuccessMessage] = useState('');
    const [successMessage1, setSuccessMessage1] = useState('');
    const [successMessage2, setSuccessMessage2] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear the error message for the corresponding field when the user starts typing	
        setErrors({
            ...errors,
            [name]: '',
        });
        switch (name) {
            case 'username':
                if (value.trim() && /^[a-zA-Z]{3,20}$/i.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                    setSuccessMessage('correct');
                }
                else {
                    setSuccessMessage('');
                }
                break;
            case 'email':
                if (value.trim() && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                    setSuccessMessage1('correct');
                }
                else {
                    setSuccessMessage1('');
                }
                break;
            case 'phone':
                if (value.trim() && /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                    setSuccessMessage2('correct');
                }
                else {
                    setSuccessMessage2('');
                }
                break;
            case 'skype':
                if (value.trim() && /^[a-zA-Z]{3,20}$/i.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                    setSuccessMessage('correct');
                }
                else {
                    setSuccessMessage('');
                }
                break;
            // case 'message':
            //     if (value.trim() && /^.{3,}$/.test(value)) {
            //         setErrors({
            //             ...errors,
            //             [name]: '',
            //         });
            //         setSuccessMessage('correct');
            //     }
            //     else {
            //         setSuccessMessage('');
            //     }
            //     break;
            default:
                setSuccessMessage('');
                break;
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};    //change

        // ... (same as before)
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userRegex = /^[a-zA-Z]{3,20}$/i;
        const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
        const skypeRegex = /^[a-zA-Z]{3,20}$/i; // Corrected regex for skype
        const messageRegex = /^.{3,}$/; // Updated the regex for message to accept any 3 or more characters

        if (!formData.username.trim()) {
            isValid = false;
            newErrors.username = 'Please Enter your Full Name';
        } else if (!userRegex.test(formData.username)) {
            isValid = false;
            newErrors.username = 'Please Enter a valid Full Name (3-20 characters, only letters)';
        }

        if (!formData.email.trim()) {
            isValid = false;
            newErrors.email = 'Please Enter your Email ID';
        } else if (!emailRegex.test(formData.email)) {
            isValid = false;
            newErrors.email = 'Please Enter a valid Email ID';
        }


        if (!formData.phone.trim()) {
            isValid = false;
            newErrors.phone = 'Please Enter a valid Phone Number';
        } else if (!phoneRegex.test(formData.phone)) {
            isValid = false;
            newErrors.phone = 'Please Enter a valid Phone Number';
        }

        if (!formData.skype.trim()) {
            isValid = false;
            newErrors.skype = 'Please Enter your Skype ID';
        } else if (!skypeRegex.test(formData.skype)) {
            isValid = false;
            newErrors.skype = 'Please Enter a valid Skype ID (3-20 characters, only letters)';
        }

        if (!formData.message.trim()) {
            isValid = false;
            newErrors.message = 'Please Enter your Message';
        } else if (!messageRegex.test(formData.message)) {
            isValid = false;
            newErrors.message = 'Please Enter a valid Message (at least 3 characters)';
        }

        setErrors(newErrors);
        console.log('formData:', formData); // Debugging statement to log formData
        console.log('errors:', errors); // Debugging statement to log errors
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            // Submit the form data to your backend or perform other actions here
            console.log('Form submitted:', formData);

            // Reset the form fields after successful submission
            setFormData({
                username: "",
                email: "",
                phone: "",
                skype: "",
                message: "",
                recaptcha: "",
            });

            // Clear the errors state
            setErrors({
                username: '',
                email: '',
                phone: '',
                skype: '',
                message: '',
                recaptcha: '',
            });
        } else {
            console.log('Form validation failed:', errors);
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
                                                        name="username"
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.username && <div className="error">{errors.username}</div>}
                                                    {successMessage && <div className="success">{successMessage}</div>}
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
                                                    {<div className="success">{successMessage1}</div>}
                                                </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="number"
                                                        id="user_phone"
                                                        className="txtPhone 10digit validate"
                                                        placeholder="Contact Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                    {/* <span id="errPhoneno" /> */}
                                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                                    {<div className="success">{successMessage2}</div>}
                                                    {/* {successMessage && <div className="success"><spam>{successMessage2}</spam></div>} */}


                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        id="user_skype"
                                                        placeholder="Skype"
                                                        className="validate"
                                                        name="skype"
                                                    />

                                                </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        id="user_subject"
                                                        placeholder="Subject"
                                                        className="validate"
                                                        name="Subject"
                                                    />
                                                    <span id="errSubject" />
                                                </div>
                                                <div className="col-md-6">
                                                    <select
                                                        id="user_service"
                                                        className="validate"
                                                        name="Services"
                                                    >
                                                        <option value="" disabled="">
                                                            Select Service
                                                        </option>
                                                        <option>Mobile App Development</option>
                                                        <option>Web Application Development</option>
                                                        <option>UI/UX Design</option>
                                                        <option>ITES/BPO Services</option>
                                                        <option>Cloud</option>
                                                        <option>JS Stack Development</option>
                                                        <option>Oracle Forms Development</option>
                                                        <option>Enterprise Integration</option>
                                                    </select>
                                                    <span id="errServices" />
                                                </div>
                                            </div>
                                            <div className="fieldsets">
                                                <textarea
                                                    placeholder="Message"
                                                    id="user_message"
                                                    className="validate"
                                                    name="Message"
                                                    defaultValue={""}
                                                />
                                                <span id="errMessage" className="error" />
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
                                            <input
                                                id="page_URL"
                                                type="hidden"
                                                defaultValue=""
                                                name="Entry"
                                            />
                                            <div className="fieldsets mt20">
                                                <input
                                                    type="button"
                                                    id="submit"
                                                    className="ree-btn ree-btn-grdt1 w-100"
                                                    name="submit"
                                                    onClick={handleSubmit}
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
                                        <i className="fas fa-phone-alt" /> <span>+91-120-4171403</span>
                                    </NavLink>
                                    <NavLink to="https://wa.me/+919818757597" target="_blank">
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
                                        target="_blank"
                                        className="contact-addressii"
                                    >
                                        <i className="fas fa-map-marker-alt" />
                                        Office No: 12A01, 13<sup>th</sup> Floor, The Iconic Corenthum,
                                        <br /> A-41, Sector-62, Noida (UP) - 201301{" "}
                                    </NavLink>
                                    <NavLink to="https://goo.gl/maps/41xxF5oywoTKUusLA" target="_blank">
                                        <i className="fas fa-location-arrow" />{" "}
                                        <span>Get Directions</span>
                                    </NavLink>
                                </div>
                                <h3 className="mt60">Follow us</h3>
                                <ul className="footer_social mt30">
                                    <li>
                                        <NavLink
                                            to="https://www.linkedin.com/company/targeticon/"
                                            target="_blank"
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
                                            target="_blank"
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
                                            target="_blank"
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
                                            target="_blank"
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