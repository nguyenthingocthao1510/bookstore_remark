import { Component, ErrorInfo, ReactNode } from "react";
import ServerError from "../pages/error/Error500";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error: ', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <ServerError />
        }
        return <>{this.props.children}</>
    }
}

export default ErrorBoundary;