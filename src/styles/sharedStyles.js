import styled from 'styled-components';
import mainbg from '../assets/mainbg.jpeg';

const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${mainbg});
`;

const StyledDiv = styled.div`
  display: flex;
  max-width: 800px;
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  margin: 0 auto;
  padding: 0.5rem;
  label {
    display: block;
  }

  h2 {
    text-align: center;
  }

  input {
    background-color: ${(props) => props.theme.form};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.secondary};
    font-size: 1.1rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 7px;
    &:focus {
      outline: none;
      border: 1px solid #5765f2;
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
  width: ${(props) => (props.submit ? '100%' : '60px')};
  padding: 0.4rem;
  color: ${(props) => (props.submit ? '#fff' : props.theme.body)};
  border-radius: 5px;
  font-weight: 700;

  &:hover {
    filter: brightness(0.7);
  }
`;

export { StyledSection, StyledButton, StyledForm, StyledDiv };
