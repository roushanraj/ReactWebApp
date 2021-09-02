import { render, screen } from '@testing-library/react';
import { App } from './App';


test('renders App Component', () => {
  render(<App />);
  const linkElement = screen.getByText('XYZ School Info');
  expect(linkElement).toBeInTheDocument();
});
