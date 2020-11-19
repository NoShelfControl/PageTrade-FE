import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #82A3A1 ;
  height: 15vh;
  width: 100vw;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  opacity: 0.8;
  transition: transform 0.4s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #F28F3B;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #C8553D ;
      font-weight: bold;
    }
  }
`;
