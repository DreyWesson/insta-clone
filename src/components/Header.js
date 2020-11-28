import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import db, { auth } from "../firebase";

const Header = () => {
  const { user, posts } = useSelector(({ userReducer, postReducer }) => {
    return { user: userReducer.user, posts: postReducer.posts };
  });
  console.log("👨‍🦱 User", user);
  console.log("📨 Posts", posts);

  // const signUp = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((authUser) => {
  //       return authUser.user.updateProfile({
  //         displayName: username,
  //       });
  //     })
  //     .catch((err) => alert(err.message));
  //   setOpen(false);
  // };
  // const signIn = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => err.message);

  //   setOpenSignIn(false);
  // };
  return (
    <div className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
          alt="insta logo"
        />
      </div>
      {/* {user ? (
        <Button type="submit" onClick={() => auth.signOut()}>
          Logout
        </Button>
      ) : (
        <div className="app__loginContainer">
          <Button type="submit" onClick={() => setOpenSignIn(true)}>
            Sign In
          </Button>
          <Button type="submit" onClick={() => setOpen(true)}>
            Sign Up
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default Header;
