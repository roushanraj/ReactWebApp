import axios from "axios";
import { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export class BarChartComponent extends Component {

    state = {
        results: []
    }
    componentDidMount() {
        axios.get(`http://localhost:9876/result`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }
    render() {
        return <div style={{ width: '100vw', height: '100vh' }}>
            <h3>Student's Marks Distrubution of a given class</h3>
            <BarChart width={1000} height={400} data={this.state.results}>
                <XAxis dataKey="name" textAnchor="end"
                    sclaeToFit="true" verticalAnchor="start" interval={0} angle="-40" stroke="#000000" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 300, backgroundColor: '#ccc111' }} />
                <Legend  width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#ffffff', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="percentage" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    }
}