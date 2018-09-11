import React from 'react';

//декоратор для Аккордеона

export default (OriginalComponent) => class ToggleAccordion extends React.Component {
    state = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent
            {...this.props}
            openArticleId={this.state.openArticleId}
            toggleOpen={this.toggleOpen}
        />
    }

    //каррирование + открывание и закрывнаие статьи
    toggleOpen = openArticleId => () =>
        this.setState({openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId})
}