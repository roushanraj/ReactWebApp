import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { TableComponent } from './table-component/TableComponent';
import { BarChartComponent } from './bar-chart-component/BarChart';
import { PieChartComponent } from './pie-chart-component/PieChart';
import { Component } from 'react';


export class App extends Component{
  render()
  {
  return (
    <div className="App">
      <h1>Roushan</h1>
      <BrowserRouter>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bar-chart">BarChart</Link>
        </li>
        <li>
          <Link to="/pie-chart">PieChart</Link>
        </li>
      </ul>



   <Route exact path="/" component= {TableComponent}></Route>
   <Route path="/bar-chart" component= {BarChartComponent}></Route>
   <Route path="/pie-chart" component= {PieChartComponent}></Route>
  </BrowserRouter>
    </div>
  );
}
}

