import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Wrapper, Content  } from './styles';

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

  function handleSubmit({ email, password }){
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Wrapper>
        <Content>
        <h1>Sign In</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email"/>
          <Input name="password" type="password" placeholder="Password"/>

          <button type="submit">Access</button>
          <Link to="/register">Create Free Account</Link>
        </Form>
        </Content>
      </Wrapper>
    </>
  );
}

export default SignIn;
