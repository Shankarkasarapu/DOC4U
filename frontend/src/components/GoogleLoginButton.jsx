// src/GoogleLoginButton.js
import React from 'react';
import { auth } from './firebase'; // Import the Firebase auth module

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      // This triggers the Google login popup
      const result = await auth.signInWithPopup(provider);
      
      // The signed-in user info
      const user = result.user;
      console.log('User logged in:', user);

      // Optionally, handle any post-login actions, like redirecting
    } catch (error) {
      console.error('Error during Google login:', error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>Login with Google</button>
  );
};

export default GoogleLoginButton;
