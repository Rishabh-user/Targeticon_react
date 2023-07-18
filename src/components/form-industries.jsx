import React from "react";

const FormIndustries = () => {
    return (
        <div>
            <div className="form-block bg-w">
                <div className="form-head">
                    <h3>Get An Estimate.</h3>
                </div>
                <div className="form-body">
                    <form id="footer_contact">
                        <div className="fieldsets row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    id="user_name"
                                    className="txtName validate"
                                    placeholder="Full Name"
                                    name="name"
                                />
                                <span id="errName" />
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="email"
                                    id="user_email"
                                    className="txtEmail validate"
                                    placeholder="Email Address"
                                    name="email"
                                />
                                <span id="errEmail" />
                            </div>
                        </div>
                        <div className="fieldsets row">
                            <div className="col-md-12">
                                <input
                                    type="number"
                                    id="user_phone"
                                    className="txtPhone 10digit validate"
                                    placeholder="Contact Number"
                                    name="Phone_Number"
                                />
                                <span id="errPhoneno" />
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
                            <span id="errMessage" className="error" />
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