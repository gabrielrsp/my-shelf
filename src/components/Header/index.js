import React from 'react';

import { Link } from 'react-router-dom';
import { FaBook, FaRegListAlt } from "react-icons/fa";

import { Container, Next } from './styles';

export default function Header() {

  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div>
          <FaBook size={35} style={{color: '#009999'}}/>
          <strong>My Shelf</strong>
        </div>
        </Link>
        <Next to="/next">
        <div>
          <FaRegListAlt size={30} style={{ color: '#009999', }}/>
          <strong>Next Books</strong>
        </div>
      </Next>
    </Container>
  );
}
