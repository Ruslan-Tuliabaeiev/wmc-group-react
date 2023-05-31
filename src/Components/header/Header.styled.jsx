import styled from '@emotion/styled'

export const  BoxFuter = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 30, 59, 0.546);
  height: 60px;
  margin-top: -8px;
  margin-left: -8px ;
  margin-right: -8px ;
  position: relative;
`;

export const  ButtonViber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(243, 236, 249, 0.14);
  fill: #0505f8;
  border-style: none;
  width: 50px;
  height: 45px;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 8px 10px -6px rgba(0, 0, 0, .15);
  /* background-color: white; */

  &:hover,
  &:focus {
    fill: rgba(219, 214, 224, 0.704);
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .30), 0 8px 10px -6px rgba(0, 0, 0, .30);
`;


export const ButtonTelephone = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: absolute;
  right: 20xp;
  top: 0;
  right: 0;
  border-style: none;
  margin: 10px;
  top: 0;
  right: 0;
  margin: 10px;
  border-radius: 14px;
  background-color: #5a4ff367;
  transition: all 0.3s ease-in-out;
  
  &:hover,
  &:focus {

    background-color: #1f179467;
    text-decoration: none;
    cursor: pointer;
  }
`;
