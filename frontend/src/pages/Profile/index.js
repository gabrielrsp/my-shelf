import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';


import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit} >
          <Input name="name" placeholder="Full name" />
          <Input name="email" type="email" placeholder="Email Adress" />

          <hr />

          <Input type="password" name="oldPassword" placeholder="Current password" />
          <Input type="password" name="password" placeholder="New password" />
          <Input type="password" name="confirmPassword" placeholder="Confirm password" />

          <button type="submit">Update Profile</button>
        </Form>

        <button type="button" onClick={handleSignOut} >Log Out </button>
      </Container>
    </motion.div>
  )
}
