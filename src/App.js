import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelmetWrapper from './js/HelmetWrapper';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/contact-us/contact-us';
import Blog from './pages/blog/blog';
import BlogDetail from "./pages/blog/blog-detail/blog-detail";
import Career from "./pages/career/career";
import CareerDetails from "./pages/career/career-details";
import HireDevelopers from './pages/hire-app-developers/hire-app-developers';
import MobileDevelopment from './services/mobile-app-development/mobile-app-development';
import AndroidDevelopment from './services/mobile-app-development/android-app-development';
import BlockchianDevelopment from './services/mobile-app-development/blockchain-development';
import HybridDevelopment from './services/mobile-app-development/hybrid-app-development';
import IosDevelopment from './services/mobile-app-development/ios-app-development';
import Xamarin from './services/mobile-app-development/Xamarin';
import WebDevelopment from './services/web-app-development/web-app-development';
import DotNetDevelopment from './services/web-app-development/dot-net-development';
import EcommerceDevelopment from './services/web-app-development/ecommerce-development';
import JavaDevelopment from './services/web-app-development/java-development';
import PhpDevelopment from './services/web-app-development/php-development';
import ProgressiveWebApp from './services/web-app-development/progressive-web-app';
import AndroidApplication from './services/ui-ux-design/android-application-design';
import IosApplication from './services/ui-ux-design/ios-application-designing';
import UiUxDesign from './services/ui-ux-design/ui-ux-design';
import UxDesign from './services/ui-ux-design/ux-design';
import WebsiteDesigning from './services/ui-ux-design/website-designing';
import Application from './services/application/application';
import MachineLearning from './services/application/machine-learning';
import CyberSecurity from './services/application/cyber-security';
import ArtificalIntelligence from './services/application/artifical-intelligence';
import Cloud from './services/cloud/cloud';
import Aws from './services/cloud/aws';
import Azure from './services/cloud/azure-cloud-migration';
import JsStactDevelopment from './services/js-stack-development/js-stack-development';
import MeanStack from './services/js-stack-development/mean-stack';
import ReactJs from './services/js-stack-development/react-js';
import Enterprise from './services/enterprise-integration/enterprise-integration';
import MsCrm from './services/enterprise-integration/ms -crm';
import Salesforce from './services/enterprise-integration/salesforce';
import Sharepoint from './services/enterprise-integration/sharepoint';
import BankingFinance from './industry-served/banking-finance';
import Education from './industry-served/education';
import HealthCare from './industry-served/health-care';
import Insurance from './industry-served/insurance';
import Logistics from './industry-served/logistics-business';
import Manufacturing from './industry-served/manufacturing';
import Media from './industry-served/media-advertising';
import Retail from './industry-served/retail';
import TravelSocial from './industry-served/travel-social';
import Portfolio from './portfolio/index';
import FutureGeneralLife from './portfolio/future-general-life-insurance';
import GetCashForLaptop from './portfolio/get-cash-for-laptop';
import OlivaClinic from './portfolio/oliva-clinic';
import PerformanceAudition from './portfolio/performance-auditions';
import SocialLocket from './portfolio/social-locket';
import TSig from './portfolio/t-sig-ltd';
import Tstpc from './portfolio/tstpc';
import VirtuallyVocal from './portfolio/virtually-vocal';
import MicrosoftDynamics from "./services/microsoft-dynamics/microsoft-dynamics";
import BusinessCentral from './services/microsoft-dynamics/business-central';
import FinanceOperation from './services/microsoft-dynamics/finance-operation';
import MicrosoftDynamicNavision from './services/microsoft-dynamics/microsoft-dynamic-navision';
import PowerBi from './services/microsoft-dynamics/powerbi';
import ScrollToTop from './js/scroll';




