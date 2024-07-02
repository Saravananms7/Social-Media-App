import React from 'react';
import './App.css'; 
import image from '../src/Images/rashi.jpg'; // Import Profile-specific CSS

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-avatar" src={image} alt="Profile Avatar" />
        <div className="profile-info">
          <h1 className="profile-name">Mohammed Rashid M</h1>
          <p className="profile-handle">@rashi_sha</p>
        </div>
      </div>
      <div className="profile-details">
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Rashid M, a passionate web developer with a love for creating beautiful and functional web applications. 
          In my spare time, I enjoy hiking, reading, and spending time with my family.
        </p>
        <h2>Contact Information</h2>
        <p>Email: rashid.mhd2004@gmail.com</p>
        <p>Phone: +91 9645256211</p>
      </div>
    </div>
  );
}

export default Profile;
