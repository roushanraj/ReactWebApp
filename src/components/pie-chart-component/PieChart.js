// src/components/pie.rechart.js

import axios from "axios";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from 'recharts';


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


    render() {
        return (
            <div class="center">
                <PieChart  width={1030} height={400}>
                    <Pie data={this.state.results} color="#000000" dataKey="expense" nameKey="aspect" cx="50%" cy="50%" outerRadius={160} fill="#8884d8" >

                        {
                            this.state.results.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                        }
                        <LabelList dataKey="expense" position="top" />
                    </Pie>
                    
                    <Tooltip  />
                    <Legend align="center" />
                </PieChart>
                <h5 align="left">Note! Figures in Thousand INR.</h5>
            </div>
        )
    };
}
