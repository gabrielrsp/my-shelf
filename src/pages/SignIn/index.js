import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {

  return (
    <>
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>

          <button type="submit">Access</button>
          <Link to="/register">Create Free Account</Link>
        </form>
    </>
  );
}

export default SignIn;
