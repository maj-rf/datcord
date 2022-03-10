import styled from 'styled-components';

export const ChannelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 200px;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;

    li {
      padding: 0.25rem;
      cursor: pointer;
    }
    & li:hover {
      background-color: ${(props) => props.theme.hoverbg};
      color: ${(props) => props.theme.hovertxt};
    }
  }
`;
