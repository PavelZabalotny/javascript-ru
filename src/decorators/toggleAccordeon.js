import React from 'react';

//декоратор дял Аккордеона

export default (OriginalComponent) => class ToggleAccordion extends React.Component {
    state = {
        openArticleId: null
    };
    render(){
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggleOpen = {this.toggleOpen}
        />
    }
    //каррирование
    toggleOpen = openArticleId => () =>
        this.state.openArticleId === openArticleId ?
            this.setState({openArticleId: null}) :
            this.setState({openArticleId})
}