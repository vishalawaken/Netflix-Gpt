import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b flex from-black z-10 justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      <div className="flex p-2">
        <img
          className="w-12 h-12"
          src={user?.photoURL || USER_AVATAR}
          alt="user-icon"
        ></img>
        <button onClick={handleSignOut} className="text-white font-bold">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
