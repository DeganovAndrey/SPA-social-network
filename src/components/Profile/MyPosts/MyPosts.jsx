import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/MyPost";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, it's my first post", likesCount: 18 },
    { id: 2, message: "Hi, how are you?", likesCount: 45 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
