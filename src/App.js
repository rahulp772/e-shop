import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from '../src/redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

function App(props) {

  const { currentUser } = useSelector((state) => state.user)
  console.log("CurrentUserState: ", currentUser);
  console.log("PROPS in APP component: ", props);

  useEffect(() => {
    const { setCurrentUser } = props;
    auth.onAuthStateChanged(async (userAuth) => {
      let user = null;
      if(userAuth) {
        user = await createUserProfileDocument(userAuth);
      }
      setCurrentUser(user);
    });
  }, []);
  
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        {/* append * to shop page to tell reqct that shoppage has nested routes */}
        <Route path='/shop/*' element={<ShopPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/signin' element={ props.currentUser ? <Navigate to='/' /> : (<SignInAndSignUpPage />)} />
        <Route exact path='*' element={<div>No Route Found</div>} />
      </Routes>
    </div>
  );
}

// using 1 way
// const mapStateToProps = (({user}) => {
//   return { currentUser: user.currentUser }
// });

//using createstructuredselector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);