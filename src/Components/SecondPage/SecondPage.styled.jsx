import styled from '@emotion/styled'


export const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  //height: 60vh;
  margin: 0;
  padding: 0;
`;

export const PhotoIcon = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  list-style: none;
  transition: all 0.7s ease-in-out;

&:hover {
  transform: scale(1.5);
}

`;

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
  background-color: rgba(52, 52, 52, 0.22);
`

export const ModalPhotoBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  width: 80%;
  height: 90%;
  padding: 2px;
  background-color: #f6f5f5;
  font-size: 20px;
  border-radius: 14px;
  border: none;
`;

export const ModalButtonClose = styled.button`
  position: absolute;
  top: -20px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  color: #e17a7a;
  float: right;
  padding: 3px;
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
