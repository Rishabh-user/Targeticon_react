import React, {useState} from "react";
import BestPrice from '../assets/images/icons/best-price.png';
import QualityService from '../assets/images/icons/quality-service.png';
import GoodSupport from '../assets/images/icons/good-support.png';
import Satisfaction from '../assets/images/icons/satification.png';
import { Link } from "react-router-dom";

const FormInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contact_number: '',
        skype: '',
        subject: '',
        user_service: '',
      });
      const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
        contact_number: '',
        skype: '',
        subject: '',
        user_service: '',
      });
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };
    
        if (!formData.name) {
          newErrors.name = 'Name is required';
          isValid = false;
        } else {
          newErrors.name = '';
        }
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
          isValid = false;
        } else {
          newErrors.email = '';
        }
    
        if (!formData.message) {
          newErrors.message = 'Message is required';
          isValid = false;
        } else {
          newErrors.message = '';
        }
    
        setFormErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
        if (validateForm()) {
            try {
            const response = await fetch('http://localhost/api/post_data.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        
            if (response.ok) {
                console.log('Form submitted successfully');
                // Reset the form after submission
                setFormData({
                name: '',
                email: '',
                message: '',
                contact_number: '',
                skype: '',
                subject: '',
                user_service: '',
                });
            } else {
                console.error('Form submission failed');
            }
            } catch (error) {
            console.error('An error occurred:', error);
            }
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
                                        <form  className="google-form" onSubmit={handleSubmit}>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="txtName validate"
                                                        placeholder="Full Name"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                    <span className="error">{formErrors.name}</span>
                                                    {/* <span id="errName" /> */}
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="email"
                                                        className="txtEmail validate"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                    />
                                                     <span className="error">{formErrors.email}</span>
                                                    {/* <span id="errEmail" /> */}
                                                </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="number"
                                                        id="user_phone"
                                                        className="txtPhone 10digit validate"
                                                        placeholder="Contact Number"
                                                        name="contact_number"
                                                        value={formData.contact_number}
                                                        onChange={handleInputChange}
                                                    />
                                                    {/* <span id="errPhoneno" /> */}
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        id="user_skype"
                                                        placeholder="Skype"
                                                        className="validate"
                                                        name="skype"
                                                        value={formData.skype}
                                                        onChange={handleInputChange}
                                                    />
                                                    {/* <span id="errSkype" /> */}
                                                </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        id="user_subject"
                                                        placeholder="Subject"
                                                        className="validate"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                    />
                                                    {/* <span id="errSubject" /> */}
                                                </div>
                                                <div className="col-md-6">
                                                    <select
                                                        id="user_service"
                                                        className="validate"
                                                        name="user_service"
                                                        value={formData.user_service}
                                                        onChange={handleInputChange}
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
                                                    {/* <span id="errServices" /> */}
                                                </div>
                                            </div>
                                            <div className="fieldsets">
                                                <textarea
                                                    placeholder="Message"
                                                    className="validate"
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="error">{formErrors.message}</span>
                                                {/* <span id="errMessage" className="error" /> */}
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
                                                    <Link to="preventDefault()">Terms &amp; Conditions</Link> of
                                                    Targeticon.
                                                </label>
                                            </div>
                                            
                                            <div className="fieldsets mt20">                                                
                                                <button 
                                                    type="submit" 
                                                    id="submit"
                                                    className="ree-btn ree-btn-grdt1 w-100"
                                                    name="submit"
                                                    defaultValue="Send your inquiry">Send your inquiry</button>
                                                {/* <div className="form-response" /> */}
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
                                    <Link to="tel:+911204171403">
                                        <i className="fas fa-phone-alt" /> <span>+91-120-4171403</span>
                                    </Link>
                                    <Link to="https://wa.me/+919818757597" target="_blank" rel="noreferrer">
                                        <i className="fab fa-whatsapp" /> <span>+91-9818757597</span>
                                    </Link>
                                    <Link to="mailto:info@targeticon.com">
                                        <i className="fas fa-envelope" />
                                        <span>info@targeticon.com</span>
                                    </Link>
                                    <Link to="skype:target.icon?chat">
                                        <i className="fab fa-skype" /> <span>target.icon</span>
                                    </Link>
                                </div>
                                <h3 className="mt60">Come meet us</h3>
                                <div className="contact-detalnk">
                                    <Link
                                        to="https://goo.gl/maps/41xxF5oywoTKUusLA"
                                        target="_blank"
                                        className="contact-addressii" rel="noreferrer"
                                    >
                                        <i className="fas fa-map-marker-alt" />
                                        Office No: 12A01, 13<sup>th</sup> Floor, The Iconic Corenthum,
                                        <br /> A-41, Sector-62, Noida (UP) - 201301{" "}
                                    </Link>
                                    <Link to="https://goo.gl/maps/41xxF5oywoTKUusLA" target="_blank" rel="noreferrer">
                                        <i className="fas fa-location-arrow" />{" "}
                                        <span>Get Directions</span>
                                    </Link>
                                </div>
                                <h3 className="mt60">Follow us</h3>
                                <ul className="footer_social mt30">
                                    <li>
                                        <Link
                                            to="https://www.linkedin.com/company/targeticon/"
                                            target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Linkedin Account"
                                        >
                                            <i className="fab fa-linkedin-in" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link
                                            to="https://www.instagram.com/targeticon_tech/?igshid=YmMyMTA2M2Y%3D"
                                            target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Instagram Profile"
                                        >
                                            <i className="fab fa-instagram" aria-hidden="true" />
                                        </Link>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <Link
                                            to="https://www.facebook.com/targeticon"
                                            target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Facebook Profile"
                                        >
                                            <i className="fab fa-facebook-f" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://www.youtube.com/channel/UCb_vpek2kqoYph9uTCFbAeg"
                                            target="_blank" rel="noreferrer"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Youtube Channel"
                                        >
                                            <i className="fab fa-youtube" aria-hidden="true" />
                                        </Link>
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