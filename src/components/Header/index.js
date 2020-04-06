import React from 'react';

import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";

import { Container } from './styles';

export default function Header() {

  return (
    <Container>
      <Link to="/" >
        <div>
          <FaBook size={35} style={{color: '#009999', marginRight: '3px'}}/>
          <strong>My Shelf</strong>
        </div>
        </Link>
    </Container>
  );
}
