import React, {Component} from 'react';
import Select from 'react-select';

export default class ReactSelect extends Component {
    state = {
        selectedOption: null
    };
    render() {
        const {articles} = this.props;
        const title = articles.map((article) => {
            return {
                value: article.title,
                label: article.title
            };
        });

        return (
            <div>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={title}
                    isMulti
                />
            </div>
        );
    }
    handleChange = selectedOption => this.setState({selectedOption})
}