import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {

  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input{
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 15px;
  margin: 10px 0 10px;

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

  hr {
    border: 0;
    height: 1px;
    background: rgba(119,119,119,0.7);
    margin: 10px 0;
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
          background: ${darken(0.04, '#009999')};
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


  > button {

      width: 100%;
      margin-top: 10px;
      height: 44px;
      background: #b30059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#b30059')} ;
      }
    }

`;
