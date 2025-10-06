import { Component, type ReactNode, type ErrorInfo } from "react";
import ErrorPage from "./Pages/ErrorPage";

interface ErrorBoundaryProps {
  children: ReactNode;  
  fallback?: ReactNode;  
}

interface ErrorBoundaryState {
  hasError: boolean; 
  errorInfo:null | ErrorInfo;
  error:Error | null;    
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props:ErrorBoundaryProps){
    super(props);
    this.state={hasError:false, errorInfo:null,error:null}
  }

  // Update state if error happens
  static getDerivedStateFromError(_: Error): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  // Log the error (optional)
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({errorInfo,error})
  }

  render() {
    if (this.state.hasError) {
      // show fallback if broken
      return <ErrorPage error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    // otherwise show children
    return this.props.children;
  }
}
