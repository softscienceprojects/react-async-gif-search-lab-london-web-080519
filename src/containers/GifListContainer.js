import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = "http://api.giphy.com/v1/gifs/"
const QUERY = "search?q="
const API_KEY = "&api_key=dc6zaTOxFJmzC&rating=g"

class GifListContainer extends React.Component {

state = {
    gifs: [],
    term: ""
}

handleSearch = (value) => {
    this.setState({
        term: value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    return fetch(`${URL}${QUERY}${this.state.term}${API_KEY}`).then(resp=> resp.json()).then(gifs => this.setState({gifs: gifs.data.slice(0,3)})).catch(resp=>alert(resp))
}

componentDidMount() {
    return fetch(`${URL}${QUERY}${this.state.term}${API_KEY}`).then(resp=> resp.json()).then(gifs => this.setState({gifs: gifs.data.slice(0,3)}))
}



render() {
    return (
        <div>
            <GifSearch handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} searchTerm={this.state.term}/>
            <GifList gifs={this.state.gifs}/>
        </div>
    )
}
}

export default GifListContainer