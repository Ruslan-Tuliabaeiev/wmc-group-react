import styled from '@emotion/styled'


export const NavigationBlock = styled.nav`
  background-color: rgba(159, 156, 156, 0.55);

`;


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
  //margin-bottom: 20px;
  text-decoration: none;
`;

export const NavigationItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: rgba(136, 104, 10, 0.586);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
  transition: all 0.3s ease-in-out;
  border-style: none;
text-decoration: none;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    background-color: rgba(136, 104, 10, 0.794);
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 8px 10px -6px rgba(0, 0, 0, .15);
  }
`;
