import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import CheckValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const dispatch=useDispatch();
 
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validate the Form Data
    const message = CheckValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : null
    );
    setErrorMessage(message);
    if (message) return;
    // Sign In /Sign Up
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s",
          })
            .then(() => {
              // Profile updated!
              // ...
             const {uid,email,displayName,photoURL}=auth.currentUser;
             dispatch(
                addUser({uid,email,displayName,photoURL})
             )
              
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message)
            });
         
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute ">
        <img className="h-screen w-screen object-cover" src="https://i.redd.it/zjgs096khv591.jpg" alt="main-image"></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 w-full md:w-3/12 bg-black my-36 mx-auto text-white right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>

        <input
          ref={password}
          className="w-full p-4 my-4 bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        ></input>

        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New To netflix ? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
