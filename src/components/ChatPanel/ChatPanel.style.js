import styled from 'styled-components';
import { Menu } from '@styled-icons/entypo/Menu';
import { Users } from '@styled-icons/fa-solid/Users';
export const ChatSection = styled.section`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  height: 100vh;
  .channel-name {
    display: flex;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    position: relative;
  }

  .showLeftCont,
  .showRightCont {
    display: none;
  }

  .showLeftCont {
    position: absolute;
    left: 0;
  }

  .showRightCont {
    position: absolute;
    right: 10px;
  }

  ul {
    flex-basis: 100%;
    overflow-y: auto;
    line-height: 1.6;

    h1 {
      padding: 0.5rem 1rem;
    }

    li {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      padding: 0 1rem;

      &:hover {
        background-color: ${(props) => props.theme.hoverbg};
      }
    }
  }
  .admin-msg {
    padding: 0.5rem;
    min-width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.form};
    color: ${(props) => props.theme.text};
    border-radius: 7px;
    display: flex;
    align-items: center;
  }
  .msg-container {
    padding: 0.5rem 1rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1.1rem;
    min-width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.form};
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    border-radius: 7px;
  }

  @media screen and (max-width: 850px) {
    .showLeftCont,
    .showRightCont {
      display: block;
    }

    .channel-name {
      padding: 0.5rem 1.8rem;
    }
  }
`;

export const MenuBtn = styled(Menu)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    filter: opacity(0.7);
  }
`;

export const UsersBtn = styled(Users)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    filter: opacity(0.7);
  }
`;
