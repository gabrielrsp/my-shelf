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
  margin-bottom: 3px;
  align-self: center;
  max-width: 250px;
  width: 175px;
  height: 260px;

}

a {
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

//////////////////  ADD BOOK  //////////////////////


export const Container = styled.div`
    max-width: 700px;
   /* background: #FFF;*/
    border-radius: 4px;
    box-shadow: 0 0 20px rgba (0, 0, 0.1);
    padding: 20px;
    margin: 30px auto;
    margin-bottom : 0px;

    h1 {
      display: flex;
      justify-content: center;
      font-size: 25px;
      display: flex;
      flex-direction: row;
      color: #009999;
      margin-bottom: 20px;
    }

`;

export const Form = styled.form`
  margin: 30px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 10px 15px;
    margin: 8px;
  }

  textarea {
    padding: 10px 15px 60px 10px;
    resize: vertical;
    margin: 8px;
  }



`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background: #009999;
  border: 0;
  padding: 3px 16px;
  margin-top: 7px;
  margin-bottom: 25px;
  margin-right: 8px;
  border-radius: 4px;
  float: right;

  width: fit-content;
  display: flex;
  justify-content: right;
  align-self: center;

  &:hover {
      background: ${darken(0.03, '#009999')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 1px;
      margin-left: 8px;

    }

`;



