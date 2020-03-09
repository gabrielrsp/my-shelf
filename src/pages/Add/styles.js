import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba (0, 0, 0.1);
    padding: 20px;
    margin: 30px auto;

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
  padding: 4px 20px;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-right: 40px;
  border-radius: 4px;
  float: right;

  &:hover {
      background: ${darken(0.03, '#009999')};
    }
`;
