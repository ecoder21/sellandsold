import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./Post.css";
import { database } from "../../firebase/config";
import BarLoading from "../Loading/BarLoading";
import PostCards from "../PostCards/PostCards";
import { AllPostContext } from "../../contextStore/AllPostContext";

function Posts() {
  const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts] = useState([]); // for showing all posts in Descending order of date
  let [posts2, setPosts2] = useState([]); // for showing all posts in Ascending order of date
  let [loading, setLoading] = useState(false);
  let [loading2, setLoading2] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading2(true);

    // Retrieve all posts from Firebase in descending order
    database.ref('products')
      .orderByChild('createdAt')
      .limitToLast(100) // Limit to last 100 posts, or adjust as needed
      .once('value')
      .then(snapshot => {
        let allPostsDescendingOrder = [];
        snapshot.forEach(childSnapshot => {
          const data = childSnapshot.val();
          allPostsDescendingOrder.push({
            ...data,
            id: childSnapshot.key,
          });
        });
        setPosts2(allPostsDescendingOrder.reverse()); // Reverse to get descending order
        setAllPost(allPostsDescendingOrder);
        setLoading(false);
      });

    // Retrieve all posts from Firebase in ascending order
    database.ref('products')
      .orderByChild('createdAt')
      .limitToFirst(100) // Limit to first 100 posts, or adjust as needed
      .once('value')
      .then(snapshot => {
        let allPostsAscendingOrder = [];
        snapshot.forEach(childSnapshot => {
          const data = childSnapshot.val();
          allPostsAscendingOrder.push({
            ...data,
            id: childSnapshot.key,
          });
        });
        setPosts(allPostsAscendingOrder);
        setLoading2(false);
      });

  }, [setAllPost]);

  // quickMenuCards assign all cards of post item later it will be displayed
  let quickMenuCards = posts.map((product, index) => {
    return (
      <div className="quick-menu-cards" key={index}>
        <PostCards product={product} index={index} />
      </div>
    );
  });

  let freshRecommendationCards = posts2.map((product, index) => {
    if (index < 4) {
      return (
        <div className="fresh-recommendation-card" key={index}>
          <PostCards product={product} index={index} />
        </div>
      );
    }
    return null;
  });

  return (
    <div className="postParentDiv">
      {posts && (
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <Link to="./viewmore">
              <span>View more</span>
            </Link>
          </div>
          <div className="cards">
            {loading ? <BarLoading /> : quickMenuCards}
          </div>
        </div>
      )}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="fresh-recommendation-cards cards">
          {loading2 ? <BarLoading /> : freshRecommendationCards}
        </div>
      </div>
    </div>
  );
}

export default Posts;
