import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';
import {connect} from 'react-redux';
import {selectReducer} from '../AC/index';

class ReactSelect extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        selectReducer: PropTypes.func.isRequired
    };

    render() {
        const {articles, selected} = this.props;
        console.log('props', this.props);
        const options = articles.map(article => ({
                value: article.id,
                label: article.title
            }
        ));

        return (
            <Select
                value={selected}
                onChange={this.handleChange}
                options={options}
                isMulti={true}
            />
        );
    }

    handleChange = selected => {
        console.log('handleChange(selected)', selected);

        return this.props.selectReducer(selected.map(option => {
            console.log('option.value', option.value);

            return option.value
        }))
    };
}

const mapStateToProps = state => ({
    articles: state.articles,
    selected: state.filters.selected
});

const mapDispatchToProps = {
    selectReducer
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactSelect);