import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    seconds: 5,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught error", error, info);

    setInterval(() => {
      this.setState((state) => {
        return { seconds: state.seconds - 1 };
      });
    }, 1000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }

    if (this.state.hasError) {
      return (
        <h2>
          There is some error. Please wait {this.state.seconds} seconds or go
          back to <Link to="/">Home Page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
