// src/components/pie.rechart.js

import axios from "axios";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from 'recharts';
import './PieChart.css' 

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

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <p>{`Expenditure on ${payload[0].name} : ${payload[0].value}K`}</p>
                    <p>{'percentage: '+(`${payload[0].value}`*100/294).toFixed(2)+'%'}</p>
                </div>
            );
        }     return null;
    };

        render() {
            return (
                <div class="center">
                    <PieChart width={1030} height={400}>
                        <Pie data={this.state.results} color="#000000" dataKey="expense" nameKey="aspect" cx="50%" cy="50%" outerRadius={160} fill="#8884d8" >

                            {
                                this.state.results.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                            }
                            <LabelList dataKey="expense" position="top" />
                        </Pie>

                        <Tooltip content={<this.CustomTooltip />}/>
                        <Legend align="center" />
                    </PieChart >
                    <h5 align="left">Note! Figures in Thousand INR.</h5>
                </div>
            )
        };
    }
