import React from "react";
// import './homepage.styles.scss';

import { HomepageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

const Homepage = () => {
    return <HomepageContainer>
        <Directory />
    </HomepageContainer>
}

export default Homepage;