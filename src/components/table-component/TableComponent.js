import { Component } from "react";
import './TableComponent.css';


export class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result1: [],
            budget1: [],
            loadingFlag: false,
            errorFlag: false,
        }
    }

    //GET API
    async componentDidMount() {
        this.setState({ loadingFlag: true })
        const result = await fetch("http://localhost:9876/result");
        const budget = await fetch("http://localhost:9876/budget");

        if (result.ok && budget.ok) {
            const results = await result.json();
            const Budgets = await budget.json();

            console.log(results);
            console.log(Budgets);

            this.setState({ result1: results, budget1: Budgets, loadingFlag: false });
        }
        else {
            this.setState({ errorFlag: true, loadingFlag: false });
        }
    }

    getHead() {
        var keys = [];
        for (var k in this.state.result1[0]) keys.push(k);
        console.log(keys);
        return keys;
    }

    setColor(marks){
        if (marks > 70) return "red";
        return '';
    }

    render() {
        const { loadingFlag, errorFlag } = this.state;

        if (loadingFlag) {
            return <div>
                Content loading...
            </div>
        }

        if (errorFlag) {
            return <div>
                Error while fetching the Data
            </div>
        }

        return <div>
            <h1>This is the result Table</h1>
            <table class="center" border="1">
            <thead>
                    <tr>
                        {this.getHead().map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                {this.state.result1.map(resultlist => (
                  <tbody>
                    <tr style={{ color: this.setColor(resultlist.percentage) }}>
                        <td>{resultlist.name}</td>
                        <td>{resultlist.rollNo}</td>
                        <td>{resultlist.standard}</td>
                        <td>{resultlist.percentage}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </div>
    }
}