import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <div style={{display:'flex', justifyContent:'center'}} >
    <Wrapper >
      <Content>{children} </Content>
    </Wrapper>
    </div>
  );
}

AuthLayout.propTypes = {
  children : PropTypes.element.isRequired,
};
