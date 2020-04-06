import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.0300);
  width: 400px;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;


  h1 {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      font-size: 25px;
      display: flex;
      flex-direction: row;
      color: #009999;
      margin-bottom: 20px;
    }

  form {

    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input{
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 015px;
    color: #009999;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(0,153,153,0.5);
    }
  }

  span {
    color: rgba(153,0,77,0.7);
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    height: 44px;
    background: #009999;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#009999')};
    }
  }

  a {
    color: #009999;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    text-decoration: none;
    margin-bottom: 30px;

    &:hover {
      opacity: 1;
    }
  }
}

`;
