import React, {Component} from 'react';

class NewComment extends Component {
    state = {
        user: '',
        text: '',
        userBackgroundRed: '',
        textBackgroundRed: ''
    };

    render() {
        const {user, text} = this.state;
        return (
            <div>
                <input
                    type="text"
                    placeholder='user'
                    value={user}
                    onChange={this.handleUserChange}
                    style={{background: this.state.userBackgroundRed}}
                />
                <br/>
                <br/>
                <textarea
                    placeholder='text'
                    value={text}
                    onChange={this.handleTextChange}
                    style={{background: this.state.textBackgroundRed}}
                />
            </div>
        );
    }

    handleUserChange = e => {
        this.setState({
            userBackgroundRed: (e.target.value.length < 5 || e.target.value.length > 15) ?
                'red' :
                'none',
            user: e.target.value
        });
    };

    handleTextChange = e => {
        this.setState({
            textBackgroundRed: (e.target.value.length < 20 || e.target.value.length > 50) ?
                'red' :
                'none',
            text: e.target.value
        });
    };
}

export default NewComment;