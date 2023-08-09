import React from "react";
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Zanducare from '../assets/images/brand-logo/customer-logo-1.png'
import Olivaclinic from '../assets/images/brand-logo/customer-logo-2.png'
import Organicindia  from '../assets/images/brand-logo/organicindia.png';
import Fabindia  from '../assets/images/brand-logo/fabindia.png';
import AWS  from '../assets/images/brand-logo/customer-logo-7.png';
import Lucidantpolymer  from '../assets/images/brand-logo/customer-logo-6.png';
import Floordirect  from '../assets/images/brand-logo/customer-logo-5.png';
import FGLI  from '../assets/images/brand-logo/customer-logo-4.png';
import Remodelrepulic  from '../assets/images/brand-logo/customer-logo-3.png';

const TopBrandsTrustSlider = () => {
    const options = {
        items:6, 
        dots: false, 
        loop: true,       
        nav: false,
      };
    return (
        
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-12">
                        <div className="brand-title text-center mb-5">
                            <h4>The World's Top Brands Trust Us</h4>
                        </div>
                        <OwlCarousel options={options}>                             
                            <div className="item">
                                <picture>
                                    <img loading="lazy" 
                                    srcSet={Zanducare} 
                                    className="img-fluid" 
                                    alt="Zandu Care" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Olivaclinic} className="img-fluid" alt="Oliva" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Remodelrepulic} className="img-fluid" alt="Remodel Republic" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={FGLI} className="img-fluid" alt="Future Generali" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Floordirect} className="img-fluid" alt="Floor Direct" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Lucidantpolymer} className="img-fluid" alt="Lucidant Polymers" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={AWS} className="img-fluid" alt="AWS" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Organicindia} className="img-fluid" alt="organicindia" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <img loading="lazy" srcSet={Fabindia} className="img-fluid" alt="fabindia" width={175}
                                        height={50}
                                    />
                                </picture>
                            </div>
                        </OwlCarousel>
                        
                    </div>
                </div>
            </div>
      
    );
};
export default TopBrandsTrustSlider;