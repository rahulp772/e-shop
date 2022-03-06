import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log("USER ", user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInAndSignUpPage />} />
          <Route exact path='*' element={<div>No Route Found</div>} />
        </Routes>
      </div>
    );
  }
}

export default App;