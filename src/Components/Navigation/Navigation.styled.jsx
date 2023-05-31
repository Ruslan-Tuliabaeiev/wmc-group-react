import styled from '@emotion/styled'

export const Logotype = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  color: #000000;
    
`;

export const NavigationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
margin-bottom: 20px;
`;

export const NavigationItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: rgba(136, 104, 10, 0.586);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
  transition: all 0.3s ease-in-out;
  border-style: none;

  &:hover,
  &:focus {
    background-color: rgba(136, 104, 10, 0.794);
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 8px 10px -6px rgba(0, 0, 0, .15);
  }
`;
