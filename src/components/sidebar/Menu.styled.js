import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #8898aa;
  height: 15%;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  opacity: 0.8;
  transition: transform 0.4s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 1090px) {
    height: 10%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #f28f3b;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 870px) {
      font-size: 1rem;
      text-align: center;
      flex-wrap: wrap;
    }

    &:hover {
      color: #c8553d;
      font-weight: bold;
    }
  }
`;
