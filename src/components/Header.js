import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { auth } from "../firebase";
import { setOpen, setOpenSignIn } from "../actions/modalAction";
import { setEmail, setPassword, setUsername } from "../actions/userActions";
import { getModalStyle, useStyles } from "../modal";
import Modal from "@material-ui/core/Modal";

const Header = () => {
  const dispatch = useDispatch();
  const { user, username, email, password, open, openSignIn } = useSelector(
    ({ userReducer, openReducer }) => {
      let { user, username, email, password } = userReducer,
        { open, openSignIn } = openReducer;
      return {
        user,
        username,
        email,
        password,
        open,
        openSignIn,
      };
    }
  );

  const [modalStyle] = useState(getModalStyle),
    classes = useStyles();

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));
    dispatch(setOpen(false));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => err.message);

    dispatch(setOpenSignIn(false));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => dispatch(setOpen(false))}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="header__signUp">
            <center>
              <img
                className="header__logo"
                src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
                alt="insta logo"
              />
            </center>
            <Input
              className="app__inputs"
              type="text"
              placeholder="Username"
              onChange={(e) => dispatch(setUsername(e.target.value))}
              value={username}
            />
            <Input
              className="app__inputs"
              type="email"
              placeholder="Email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={email}
            />
            <Input
              className="app__inputs"
              type="password"
              placeholder="Password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={password}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => dispatch(setOpenSignIn(false))}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="header__signUp">
            <center>
              <img
                className="header__logo"
                src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
                alt="insta logo"
              />
            </center>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={email}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={password}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>

      <div className="header">
        <div className="header__container">
          <img
            className="header__logo"
            src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
            alt="insta logo"
          />
          {user ? (
            <Button
              className="header__logoutButton"
              type="submit"
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          ) : (
            <div className="app__loginContainer">
              <Button
                type="submit"
                onClick={() => dispatch(setOpenSignIn(true))}
              >
                Sign In
              </Button>
              <Button type="submit" onClick={() => dispatch(setOpen(true))}>
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
