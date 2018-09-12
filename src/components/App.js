import React from 'react';
import ArticleList from "./ArticleList";
import PropTypes from 'prop-types';
import UserForm from "./UserForm";
import ReactSelect from './ReactSelect';

class App extends React.Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const {articles} = this.props;
        return (
            <React.Fragment>
                <UserForm/>
                <ReactSelect articles={articles}/>
                <ArticleList articles={articles}/>
            </React.Fragment>
        )
    }

}

export default App