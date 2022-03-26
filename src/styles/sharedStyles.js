import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    display: block;
  }

  input {
    font-size: 1.1rem;
    width: 300px;
    padding: 0.5rem;

    &:focus {
      outline: none;
      border: 2px solid #5765f2;
    }
  }

  .pass-container {
    position: relative;
  }
  .show-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .redirect-btn {
    all: unset;
    color: #5765f2;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.submit ? '#5765f2' : props.theme.text)};
  width: ${(props) => (props.submit ? '300px' : '60px')};
  padding: 0.5rem;
  color: ${(props) => (props.submit ? '#fff' : props.theme.body)};
  font-weight: 700;

  &:hover {
    filter: brightness(0.7);
  }
`;

export { StyledSection, StyledButton, StyledForm };
