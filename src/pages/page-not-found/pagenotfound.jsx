import React from "react";
import pagenotfound from '../../assets/images/pagenotfound.gif';

const PageNotFound = () => {
    return (
        <div>
            <section className="pt60 pb60 page-not-found">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="text-center">
                                <a href="http://localhost:3000/">
                                    <img
                                        src={pagenotfound}
                                        alt="Targeticon"
                                        className="img-fluid"
                                        width={800}
                                        height={600}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
export default PageNotFound;