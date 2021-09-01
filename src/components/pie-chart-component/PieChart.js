// src/components/pie.rechart.js

import axios from "axios";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export class PieChartComponent extends React.Component {
    state = {
        results: []
    }
    componentDidMount() {
        axios.get(`http://localhost:9876/budget`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }
    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];


    CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].aspect} : ${payload[0].expense}%`}</label>
                </div>
            );
        }

        return null;
    };

  


    render() {
        return (
            <PieChart width={730} height={300}>
                <Pie data={this.state.results} color="#000000" dataKey="expense" nameKey="aspect" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.state.results.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}
