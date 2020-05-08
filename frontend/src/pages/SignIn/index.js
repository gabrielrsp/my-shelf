import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { motion } from 'framer-motion';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('You need to pass a email'),
  password: Yup.string()
    .required('Password is required')
});

function SignIn() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <motion.div exit={{ opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} >
      <h1>Sign In</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading...' : 'Access'}</button>
        <Link to="/register">Create Free Account</Link>
      </Form>
      </motion.div>
    </>
  );
}

export default SignIn;
