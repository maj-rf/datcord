import styled from 'styled-components';

export const UserPanelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 250px;
  padding: 0.5rem;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
