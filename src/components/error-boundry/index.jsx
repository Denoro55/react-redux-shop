import React from 'react'

export default class ErrorBoundry extends React.Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        const { error } = this.state;

        if (error) return <span>Something is gone wrong!</span>;

        return this.props.children;
    }
}
