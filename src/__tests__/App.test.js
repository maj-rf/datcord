import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import App from '../App';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Register component', () => {
  it('component render', () => {
    render(<App />);
  });
});
