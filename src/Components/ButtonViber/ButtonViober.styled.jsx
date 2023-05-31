import styled from '@emotion/styled'

export const ButtonStyle = styled.button`
  border: none;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 60px;
  right: 20px;
  border-radius: 14px;
  border: 4px solid rgba(108, 108, 232, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  fill: white;
  width: 60px;
  height: 55px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: rgba(7, 84, 159, 0.55);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 255, .25), 0 8px 10px -6px rgba(0, 0, 255, .15);
  transition: all 0.3s ease-in-out;
  animation: pulse 2s infinite;
  cursor: pointer;

  &:hover,
  &:focus {
    color: whitesmoke;
    background-color: rgba(4, 75, 148, 0.91);
    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 255, .25), 0 8px 10px -6px rgba(0, 0, 255, .25);
    z-index: 9;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }

`;


