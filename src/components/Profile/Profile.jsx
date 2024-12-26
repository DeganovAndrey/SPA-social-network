import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="http://printwalls.ru/assets/cache_image/products/2309/fotooboi-priroda-lesa-kupit-0149_846x550_c8f.jpg"
          alt="wallpaper"
        />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
