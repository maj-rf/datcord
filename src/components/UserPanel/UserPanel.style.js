import styled from 'styled-components';

export const UserPanelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 250px;
  padding: 0.5rem;

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    div {
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }
  }

  .online {
    background-color: #34eb52;
  }

  .offline {
    background-color: #eb4034;
  }
`;
