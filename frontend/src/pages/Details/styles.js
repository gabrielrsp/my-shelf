import styled from 'styled-components';
import { darken } from 'polished';


export const MainBody = styled.body`
    max-width: 1020px;
    margin: 0 auto;

`;

export const Container = styled.div`

    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba (0, 0, 0.1);
    padding: 20px;
    margin: 30px auto;
    margin-bottom : 0px;
    background: rgba(0,0,0,0.05);

    h2 {
      margin-bottom: 20px;
        color: #666666;
      span {
      color: #009999;
      }
    }

    div {
      display: flex;
      margin-bottom: 10px;
      margin-top: 5px;
        div {
          margin-left: 5px;
          margin-right: 20px;
          display: block;
          grid-template-columns: repeat(1, 200px) ;
          grid-gap: 10px;
          list-style: none;
          }
    }
    img {
      width: 175px;
      height: 260px;
    }

`;

export const CustomButton = styled.button.attrs({ type: 'submit', })`
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


export const InputContainer = styled.div`

display: block;
h2 {
  margin-top: 20px;
  color: #009999;
}

h4 {
  margin-top: 10px;
  color: #262626;
}

div {
  display: flex;

  padding: 7px;
  background: rgba(0,0,0,0.2);
  width: 100%;
  margin-bottom: 30px;
  border-radius: 4px;
  text-align:center;
  float:left;

}

input {
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  justify-content:center;
  margin: 10px auto;
  border-radius:4px;
  cursor:pointer;
}

`;


export const FileList = styled.ul`

    width: 100%;
    border-radius: 4px;
    list-style-type: none;
    padding: 10px;
    margin: 30px auto;


  li {
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px 15px;
  margin-top: 20px;
  background: rgba(0,0,0,0.08);
  border: 0;
  border-radius: 4px;
  justify-content:center;
  }

`;


export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`

  width: fit-content;
  display: flex;
  justify-content: right;
  align-self: center;


  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background: #009999;
  border: 0;
  padding: 4px 11px;
  margin-top: 5px;
  margin-bottom: 5px;
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


export const KindleHeader = styled.div`

display: flex;
width: 100%;
justify-content: center;

h1 {
  color: #009999;
}

`;




export const DeleteButton = styled.button.attrs({
  type: 'submit',
})`

  width: fit-content;
  display: flex;
  justify-content: right;
  align-self: center;


  display: flex;
  align-items: center;
  color: #b30059;
  font-weight: bold;
  font-size: 20px;
  background: #fff;
  border: 0;
  padding: 4px 11px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 8px;
  border-radius: 4px;
  float: right;


  width: fit-content;
  display: flex;
  justify-content: right;
  align-self: center;

  &:hover {
      background: ${darken(0.05, 'rgba(0,0,0,0.1)')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 1px;
      margin-left: 8px;

    }

`;
