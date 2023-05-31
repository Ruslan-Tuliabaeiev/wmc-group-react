import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
  background-color: rgba(52, 52, 52, 0.22);
`;

export const ButtonBox = styled.div`
display: flex;
`;

export const ButtonOpen = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 12px;
  color: #e17a7a;
  //float: right;
  font-size: 18px;
  font-weight: bold;
  background-color: #e7dede;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 8px 10px -6px rgba(0, 0, 0, .15);
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: black;
    background-color: #a09e9e;
    text-decoration: none;
    cursor: pointer;
  }

`;

export const WindowBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 300px;
  height: 360px;
  padding: 32px;
  background-color: #f6f5f5;
  font-size: 20px;
  border-radius: 14px;
  border: none;


`;

export const WindowButton = styled.button`
  position: relative;
  
  bottom: -20px;
  padding: 10px;
  background-color: gray;
  font-size: 14px;
  border-radius: 14px;
  border-style: none;
  color: whitesmoke;
  font-weight: bold;
  border-color: whitesmoke;

  &:hover {
    color: #d5d2d2;
    background-color: #737070;
`;


export const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #e17a7a;
  float: right;
  font-size: 28px;
  font-weight: bold;
  background-color: #e7dede;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 8px 10px -6px rgba(0, 0, 0, .15);
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: black;
    background-color: #a09e9e;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LabelNumber = styled.div`
  padding-top: 10px;
`;
export const ResultNumber = styled.p`
    margin-top: 40px;
`;


