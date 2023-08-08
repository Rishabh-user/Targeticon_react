import React, { useState, useEffect } from "react";

const FormIndustries = () => {
    const [formData, setFormData] = useState({
        name: '',
        emailaddress: '',
        phone: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        emailaddress: '',
        phone: '',
    });
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
            case 'name':
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
            case 'emailaddress':
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
            default:
                setSuccessMessage('');
                break;
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};    //change

        // ... (same as before)
        const emailaddressRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userRegex = /^[a-zA-Z]{3,20}$/i;
        const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;

        if (!formData.name.trim()) {
            isValid = false;
            newErrors.name = 'Please Enter your Full Name';
        } else if (!userRegex.test(formData.name)) {
            isValid = false;
            newErrors.name = 'Please Enter a valid Full Name (3-20 characters, only letters)';
        }

        if (!formData.emailaddress.trim()) {
            isValid = false;
            newErrors.emailaddress = 'Please Enter your Email ID';
        } else if (!emailaddressRegex.test(formData.emailaddress)) {
            isValid = false;
            newErrors.emailaddress = 'Please Enter a valid Email ID';
        }


        if (!formData.phone.trim()) {
            isValid = false;
            newErrors.phone = 'Please Enter a valid Phone Number';
        } else if (!phoneRegex.test(formData.phone)) {
            isValid = false;
            newErrors.phone = 'Please Enter a valid Phone Number';
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
                name: "",
                emailaddress: "",
                phone: "",
            });

            // Clear the errors state
            setErrors({
                name: '',
                emailaddress: '',
                phone: '',
            });
        } else {
            console.log('Form validation failed:', errors);
        }
    };
    return (
        <div>
            <div className="form-block bg-w">
                <div className="form-head">
                    <h3>Get An Estimate.</h3>
                </div>
                <div className="form-body">
                    <form id="footer_contact" onSubmit={handleSubmit}>
                        <div className="fieldsets row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    id="user_name"
                                    className="txtName validate"
                                    placeholder="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="error"><spam>{errors.name}</spam></div>}
                                {successMessage && <div className="success"><spam>{successMessage}</spam></div>}

                            </div>
                            <div className="col-md-12">
                                <input
                                    type="email"
                                    id="user_email"
                                    className="txtEmail validate"
                                    placeholder="Email Address"
                                    name="emailaddress"
                                    value={formData.emailaddress}
                                    onChange={handleChange}
                                />
                                {/* <span id="errEmail" /> */}
                                {errors.emailaddress && <div className="error">{errors.emailaddress}</div>}
                                {<div className="success"><spam>{successMessage1}</spam></div>}
                            </div>
                        </div>
                        <div className="fieldsets row">
                            <div className="col-md-12">
                                <input
                                    type="number"
                                    id="user_phone"
                                    className="txtPhone 10digit validate"
                                    placeholder="Contact Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <div className="error">{errors.phone}</div>}
                                {<div className="success"><spam>{successMessage2}</spam></div>}
                                {/* <span id="errPhoneno" /> */}
                            </div>
                        </div>
                        <div className="fieldsets row">
                            <div className="col-md-12">
                                <select id="user_service" className="validate" name="Services">
                                    <option selected="" disabled="">
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
                                placeholder="Tell us about your project*"
                                id="user_message"
                                className="validate"
                                name="message"
                                defaultValue={""}
                            />
                            {/* <span id="errMessage" className="error" /> */}
                        </div>
                        <div className="md-form mb-5">
                            <div
                                className="g-recaptcha"
                                data-sitekey="6LdUx3MUAAAAAESf8Rbb261t-_I_sb1BBi3MWrij"
                            />
                            <span />
                        </div>
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
                    </form>
                </div>
            </div>
        </div>
    );
};
export default FormIndustries;