import React from 'react';
import './App.css'; // Import Dashboard-specific CSS
import { Link } from 'react-router-dom';
import image from '../src/Images/rashi.jpg'; 
import post1 from '../src/Images/post1.jpg'; 
import post2 from '../src/Images/post2.jpg'; 
import nandana from '../src/Images/nandana.jpg'; 
import john from '../src/Images/john.png'; 

function Tweet({ username, content }) {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <span className="username">{username}</span>
      </div>
      <div className="tweet-content">{content}</div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          className="profile-image"
          src={image}
          alt="Profile"
        />
        <div className="profile-info">
          <span className="profile-name">Mohammed Rashid M</span>
          <span className="profile-handle">@rashi_sha</span>
        </div>
      </div>
      <div className="sidebar-links">
        <Link to="/dashboard" className="sidebar-link">Home</Link>
        <Link to="/dashboard/profile" className="sidebar-link">Profile</Link> {/* Update this link */}
        <Link to="/dashboard/settings" className="sidebar-link">Settings</Link>
      </div>
    </div>
  );
}

function Feed() {
  const posts = [
    {
      id: 1,
      profileName: 'John Saju',
      profileImage: john, // Corrected: pass the imported image variable directly
      postImage: post1, // Corrected: pass the imported image variable directly
      caption: 'This is a beautiful view!',
      likes: 128,
      comments: [
        { id: 1, user: 'Nandana Mariam', comment: 'Amazing!' },
        { id: 2, user: 'Parvathi', comment: 'Love it!' }
      ]
    },
    {
      id: 2,
      profileName: 'Nandana Mariam Peter',
      profileImage: nandana, // Corrected: pass the imported image variable directly
      postImage: post2, // Corrected: pass the imported image variable directly
      caption: 'Fun day at the beach 🏖️',
      likes: 75,
      comments: [
        { id: 1, user: 'Sarassu Selva', comment: 'Looks awesome!' }
      ]
    }
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img className="profile-image" src={post.profileImage} alt="Profile" />
            <h3 className="profile-name">{post.profileName}</h3>
          </div>
          <img className="post-image" src={post.postImage} alt="Post" />
          <div className="post-details">
            <p className="caption"><strong>{post.profileName}</strong>: {post.caption}</p>
            <div className="actions">
              <button className="like-button">Like ({post.likes})</button>
              <button className="comment-button">Comment ({post.comments.length})</button>
            </div>
            <div className="comments">
              {post.comments.map((comment) => (
                <p key={comment.id}><strong>{comment.user}</strong>: {comment.comment}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Dashboard;
