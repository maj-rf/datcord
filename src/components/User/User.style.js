import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.chat ? undefined : 'center')};
  gap: 0.5rem;
  min-height: 50px;
  width: 100%;
  .online {
    background-color: #34eb52;
  }

  .offline {
    background-color: #eb4034;
  }

  &:hover {
    background-color: ${(props) =>
      props.primary ? undefined : props.theme.hoverbg};
  }
`;

const ImgContainer = styled.div`
  position: relative;
  background-color: dimgray;
  border-radius: 50%;
  max-width: 40px;
  max-height: 40px;

  img {
    height: auto;
    width: 40px;
  }
  .status-container {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 2px;
    background-color: ${(props) => props.theme.accent};
    padding: 0.15rem;
    border-radius: 50%;

    div {
      height: 10px;
      width: 10px;
      border-radius: inherit;
    }
  }
`;

export { UserWrapper, ImgContainer };
