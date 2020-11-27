import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import db from "../firebase";
import "./Posts.css";
import formatDate from "../time";

const Posts = ({ postId, username, imageUrl, caption, user }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId)
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });

    return () => unsubscribe();
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  // let getTime = comments.map(
  //   (comment) => formatDate(comment.timestamp?.toDate()),
  //   "date"
  // );
  // console.log(getTime);
  // formatDate(new Date(), "check");

  return (
    <>
      {username && (
        <div className="post">
          <div className="post__header">
            <Avatar className="post__avatar" alt={username} src={imageUrl} />
            <h3>{username}</h3>
          </div>
          <img className="post__image" src={imageUrl} alt="" />
          <h4 className="post__text">
            <strong>{username}:</strong> {caption}
          </h4>

          <div className="post__comments">
            {comments.length > 0 ? (
              <h2 className="post__commentsHeader">Comments</h2>
            ) : (
              console.log(comments.length)
            )}
            {comments.map((comment) => (
              <div className="post__commentContainer">
                <p key={Math.random() * 1000} className="post__comment">
                  <strong>{comment.username}: </strong> {comment.text}
                </p>
                <small>
                  {formatDate(new Date(), "checkIfToday") ===
                  formatDate(comment.timestamp?.toDate(), "checkIfToday")
                    ? formatDate(comment.timestamp?.toDate(), "isToday")
                    : formatDate(comment.timestamp?.toDate())}
                  {/* {", "}
                  {comment.timestamp?.toDate().toDateString()} */}
                </small>
              </div>
            ))}
          </div>
          <form className="post__commentBox">
            {user ? (
              <>
                <input
                  className="post__input"
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  className="post__button"
                  disabled={!comment}
                  type="submit"
                  onClick={postComment}
                >
                  Post
                </button>
              </>
            ) : (
              <>
                <input
                  className="post__inputSignup"
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  className="post__buttonSignup"
                  disabled={!comment}
                  type="submit"
                  onClick={postComment}
                >
                  SignIn to comment
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default Posts;
