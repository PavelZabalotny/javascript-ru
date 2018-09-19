import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';
import {connect} from 'react-redux';
import {setSelectDayPicker} from '../AC/index';

class ReactSelect extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        setSelectArticles: PropTypes.func.isRequired
    };

    render() {
        const {articles, selected} = this.props;
        const options = articles.map((article) => {
            return {
                value: article.id,
                label: article.title
            };
        });

        return (
            <Select
                value={selected}
                onChange={this.handleChange}
                options={options}
                isMulti={true}
            />
        );
    }

    handleChange = selected => this.props.setSelectArticles(selected)
}

const mapStateToProps = state => ({
    articles: state.articles,
    selected: state.selected
});

const mapDispatchToProps = {
    setSelectArticles: setSelectDayPicker
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactSelect);