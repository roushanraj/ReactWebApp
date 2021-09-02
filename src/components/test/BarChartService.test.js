import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';
import { BarChartComponent } from '../bar-chart-component/BarChart';



test('Bar Chart Axios Service Test', async () => {
  const data = {
    data: [
      { "name": "Dummy1", "rollNo": 1018, "standard": 8, "percentage": 83 }, { "name": "Dummy2", "rollNo": 1019, "standard": 8, "percentage": 75 }, { "name": "Dummy3", "rollNo": 1020, "standard": 8, "percentage": 82 }
    ]
  };
  mockedAxios.get(data);
  render(<BarChartComponent />);
  await (() => {
    expect(screen.getByText('Dummy2')).toBeInTheDocument;
  });
});