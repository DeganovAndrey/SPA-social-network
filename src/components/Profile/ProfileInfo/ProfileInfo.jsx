import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="http://printwalls.ru/assets/cache_image/products/2309/fotooboi-priroda-lesa-kupit-0149_846x550_c8f.jpg"
          alt="wallpaper"
        />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
