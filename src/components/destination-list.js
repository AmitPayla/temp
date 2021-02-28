import React, {useEffect} from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DestinationLIst from './section-components/destination-list';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const DestinationList = () => {
    let query = useQuery();
    let keySearch = query.get("keySearch");
    let travelType = query.get("travelType");
    useEffect(() => {
        return () => {
           query = null;
        }
    }, [1])

    return <div>
        <Navbar />
        <PageHeader headertitle="Destinations List"  />
        <DestinationLIst  keySearch={keySearch} travelType={travelType}/>
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationList

