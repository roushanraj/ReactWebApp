import { render, screen } from '@testing-library/react';
import { PieChartComponent } from '../pie-chart-component/PieChart';



test('renders Pie Chart Component', () => {
  render(<PieChartComponent/>);
  const linkElement = screen.getByText('Note! Figures in Thousand INR.');
  expect(linkElement).toBeInTheDocument();
});