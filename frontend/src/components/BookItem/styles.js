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
  background: rgba(0,0,0,0.0300);
  border-radius: 4px;
  padding: 20px;

img {

  margin-bottom: 5px;
  align-self: center;
  max-width: 250px;
  width: 175px;
  height: 260px;
}

a {
  align-self: center;
}

   strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-bottom: 20px;
    display: flex;
    justify-content: center

}

  > span {
    flex: 1;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }


  div {
  display: grid;
  }

}

`;

export const DetailsButton = styled.button`
  background: #009999;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  margin-top: 5px;
  padding: 2px;

  &:hover {
    background: ${darken(0.03, '#009999')};
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    margin: 4px;
  }

`;


export const EditButton = styled.button`
    background: #997300;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    margin-top: 5px;
    padding: 4px;

    &:hover {
      background: ${darken(0.03, '#997300')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 4px;
    }
`;


export const DeleteButton = styled.button`
    background: #b30059;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    margin-top: 5px;
    padding: 4px;

    &:hover {
      background: ${darken(0.03, '#b30059')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 4px;
    }
`;


