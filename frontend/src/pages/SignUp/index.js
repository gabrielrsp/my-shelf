import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('You need to enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('You need to pass an email adress'),
  password: Yup.string().min(6, 'password must be 6 characters at least')
    .required('Password is required')
});


function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1>Sign Up</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Full Name" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />

          <button type="submit">Create Account</button>
          <Link to="/">Already have an Account</Link>
        </Form>
      </motion.div>
    </>
  );
}

export default SignUp;
