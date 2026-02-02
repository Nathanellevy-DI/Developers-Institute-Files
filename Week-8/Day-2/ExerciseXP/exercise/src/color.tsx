import { Component } from "react";

type State = {
    favoriteColor: string;
};

export class Color extends Component<unknown, State> {
    state: State = { favoriteColor: "red" };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "yellow" });
        }, 1000);
    }

    shouldComponentUpdate(_nextProps: unknown, _nextState: State): boolean {
        return true; // поставь false для Part I, чтобы "blue" не применялся
    }

    getSnapshotBeforeUpdate(_prevProps: unknown, prevState: State) {
        console.log("in getSnapshotBeforeUpdate");
        return prevState.favoriteColor; // snapshot
    }

    componentDidUpdate(_prevProps: unknown, _prevState: State) {
        console.log("after update");
    }

    changeColor = () => {
        this.setState({ favoriteColor: "blue" });
    };

    render() {
        return (
            <>
                <h3>My favorite color is {this.state.favoriteColor}</h3>
                <button onClick={this.changeColor}>Change Color</button>
            </>
        );
    }
}

export class Child extends Component {
    componentWillUnmount() {
        alert("unmounted");
    }

    render() {
        return <h1>Hello World!</h1>;
    }
}