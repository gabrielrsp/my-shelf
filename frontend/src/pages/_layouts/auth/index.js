import React from 'react';
import PropTypes from 'prop-types';
import { FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';

import { Content, Title, SideInfo, Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>

      <Title >
        <FaBook size={35} style={{ color: '#009999', marginRight: '3px' }} />
        <strong> My Shelf</strong>
      </Title>

      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Wrapper>

          <SideInfo>
            <div>
              <h1>Welcome to My Shelf!</h1>
              <p>A simple online shelf to quickly get the most important quotes and underlines from your book readings</p>
            <p>Here you can create notes from your books and add Kindle files from the ebooks you are reading </p>

            </div>
          </SideInfo>


          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <div>
            </div>
            <Content>
              {children}
            </Content>
          </motion.div>

        </Wrapper>
      </div>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
