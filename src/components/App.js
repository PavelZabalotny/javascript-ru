import React from 'react';
import ArticleList from "./ArticleList";
import PropTypes from 'prop-types';
import UserForm from "./UserForm";
import Select from 'react-select';

class App extends React.Component {
    static propTypes = {
        articles: PropTypes.array
    };
    state = {
        selectedOption: null
    };
    render() {
        const {articles} = this.props;
        const title = articles.map((item) => {
            return {
                value: item.title,
                label: item.title
            };
        });
        console.log(title);

        return (
            <React.Fragment>
                <UserForm/>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={title}
                    isMulti
                />
                <ArticleList articles={articles}/>
            </React.Fragment>
        )
    }
    handleChange = selectedOption => this.setState({selectedOption})
}

export default App