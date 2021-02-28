import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import Intro from '../section-components/intro-v3';
import About from '../section-components/about';
import TermsTextView from '../section-components/termstextview';
import Team from '../section-components/team';
import Footer from '../global-components/footer';

const TermsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Terms and conditions"  />
        <TermsTextView />
        <Footer />
    </div>
}

export default TermsPage

