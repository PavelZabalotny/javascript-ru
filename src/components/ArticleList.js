import React from "react";
import Article from "./Article";
import PropTypes from "prop-types";

export default class ArticleList extends React.Component {
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
    state = {
        openArticleId: null
    };

    render() {
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}><Article
                article={article}
                isOpen={article.id === this.state.openArticleId}
                toggleOpen={this.toggleOpen(article.id)}

            /></li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    //каррирование
    toggleOpen = openArticleId => () => this.setState({openArticleId})
};