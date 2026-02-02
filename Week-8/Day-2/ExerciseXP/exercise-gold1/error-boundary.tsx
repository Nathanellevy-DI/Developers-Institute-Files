import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

export class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    reloadPage = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="card my-5">
                    <div className="card-body">
                        <h5 className="card-title">Something went wrong.</h5>

                        {/* для учебного задания показываем детали */}
                        <p className="mb-2">
                            <strong>{this.state.error?.name}</strong>: {this.state.error?.message}
                        </p>

                        <pre style={{ whiteSpace: "pre-wrap" }}>
              {this.state.errorInfo?.componentStack}
            </pre>

                        <button className="btn btn-primary" onClick={this.reloadPage}>
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
