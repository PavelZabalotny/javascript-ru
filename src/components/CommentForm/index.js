import React, {Component} from 'react';
import './style.css'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    render() {
        const {user, text} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder='user'
                        value={user}
                        onChange={this.handleChange('user')}
                        className={this.getClassName('user')}
                    />
                    <br/>
                    <br/>
                    <textarea
                        placeholder='text'
                        value={text}
                        onChange={this.handleChange('text')}
                        className={this.getClassName('text')}
                    />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }

    handleChange = type => e => {
        const {value} = e.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ?
        'form-input_error' :
        '';
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};

export default CommentForm;