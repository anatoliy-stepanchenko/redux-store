import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/errorIndicator'

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        } else {
            return this.props.children
        }
    }
}