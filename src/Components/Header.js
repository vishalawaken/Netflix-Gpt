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
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/LanguageSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b flex from-black z-10 justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      <div className="flex p-2">
        {showGptSearch && (
          <select
            onChange={handleLanguageChange}
            className="px-2 m-2 bg-gray-900 rounded-md text-white"
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleGptSearchClick}
          className="px-4 py-2 mx-4 text-white m-2 rounded-lg bg-orange-700"
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
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