function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HelmetWrapper title="Home| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Home} />} />
          <Route path="/about" element={<HelmetWrapper title="About| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={About} />} />
          <Route path="/career" element={<HelmetWrapper title="Career| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Career} />} />
          <Route path="career/career-details" element={<HelmetWrapper title="Career Details| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={CareerDetails} />} />
          <Route path="/contact-us" element={<HelmetWrapper title="Contact| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Contact} />} />
          <Route path="/hire-app-developers" element={<HelmetWrapper title="Hire App developers| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={HireDevelopers} />} />
          <Route path="/blog" element={<HelmetWrapper title="Blog| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Blog} />} />
          <Route path="blog/blog-details" element={<HelmetWrapper title="Blog Details| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={BlogDetail} />} />
          <Route path="/mobile-app-development" element={<HelmetWrapper title="Mobile App Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MobileDevelopment} />} />
          <Route path="/mobile-app-development/android-app-development" element={<HelmetWrapper title="Android App Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={AndroidDevelopment} />} />
          <Route path="/mobile-app-development/blockchain-development" element={<HelmetWrapper title="Blockchain Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={BlockchianDevelopment} />} />
          <Route path="/mobile-app-development/hybrid-app-development" element={<HelmetWrapper title="Hybrid App Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={HybridDevelopment} />} />
          <Route path="/mobile-app-development/ios-app-development" element={<HelmetWrapper title="Ios App Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={IosDevelopment} />} />
          <Route path="/mobile-app-development/xamarin" element={<HelmetWrapper title="Xamarin| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Xamarin} />} />
          <Route path="/web-app-development" element={<HelmetWrapper title="Web App Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={WebDevelopment} />} />
          <Route path="/web-app-development/dot-net-development" element={<HelmetWrapper title="Dot Net Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={DotNetDevelopment} />} />
          <Route path="/web-app-development/ecommerce-development" element={<HelmetWrapper title="Ecommerce Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={EcommerceDevelopment} />} />
          <Route path="/web-app-development/java-development" element={<HelmetWrapper title="Java Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={JavaDevelopment} />} />
          <Route path="/web-app-development/php-development" element={<HelmetWrapper title="PHP Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={PhpDevelopment} />} />
          <Route path="/web-app-development/progressive-web-app" element={<HelmetWrapper title="Progressive Web App| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={ProgressiveWebApp} />} />
          <Route path="/ui-ux-design/android-application-design" element={<HelmetWrapper title="Android Application Design| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={AndroidApplication} />} />
          <Route path="/ui-ux-design/ios-application-designing" element={<HelmetWrapper title="Ios Application Design| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={IosApplication} />} />
          <Route path="/ui-ux-design" element={<HelmetWrapper title="UI/UI Design| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={UiUxDesign} />} />
          <Route path="/ui-ux-design/ux-design" element={<HelmetWrapper title="UX Design| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={UxDesign} />} />
          <Route path="/ui-ux-design/website-Designing" element={<HelmetWrapper title="Website Designing| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={WebsiteDesigning} />} />
          <Route path="/application" element={<HelmetWrapper title="Application| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Application} />} />
          <Route path="/application/artifical-intelligence" element={<HelmetWrapper title="Artifical Intelligence| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={ArtificalIntelligence} />} />
          <Route path="/application/machine-learning" element={<HelmetWrapper title="Machine Learning| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MachineLearning} />} />
          <Route path="/application/cyber-security" element={<HelmetWrapper title="Cyber Security| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={CyberSecurity} />} />
          <Route path="/cloud" element={<HelmetWrapper title="Cloud| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Cloud} />} />
          <Route path="/cloud/aws" element={<HelmetWrapper title="AWS| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Aws} />} />
          <Route path="/cloud/azure-cloud-migration" element={<HelmetWrapper title="Azure Cloud Migiration| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Azure} />} />
          <Route path="/js-stack-development" element={<HelmetWrapper title="JS Stact Development| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={JsStactDevelopment} />} />
          <Route path="/js-stack-development/mean-stack" element={<HelmetWrapper title="Mean Stact| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MeanStack} />} />
          <Route path="/js-stack-development/react-js" element={<HelmetWrapper title="React JS| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={ReactJs} />} />
          <Route path="/enterprise-integration" element={<HelmetWrapper title="Enterprise Integration| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Enterprise} />} />
          <Route path="/enterprise-integration/ms-crm" element={<HelmetWrapper title="MS CRM| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MsCrm} />} />
          <Route path="/enterprise-integration/salesforce" element={<HelmetWrapper title="Salesforce| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Salesforce} />} />
          <Route path="/enterprise-integration/sharepoint" element={<HelmetWrapper title="Sharepoint| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Sharepoint} />} />
          <Route path="/banking-finance" element={<HelmetWrapper title="Banking Finance| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={BankingFinance} />} />
          <Route path="/education" element={<HelmetWrapper title="Education| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Education} />} />
          <Route path="/health-care" element={<HelmetWrapper title="Health Care| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={HealthCare} />} />
          <Route path="/insurance" element={<HelmetWrapper title="Insurance| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Insurance} />} />
          <Route path="/logistics-business" element={<HelmetWrapper title="Logistics Business| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Logistics} />} />
          <Route path="/manufacturing" element={<HelmetWrapper title="Manufacturing| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Manufacturing} />} />
          <Route path="/media-advertising" element={<HelmetWrapper title="Media Advertising| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Media} />} />
          <Route path="/retail" element={<HelmetWrapper title="Retail| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Retail} />} />
          <Route path="/travel-social" element={<HelmetWrapper title="Travel Social| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={TravelSocial} />} />
          <Route path="/portfolio" element={<HelmetWrapper title="Portfolio| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Portfolio} />} />
          <Route path="/portfolio/future-general-life-insurance" element={<HelmetWrapper title="Future General Life Insurance| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={FutureGeneralLife} />} />
          <Route path="/portfolio/get-cash-for-laptop" element={<HelmetWrapper title="Get Cash For Laptop| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={GetCashForLaptop} />} />
          <Route path="/portfolio/oliva-clinic" element={<HelmetWrapper title="Oliva Clinic| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={OlivaClinic} />} />
          <Route path="/portfolio/performance-audition" element={<HelmetWrapper title="Performance Audition| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={PerformanceAudition} />} />
          <Route path="/portfolio/social-locket" element={<HelmetWrapper title="Social Locket| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={SocialLocket} />} />
          <Route path="/portfolio/t-sig" element={<HelmetWrapper title="T Sig| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={TSig} />} />
          <Route path="/portfolio/tstpc" element={<HelmetWrapper title="TSTPC| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={Tstpc} />} />
          <Route path="/portfolio/virtually-vocal" element={<HelmetWrapper title="Virtually Vocal| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={VirtuallyVocal} />} />
          <Route path="/microsoft-dynamics" element={<HelmetWrapper title="Microsoft Dynamics| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MicrosoftDynamics} />} />
          <Route path="/microsoft-dynamics/business-central" element={<HelmetWrapper title="Business Central| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={BusinessCentral} />} />
          <Route path="/microsoft-dynamics/finance&operation" element={<HelmetWrapper title="Finance & Operation| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={FinanceOperation} />} />
          <Route path="/microsoft-dynamics/microsoft-dynamic-navision" element={<HelmetWrapper title="Microsoft Dynamic Navision| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={MicrosoftDynamicNavision} />} />
          <Route path="/microsoft-dynamics/power-bi" element={<HelmetWrapper title="Power BI| Mobile App Development | Portal & Software Development | Website Design in USA, India | Targeticon" component={PowerBi} />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
// const HelmetWrapper = ({ title, component: Component }) => {
//   return (
//     <React.Fragment>
//       <Helmet>
//         <title>{title}</title>
//       </Helmet>
//       <Component />
//     </React.Fragment>
//   );
// };

export default App;
