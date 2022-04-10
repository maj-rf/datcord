import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.chat ? undefined : 'center')};
  gap: 0.5rem;
  min-height: 50px;
  width: 100%;
  filter: opacity(${(props) => (props.offline ? '0.7' : '1')});
  .online {
    background-color: #399f59;
  }

  .offline {
    background-color: #a43d3e;
  }

  &:hover {
    background-color: ${(props) =>
      props.primary ? undefined : props.theme.hoverbg};
    filter: opacity(1);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  background-color: dimgray;
  border-radius: 50%;
  max-width: 35px;
  max-height: 35px;

  img {
    height: auto;
    width: 35px;
  }
  .status-container {
    position: absolute;
    z-index: 1;
    bottom: -1px;
    right: -1px;
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

const UserInfo = styled.div`
  p:first-child {
    font-weight: ${(props) => (props.chat ? '900' : 'normal')};
    font-size: ${(props) => (props.chat ? '1.1rem' : 'inherit')};
    color: #5765f2;
  }
`;

export { UserWrapper, ImgContainer, UserInfo };
