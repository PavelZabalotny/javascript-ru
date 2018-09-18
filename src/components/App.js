import React from 'react';
import ArticleList from "./ArticleList";
import PropTypes from 'prop-types';
import UserForm from "./UserForm";
import ReactSelect from './ReactSelect';
import DayPicker from './SelectDayPicker';
import Counter from './Counter'

class App extends React.Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <React.Fragment>
                <UserForm/>
                <ReactSelect />
                <Counter/>
                <DayPicker />
                <ArticleList />
            </React.Fragment>
        )
    }

}

export default App