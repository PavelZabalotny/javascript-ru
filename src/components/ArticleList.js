import React from "react";
import Article from "./Article";
import PropTypes from "prop-types";
import toggleAccordion from "../decorators/toggleAccordeon";

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
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

export default toggleAccordion(ArticleList)