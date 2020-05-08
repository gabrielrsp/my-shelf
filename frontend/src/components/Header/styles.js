import styled from 'styled-components';

export const Container = styled.div`

    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  background: #009999;
  padding: 0 30px;
  border-radius: 4px;
  position: sticky;
  top: 0;




  div {
    display: flex;
    align-items: center;

    strong {
      font-size: 23px;
      display: block;
      color: #FFF;
    }
  }

  a {
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
  }

`;


export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

`;


export const Profile = styled.header`

  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #e6e6e6;

    div{
    text-align: right;
    margin-right: 10px;


    strong {
      font-size: 18px;
      display: block;
      color: #FFF;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 15px;
      color: #FFF;
    }

  }

`;



