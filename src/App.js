import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import db, { auth } from "./firebase";
import InstagramEmbed from "react-instagram-embed";
import { useDispatch, useSelector } from "react-redux";
import Poster from "./components/Poster";
import { actionTypes } from "./actions/actionTypes";
import { chooseAction } from "./actions/actions";

function App() {
  const { REACT_APP_CLIENT_TOKEN, REACT_APP_ID } = process.env,
    merge = `${REACT_APP_ID}|${REACT_APP_CLIENT_TOKEN}`;
  const { SET_USER, SET_POSTS } = actionTypes;

  const dispatch = useDispatch();
  const { user, username } = useSelector(({ userReducer }) => {
    let { user, username } = userReducer;
    return {
      user,
      username,
    };
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>
      authUser
        ? dispatch(chooseAction(authUser, SET_USER))
        : dispatch(chooseAction(null, SET_USER))
    );
    return () => unsubscribe();
  }, [user, username, dispatch, SET_USER]);

  useEffect(() => {
    function database() {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          dispatch(
            chooseAction(
              snapshot.docs.map((doc) => {
                const data = doc.data(),
                  id = doc.id;
                return { id, ...data };
              }),
              SET_POSTS
            )
          );
        });
    }
    database();
  }, [SET_POSTS, dispatch]);

  return (
    <div className="app">
      <Header />
      <Poster />
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
