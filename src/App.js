import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, addUser, getUser } from './firebase/firebase.utils';
import { setCurrentUser } from '../src/redux/user/user.action';

function App(props) {

  const { currentUser } = useSelector((state) => state.user)
  console.log("CurrentUserState: ", currentUser);

  useEffect(() => {

    auth.onAuthStateChanged(async (userAuth) => {
      console.log("==========>", userAuth);

      if(userAuth) {
        props.setCurrentUser(userAuth)
        let isAdded = await getUser({uid: userAuth.uid});
        if(isAdded === false) {
          await addUser({uid: userAuth.uid, displayName: userAuth.displayName, email: userAuth.email, phoneNumber: userAuth.phoneNumber, photoURL: userAuth.photoURL});
        }
      } else {
        props.setCurrentUser(null);
      }
    });
  }, [props]);

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInAndSignUpPage />} />
          <Route exact path='*' element={<div>No Route Found</div>} />
        </Routes>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => {
  return { 
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

export default connect(null, mapDispatchToProps)(App);