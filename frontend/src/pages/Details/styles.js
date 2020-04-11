import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 700px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba (0, 0, 0.1);
    padding: 20px;
    margin: 30px auto;
    margin-bottom : 0px;
    background: rgba(0,0,0,0.0300);

    h2 {
      margin-bottom: 20px;
      color: #009999;
      span {
        color: #737373
      }
    }

    div {
      display: flex;
      margin-bottom: 10px;
      margin-top: 10px;
        div {

          margin-left: 20px;
          display: block;
          grid-template-columns: repeat(1, 200px) ;
          grid-gap: 10px;
          list-style: none;
          }
    }

    img {

      align-self: center;
      max-width: 250px;
      width: 175px;
      height: 260px;
      margin-bottom: 20px;
    }
`;

export const CustomButton = styled.button.attrs({type: 'submit',})`
    display: flex;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    background: #009999;
    border: 0;
    padding: 3px 10px;
    border-radius: 4px;
    justify-content: right;

    &:hover {
        background: ${darken(0.03, '#009999')};
      }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 1px;
    }

    `;





