import styled from 'styled-components';

const ProfileWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  background-color: ${(props) => props.theme.hovertxt};
  color: ${(props) => props.theme.body};
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 7px;

  input {
    padding: 0.2rem;
  }
`;

export { ProfileWrapper, ProfileInner };
