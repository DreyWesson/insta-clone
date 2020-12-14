import "./styles/Poster.css";
import React, { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "@material-ui/core";
import { actionTypes } from "../actions/actionTypes";
import { chooseAction } from "../actions/actions";
import { getModalStyle, useStyles } from "../modal";
import FlipMove from "react-flip-move";

export const Poster = () => {
  const { user, posts, openUpload } = useSelector(
    ({ userReducer, postReducer, openReducer }) => {
      let { user } = userReducer,
        { posts } = postReducer,
        { openUpload } = openReducer;
      return {
        user,
        posts,
        openUpload,
      };
    }
  );
  const dispatch = useDispatch();

  const [modalStyle] = useState(getModalStyle),
    classes = useStyles();
  return (
    <div className="poster">
      {user ? (
        <>
          <Modal
            open={openUpload}
            onClose={() =>
              dispatch(chooseAction(false, actionTypes.SET_OPEN_UPLOAD))
            }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <ImageUpload username={user.displayName} />
            </div>
          </Modal>
        </>
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
      <FlipMove>
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
      </FlipMove>
    </div>
  );
};

export default Poster;
