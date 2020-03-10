import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { darken } from 'polished';


export const StyledLink = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
color: #fff;
`;


export const BookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

li {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

img {
  align-self: center;
  max-width: 250px;
}

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 8px;
    margin-bottom: 5px;
}

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #009999;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    &:hover {
      background: ${darken(0.03, '#009999')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 4px;
    }
  }
}

`;


export const AddButton = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 21px;
  background: #009999;
  border: 0;
  padding: 0 15px;
  margin-bottom: 25px;
  border-radius: 4px;

  justify-content: center;
  position: relative;
  text-align: center;

  display: block;
  margin-left: auto;
  margin-right: auto;


    &:hover {
      background: ${darken(0.03, '#009999')};
    }

  span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 4px;
      margin-left: 10px;

    }

`;
