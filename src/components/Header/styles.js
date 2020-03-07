import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  text-decoration: none;
  font-size: 30px;

  div {
    display: flex;
    align-items: center;
    text-align: right;

  }

  strong {
    margin-left: 10px;
    color: #009999
  }

`;

export const Next = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  strong {
    font-size: 20px;
    color: #009999
  }

  div {
    display: flex;
    align-items: center;
    text-align: right;
  }
`;



