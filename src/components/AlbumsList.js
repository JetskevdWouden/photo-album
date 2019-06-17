import * as React from 'react'

function AlbumsList(props) {
    return (
        <div>
            <h1>All Albums</h1>
            
            There are { props.albums.length } albums available.

            {props.albums.map(album => 
                <li key={album.id}>{album.title}</li>
                )}
        </div>
    )
}

export default AlbumsList