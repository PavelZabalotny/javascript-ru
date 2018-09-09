import React from 'react';
import ArticleList from "./ArticleList";
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    date: PropTypes.string,
                    title: PropTypes.string,
                    text: PropTypes.string.isRequired,
                    comments: PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        user: PropTypes.string,
                        text: PropTypes.string.isRequired
                    })
                }
            )
        ).isRequired
    };

    render() {
        const {articles} = this.props;
        return (<ArticleList articles={articles}/>)
    }
}

export default App