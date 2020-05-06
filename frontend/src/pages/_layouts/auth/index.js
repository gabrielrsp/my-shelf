import React from 'react';
import PropTypes from 'prop-types';
import { FaBook } from "react-icons/fa";

import { Content, Title } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <Title >
          <FaBook size={35} style={{ color: '#009999', marginRight: '3px' }} />
          <strong> My Shelf</strong>
        </Title>
      </div>
      <Content>
        {children}
      </Content>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
