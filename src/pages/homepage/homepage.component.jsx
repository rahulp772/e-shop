import React from "react";
import { useLocation } from "react-router-dom";
import './homepage.styles.scss';

import Directory from "../../components/directory/directory.component";

const Homepage = () => {
    let location = useLocation();
    return <div className="homepage">
        <Directory />
    </div>
}

export default Homepage;