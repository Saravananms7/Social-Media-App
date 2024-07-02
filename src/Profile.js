import React from 'react';
import './App.css'; 
import image from '../src/Images/rashi.jpg'; // Import the profile image
import post1 from '../src/Images/my1.jpg'; 
import post2 from '../src/Images/my2.jpg';

function Profile() {
  const posts = [
    {
      id: 1,
      postImage: post1,
      caption: 'IV day',
      likes: 102,
      comments: [
        { id: 1, user: 'Selva', comment: 'Nice!!' },
        { id: 2, user: 'Archana', comment: 'What a day!' }
      ]
    },
    {
      id: 2,
      postImage: post2,
      caption: 'Another beautiful day',
      likes: 76,
      comments: [
        { id: 1, user: 'Maria', comment: '7-2 What a match!!' }
      ]
    }
  ];

  return (
    <div className="profile-page1">
      <div className="profile-header1">
        <img className="profile-avatar1" src={image} alt="Profile Avatar" />
        <div className="profile-info1">
          <h1 className="profile-name1">Mohammed Rashid M</h1>
          <p className="profile-handle1">@rashi_sha</p>
        </div>
      </div>
      <div className="profile-details1">
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Rashid M, a passionate web developer with a love for creating beautiful and functional web applications. 
          In my spare time, I enjoy hiking, reading, and spending time with my family.
        </p>
        <h2>Contact Information</h2>
        <p>Email: rashid.mhd2004@gmail.com</p>
        <p>Phone: +91 9645256211</p>
      </div>
      <div className="profile-posts1">
        <h2>Posts</h2>
        {posts.map(post => (
          <div className="post1" key={post.id}>
            <img className="post-image1" src={post.postImage} alt="Post" />
            <p className="caption1"><strong>@rashi_sha</strong>: {post.caption}</p>
            <div className="actions1">
              <button className="like-button1">Like ({post.likes})</button>
              <button className="comment-button1">Comment ({post.comments.length})</button>
            </div>
            <div className="comments1">
              {post.comments.map(comment => (
                <p key={comment.id}><strong>{comment.user}</strong>: {comment.comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
