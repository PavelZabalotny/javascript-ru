import React from 'react';

//декоратор
export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        isOpen: false,
    };
    render(){
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggleOpen = {this.toggleOpen}
        />
    }
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}