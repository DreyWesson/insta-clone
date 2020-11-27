import { Button, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import db, { auth } from "./firebase";
import { getModalStyle, useStyles } from "./modal";
import Modal from "@material-ui/core/Modal";
import ImageUpload from "./components/ImageUpload";
import InstagramEmbed from "react-instagram-embed";

function App() {
  const [posts, setPosts] = useState([]),
    [modalStyle] = useState(getModalStyle),
    [open, setOpen] = useState(false),
    [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [openSignIn, setOpenSignIn] = useState(false),
    [user, setUser] = useState(null),
    [password, setPassword] = useState(""),
    classes = useStyles(),
    { REACT_APP_CLIENT_TOKEN, REACT_APP_ID } = process.env,
    merge = `${REACT_APP_ID}|${REACT_APP_CLIENT_TOKEN}`;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => unsubscribe();
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            const data = doc.data(),
              id = doc.id;
            return { id, ...data };
          })
        );
      });
  }, []);

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
    setOpen(false);
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => err.message);

    setOpenSignIn(false);
  };
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signUp">
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              className="app__inputs"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              className="app__inputs"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signUp">
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <Header />
      {user ? (
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
      )}
      <div className="app__posts">
        {user?.displayName ? (
          <ImageUpload username={user.displayName} />
        ) : (
          <h3 className="app__notLoggedIn">Sign Up To Upload</h3>
        )}
        {posts.map(({ id, username, imageUrl, caption, timestamp }) => {
          return (
            <Posts
              key={id}
              postId={id}
              user={user}
              timestamp={timestamp}
              username={username}
              imageUrl={imageUrl}
              caption={caption}
            />
          );
        })}
      </div>
      <InstagramEmbed
        url="https://www.instagram.com/p/BAuc9JmQodPPZBdR1UiXg6YVR2IJ80yx-PatzE0/"
        clientAccessToken={merge}
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default App;
