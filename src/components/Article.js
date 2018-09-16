import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import {deleteArticle} from '../AC';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    };

/*    shouldComponentUpdate(nextProps){
        return nextProps.isOpen !== this.props.isOpen
    }*/

    render() {
        //console.log('---', 'update article');
        
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
                <button onClick={this.handleDelete}>Delete Article</button>
                {this.getBody()}
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        console.log('---', 'Delete Article');

    };

    getBody = () => {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
            return (
                <section>
                    {article.text}
                    <CommentList comments={article.comments} />
                </section>
            )
    };
}

//первый аргумент null, т.к. из store ничего не нужно доставать
export default connect(null, {deleteArticle})(Article)
