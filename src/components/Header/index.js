import React from 'react';

import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";

import { Container } from './styles';

export default function Header() {

  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div>
          <FaBook size={35} style={{color: '#009999'}}/>
          <strong>My Shelf</strong>
        </div>
        </Link>
    </Container>
  );
}
