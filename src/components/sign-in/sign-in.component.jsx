import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in" autoComplete="off">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        autoComplete="off" 
                        name="email" 
                        type="email" 
                        label='email' 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        autoComplete="off" 
                        name="password" 
                        type="password" 
                        label='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
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
}

export default SignIn;