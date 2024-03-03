import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("test case for new text",()=>{
  render(<App />);
  const text=screen.getByText(/This Is Test Example/i); // i is not important 
  expect(text).toBeInTheDocument();
})