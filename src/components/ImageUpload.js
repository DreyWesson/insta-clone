import "./ImageUpload.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db, { storage } from "../firebase";
import firebase from "firebase";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState(""),
    [image, setImage] = useState(null),
    [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    e.target.files[0] && setImage(e.target.files[0]);
  };
  const handleUpload = (e) => {
    // Uploading the files
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressReport = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 10
        );
        setProgress(progressReport);
      },
      (err) => alert(err.message),
      () => {
        // Downloading the uploaded file
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };
  return (
    <div className="imageUpload">
      <progress
        className="imageUpload__progressBar"
        value={progress}
        max="100"
      />
      <input
        type="text"
        placeholder="Enter a caption..."
        // value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
