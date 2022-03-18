import styled from 'styled-components';

export const ChatSection = styled.section`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;

  .channel-name {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
  ul {
    overflow-y: auto;
    padding: 1rem;
    li {
      display: flex;
      gap: 1rem;
      padding-top: 0.5rem;
    }
  }
  .msg-container {
    padding: 0.5rem 1rem;
  }
  input {
    font-size: 1.2rem;
    min-width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.form};
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    border-radius: 7px;
  }
`;
