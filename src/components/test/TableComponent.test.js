import { render, screen } from '@testing-library/react';
import { TableComponent } from '../table-component/TableComponent';



test('renders Table Component', () => {
  render(<TableComponent />);
  const linkElement = screen.getByText('Content loading...');
  expect(linkElement).toBeInTheDocument();
});