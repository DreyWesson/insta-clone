import "./Poster.css";
import React from "react";
import ImageUpload from "./ImageUpload";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
// import { setOpen } from "../actions/modalAction";
import { actionTypes, chooseAction } from "../actions/actionTypes";

const Poster = () => {
  const { user, posts } = useSelector(({ userReducer, postReducer }) => {
    let { user } = userReducer,
      { posts } = postReducer;
    return {
      user,
      posts,
    };
  });
  const dispatch = useDispatch();
  return (
    <div className="poster">
      {user ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <div className="poster__signUpContainer">
          <Button
            className="poster__notLoggedIn"
            onClick={() => dispatch(chooseAction(true, actionTypes.SET_OPEN))}
          >
            Sign Up To Upload
          </Button>
        </div>
      )}
      {posts?.map(({ id, username, imageUrl, caption, timestamp }) => {
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
  );
};

export default Poster;
