import React from "react";
import Article from "./Article";
import PropTypes from "prop-types";
import ToggleAccordion from "../decorators/toggleAccordeon";

class ArticleList extends React.Component {
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
        const {articles, toggleOpen, openArticleId} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}><Article
                article={article}
                isOpen={article.id === openArticleId}
                toggleOpen={toggleOpen(article.id)}
            /></li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ToggleAccordion(ArticleList)