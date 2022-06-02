import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { images: [] }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=24954707-f818bc9a16a80f63b27828d98&q=${entry}&image_type=photo`)
        //console.log(response)
        this.setState({ images: response.data.hits })
        console.log(this.state.images)
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;