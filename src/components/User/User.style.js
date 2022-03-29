import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 50px;
  .online {
    background-color: #34eb52;
  }

  .offline {
    background-color: #eb4034;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  background-color: dimgray;
  border-radius: 50%;

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
