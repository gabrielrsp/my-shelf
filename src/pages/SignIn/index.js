import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('You need to pass a email'),
  password: Yup.string()
  .required('Password is required')
});

function SignIn() {

  function handleSubmit(data){

  }

  return (
    <>
        <h1>Sign In</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email"/>
          <Input name="password" type="password" placeholder="Password"/>

          <button type="submit">Access</button>
          <Link to="/register">Create Free Account</Link>
        </Form>
    </>
  );
}

export default SignIn;
