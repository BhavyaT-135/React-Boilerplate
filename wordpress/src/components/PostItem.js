import React, { Component } from 'react'

export class PostItem extends Component {
    render() {
        const { title } = this.props.post;
        return (
            <div>
                <h2>{ title }</h2>
            </div>
        )
    }
}

export default PostItem