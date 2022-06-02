import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        const {userId, title, body} = this.state;
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId,
            title,
            body
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        const {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>User Id</label>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.handleChange}
                        >

                        </input>
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                        >

                        </input>
                    </div>
                    <div>
                        <label>Body</label>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.handleChange}
                        >

                        </input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm; 