import styled from 'styled-components';

export const ChannelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .channel-head {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;

    li {
      padding: 0.25rem;
      cursor: pointer;
      margin-left: 0.2rem;
      margin-right: 0.2rem;

      span {
        color: #6e7278;
        font-size: 1.2rem;
        vertical-align: middle;
      }
    }
    & li:hover {
      background-color: ${(props) => props.theme.hoverbg};
      color: ${(props) => props.theme.hovertxt};
    }
  }

  .user-div {
    padding: 0.5rem 1rem;
    border-top: 1px solid ${(props) => props.theme.secondary};
    display: flex;
  }

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;
