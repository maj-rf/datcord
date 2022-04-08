import styled, { keyframes } from 'styled-components';
import { SunFill } from '@styled-icons/bootstrap/SunFill';
import { MoonFill } from '@styled-icons/bootstrap/MoonFill';

const moveUp = keyframes`
    0% {
      transform: translateY(30px);
    }
    100% {
    transform: translateY(0);
    }
`;

const moveDown = keyframes`
  0% {
      transform: translateY(-30px);
    }
    100% {
    transform: translateY(0);
    }
`;

const StyledNav = styled.nav`
  height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    min-height: 50px;
    min-width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.text};
    transition: 0.2s ease-in-out;
    cursor: pointer;
    overflow: auto;

    &:hover {
      border-radius: 25%;
      color: ${(props) => props.theme.hovertxt};
    }
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const LightBtn = styled(SunFill)`
  color: #f28c38;
  transition: all 1s ease-in-out;
  animation-name: ${moveUp};
  animation-duration: 1.5s;
`;

const DarkBtn = styled(MoonFill)`
  color: #9d9b84;
  transition: all 1s ease-in-out;
  animation-name: ${moveDown};
  animation-duration: 1.5s;
`;

export { StyledNav, LightBtn, DarkBtn };
