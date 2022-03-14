import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

// import './custom-button.styles.scss';

// const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
//     return <button className={`${isGoogleSignIn ? 'is-google-sign-in' : ""} ${inverted ? 'inverted' : ""} custom-button`} {...otherProps}>
//         {children}
//     </button>
// }

const CustomButton = ({children, ...props}) => {
    return <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
}

export default CustomButton;