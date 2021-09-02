import { render, screen } from '@testing-library/react';
import { BarChartComponent } from '../bar-chart-component/BarChart';



test('renders Bar Chart Component', () => {
  render(<BarChartComponent />);
  const linkElement = screen.getByText('Student\'s Marks Distrubution of a given class');
  expect(linkElement).toBeInTheDocument();
});