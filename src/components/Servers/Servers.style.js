import styled from 'styled-components';

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

    &:hover {
      border-radius: 25%;
      color: ${(props) => props.theme.hovertxt};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { StyledNav };
