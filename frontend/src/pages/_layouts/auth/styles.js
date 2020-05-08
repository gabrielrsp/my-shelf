import styled from 'styled-components';
import { darken } from 'polished';


export const SideInfo = styled.div`

  height: 500px;
  width: 350px;
  background: #009999;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: linear-gradient(135deg, #009999, #46ccbf);


    div {
      h1 {
        color : #fff;
        text-align:center;
        margin-top: 115px;
      }
      h3 {
        color : #fff;
        margin: 60px 10px;
        text-align:center;
        padding: 0 5px;
      }

      p {
        font-weight: bold;
        color : #fff;
        font-size: 16px;
        margin: 60px 10px;
        text-align:center;
        padding: 0 5px;
      }
    }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 900px;
  align-items:center;
  align-self:center;
  display: grid;
  grid-template-columns: repeat(1, 1fr 2fr);

  align-items: center;
  justify-content:center;
  background: #F0F0F5;
  border: 0;
  border-radius: 10px;
  margin-top: 30px;

`;

export const Title = styled.div`

  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  strong {
  font-size: 30px;
  margin-top: 30px;
  text-align: center;
  color: #009999;
  }

`;

export const Content = styled.div`

  margin: auto;
  display:block;
  width: 100%;
  max-width: 315px;
  justify-content:center;
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
    padding: 15px;
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
