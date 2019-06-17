import * as React from 'react'
import { Link } from 'react-router-dom'

function AlbumsList(props) {
    return (
        <div>
            <h1>All Albums</h1>
            
            There are { props.albums.length } albums available.
            {console.log("THESE PROPS HERE:", props.albums)}

            {props.albums.map(album => 
                <li key={album.id}>
                    <Link to={`albums/${album.id}`}>{album.title}</Link>
                </li>
                )}
        </div>
    )
}

export default AlbumsList