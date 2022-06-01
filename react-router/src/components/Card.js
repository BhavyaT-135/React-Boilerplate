import React from "react";
import { useSearchParams } from "react-router-dom";

class Card extends React.Component {

    state = { user: '' }

    componentDidMount() {
        let user = this.props.match.params.user
        console.log(this.props)
        this.setState({ user: user })
    }

    render() {
        const { user } = this.state
        return (
            <div
                className='ui raised very padded text container segment'
                style={{ marginTop: '80px' }}
            >
                <h3 className='ui header'>{user}</h3>
            </div >
        )
    }
}

export default Card;