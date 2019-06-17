import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PhotoPage(props) {
    return (
        <div>
            <h1>Photos in this album</h1>

            {/* {props.photos.map(photo => <p>{photo.title}</p>)} */}
            {console.log("PROPS:", props.photos)}

            <Link to="/">Go back to index</Link>

        </div>
    )
}