import React from 'react';
import ArticleList from "./ArticleList";
import PropTypes from 'prop-types';
import UserForm from "./UserForm";

class App extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                    id: PropTypes.string,
                    date: PropTypes.string,
                    title: PropTypes.string,
                    text: PropTypes.string,
                    comments: PropTypes.array
                }
            )
        )
    };

    render() {
        const {articles} = this.props;
        return (
            <React.Fragment>
                <UserForm/>
                <ArticleList articles={articles}/>
            </React.Fragment>
        )
    }
}

export default App