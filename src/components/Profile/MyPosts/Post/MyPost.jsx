import React from "react";
import s from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/736x/af/22/a2/af22a20c3c6536117253e0419b466c24.jpg"
        alt="ava"
      />
      {props.message}

      <div>
        <span>likes </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default MyPost;
