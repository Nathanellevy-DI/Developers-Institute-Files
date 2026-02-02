import {Component} from "react";

type StateType = {
    counter: number
}

export class BuggyCounter extends Component<any, any>{
    state: StateType = {
        counter: 0
    }
    incrementCount = () => {
        this.setState((prevState: StateType) => ({
            count: prevState.counter + 1
        }));
    }
    render() {
        if (this.state.counter >= 5) {
            throw new Error(`Error: ${this.state.counter}`);
        }

        return (
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                <span>{this.state.counter}</span>
                <button onClick={this.incrementCount}>+</button>
            </div>
        );
    }
}