import React from 'react'
//import { Search } from 'semantic-ui-react'

class GifSearch extends React.Component {
    state = {}


    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>Enter a search term</label>
                <input type="text" placeholder="enter a search term" onChange={(e)=>this.props.handleSearch(e.target.value)} value={this.props.searchTerm} />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default GifSearch