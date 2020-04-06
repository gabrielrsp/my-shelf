import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

  return (
    <>
        <h1>Sign In</h1>
        <form>
        <input placeholder="Full Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>

          <button type="submit">Create Account</button>
          <Link to="/">Already have an Account</Link>
        </form>
    </>
  );
}

export default SignUp;
