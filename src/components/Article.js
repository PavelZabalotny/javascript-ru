import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

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
        console.log('---', 'update article');
        
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
                {this.getBody()}
            </div>
        )
    }

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

export default Article
