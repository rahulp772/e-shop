import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

const SignIn  = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCredentials({email: "", password: ""});
        // this.setState({email: "", password: ""});
    }

    const handleChange = async (event) => {
        const {value, name} = event.target;
        setCredentials(prevState => ({...prevState, [name]: value}));
        // this.setState({[name]: value});
    }

    return (
        <div className="sign-in" autoComplete="off">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    autoComplete="off" 
                    name="email" 
                    type="email" 
                    label='email' 
                    value={email}
                    handleChange = {handleChange}
                    required 
                />
                <FormInput 
                    autoComplete="off" 
                    name="password" 
                    type="password" 
                    label='password' 
                    value={password} 
                    handleChange={handleChange} 
                    required 
                />
                <div className="buttons">
                <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>GOOGLE SIGN IN</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;