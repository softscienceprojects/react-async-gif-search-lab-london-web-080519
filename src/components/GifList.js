import React from 'react'

const GifList = props => {
    // props.gifs.map(gif => <li><img src={gif.images.original.url} </li>)
    return (
        <ul>
            { props.gifs.map(gif => <li><img key={gif.id} src={gif.images.original.url} alt={gif.slug} /> </li>)}
        </ul>
    )
}

export default GifList