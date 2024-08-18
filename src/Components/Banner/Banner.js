import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Books">Books</option>
              <option value="PYQs">PYQs</option>
              <option value="Cycle">Cycle</option>
              <option value="Electronics">Electronics</option>
              <option value="Households">Households</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Books")} >Books</span>
            <span onClick={()=>setCategory("PYQs")} >PYQs</span>
            <span onClick={()=>setCategory("Cycle")} >Cycle</span>
            <span onClick={()=>setCategory("Electronics")} >Electronics</span>
            <span onClick={()=>setCategory("Households")} >Households</span>
            <span onClick={()=>setCategory("Others")} >Others</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
