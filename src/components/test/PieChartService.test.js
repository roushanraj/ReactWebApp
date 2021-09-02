import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import { PieChartComponent } from '../pie-chart-component/PieChart';

afterEach(cleanup);
test('Pie Chart Axios Service Test', async () => {
const data = {
data: [
    {"id":55,"expense":31,"aspect":"Dance"},{"id":57,"expense":70,"aspect":"Infrastructure"}]
};
mockedAxios.get(data);
render(<PieChartComponent />);
await(() => {
  expect(screen.getByText('Confrence')).toBeInTheDocument;
});
});