import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contextStore/PostContext";
import { database } from "../../firebase/config"; // Import the Realtime Database instance
import { useHistory } from "react-router";
import "./View.css";

function View() {
  let { postContent } = useContext(PostContext); // Get post content from global context
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const history = useHistory(); // For navigating to home page

  useEffect(() => {
    let { userId } = postContent;

    // Check if userId is undefined, redirect to home if true
    if (!userId) {
      history.push("/");
    } else {
      // Retrieve user details from Realtime Database
      database.ref(`users/${userId}`).once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            setUserDetails(snapshot.val());
          } else {
            // Handle the case where the user is not found
            console.log("User not found");
            setUserDetails(null);
          }
        })
        .catch(error => {
          console.error("Error fetching user details:", error);
          setUserDetails(null);
        });
    }
  }, [history, postContent]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postContent.url} alt="Product" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postContent.price}</p>
          <span>{postContent.name}</span>
          <p>{postContent.category}</p>
          <span>{postContent.createdAt}</span>
        </div>
        <div className="productDescription">
          <p className="p-bold">Product Description</p>
          <p>{postContent.description}</p>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
