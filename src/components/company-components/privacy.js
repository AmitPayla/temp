import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import Intro from '../section-components/intro-v3';
import About from '../section-components/about';
import History from '../section-components/history';
import PrivacyTextView from '../section-components/privacytextview';
import Team from '../section-components/team';
import Footer from '../global-components/footer';

const PrivacyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Privacy policy"  />
        <PrivacyTextView />
        {/* <Intro />
        <About /> */}
       {/*  <History /> */}
       {/*  <Team /> */}
        <Footer />
    </div>
}

export default PrivacyPage

