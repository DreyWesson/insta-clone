import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import db from "../firebase";
import "./Posts.css";
import formatDate from "../time";
import {
  BookmarkBorderOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  SendOutlined,
} from "@material-ui/icons";

const Posts = ({ postId, username, imageUrl, caption, user, timestamp }) => {
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
  const slotInTime = (time) => {
    return formatDate(new Date(), "checkIfToday") ===
      formatDate(time, "checkIfToday")
      ? formatDate(time, "whenVsNow")
      : formatDate(time, "longTime");
  };

  return (
    <>
      {username && (
        <div className="post">
          <div className="post__header">
            <Avatar className="post__avatar" alt={username} src={imageUrl} />
            <h3>{username}</h3>
          </div>
          <img className="post__image" src={imageUrl} alt="" />

          <div className="post__icons">
            <div className="post__iconsGrouped">
              <FavoriteBorderOutlined fontSize="large" className="post__icon" />
              <ChatBubbleOutlineOutlined
                fontSize="large"
                className="post__icon"
              />
              <SendOutlined fontSize="large" className="post__icon" />
            </div>
            <BookmarkBorderOutlined fontSize="large" className="post__icon" />
          </div>

          <div className="post__content">
            <h4 className="post__contentText">
              <strong>{username}:</strong> {caption}
            </h4>
            <small className="post__contentTime">
              {slotInTime(timestamp?.toDate())}
            </small>
          </div>

          <div className="post__comments">
            {comments.length > 0 ? (
              <h2 className="post__commentsHeader">Comments</h2>
            ) : (
              console.log(`👨‍🦱${username} 📨${caption}: 🤐 no comment`)
            )}
            {comments?.map((comment) => (
              <div className="post__commentContainer">
                <p key={Math.random() * 1000} className="post__comment">
                  <strong>{comment.username}: </strong> {comment.text}
                </p>
                <small>
                  {comment.timestamp && slotInTime(comment.timestamp?.toDate())}
                  {/* {comment.timestamp?.toDate().toDateString()} */}
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
