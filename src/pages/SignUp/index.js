import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('You need to enter your name'),
  email: Yup.string()
  .email('Invalid email')
  .required('You need to pass an email adress'),
  password: Yup.string().min(6, 'password must be 6 characters at least')
  .required('Password is required')
});

function SignUp() {
  function handleSubmit(data){

  }

  return (
    <>
        <h1>Sign Up</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Full Name"/>
          <Input name="email" type="email" placeholder="Email"/>
          <Input name="password" type="password" placeholder="Password"/>

          <button type="submit">Create Account</button>
          <Link to="/">Already have an Account</Link>
        </Form>
    </>
  );
}

export default SignUp;
