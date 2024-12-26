import React from "react";
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <MyPost message="Hi, it's my first post" likesCount={20} />
        <MyPost message="Hi, how are you?" likesCount={30} />
      </div>
    </div>
  );
};

export default MyPosts;
