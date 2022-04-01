import styled from 'styled-components';
//import { StyledButton } from '../../styles/sharedStyles';
const ChannelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

const ChannelHead = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
`;

const ChannelUpper = styled.div``;

const ChannelLower = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
`;

const ChannelBtn = styled.button`
  max-width: 40px;
  max-height: 40px;
`;
export {
  ChannelSection,
  ChannelHead,
  ChannelList,
  ChannelUpper,
  ChannelLower,
  ChannelBtn,
};
