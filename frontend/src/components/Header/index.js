import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";

import { Container, Profile, Content } from './styles';

export default function Header() {

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <Link to="/main" >
          <div>
            <FaBook size={35} style={{ color: '#fff', marginRight: '3px' }} />
            <strong>My Shelf</strong>
          </div>
        </Link>
        <aside>
          <Profile>
            <div>
              <strong>Hello, {profile.name} !</strong>
              <Link to="/profile">Profile</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
