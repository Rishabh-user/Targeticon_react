import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/contact-us/contact-us';
import Blog from './pages/blog/blog';

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
import OracleFormsDevelopment from './services/oracle-forms-development/oracle-forms-development';
import D2fForms from './services/oracle-forms-development/d2f-forms';
import D2fReports from './services/oracle-forms-development/d2f-reports';
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


function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/hire-app-developers" element={<HireDevelopers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mobile-app-development" element={<MobileDevelopment />} />
          <Route path="/android-app-development" element={<AndroidDevelopment />} />
          <Route path="/blockchain-development" element={<BlockchianDevelopment />} />
          <Route path="/hybrid-app-development" element={<HybridDevelopment />} />
          <Route path="/ios-app-development" element={<IosDevelopment />} />
          <Route path="/xamarin" element={<Xamarin />} />
          <Route path="/web-app-development" element={<WebDevelopment />} />
          <Route path="/dot-net-development" element={<DotNetDevelopment />} />
          <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/java-development" element={<JavaDevelopment />} />
          <Route path="/php-development" element={<PhpDevelopment />} />
          <Route path="/progressive-web-app" element={<ProgressiveWebApp />} />
          <Route path="/android-application-design" element={<AndroidApplication />} />
          <Route path="/ios-application-designing" element={<IosApplication />} />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/ux-design" element={<UxDesign />} />
          <Route path="/website-application" element={<WebsiteDesigning />} />
          <Route path="/oracle-forms-development" element={<OracleFormsDevelopment />} />
          <Route path="/d2f-forms" element={<D2fForms />} />
          <Route path="/d2f-reports" element={<D2fReports />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/aws" element={<Aws />} />
          <Route path="/azure-cloud-migration" element={<Azure />} />
          <Route path="/js-stack-development" element={<JsStactDevelopment />} />
          <Route path="/mean-stack" element={<MeanStack />} />
          <Route path="/react-js" element={<ReactJs />} />
          <Route path="/enterprise-integration" element={<Enterprise />} />
          <Route path="/ms-crm" element={<MsCrm />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/sharepoint" element={<Sharepoint />} />
          <Route path="/banking-finance" element={<BankingFinance />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/logistics-business" element={<Logistics />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/media-advertising" element={<Media />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/travel-social" element={<TravelSocial />} />




        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
