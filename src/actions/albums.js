import * as request from 'superagent'

export function addAlbum(id, title) {
    return {
        type: "ADD_ALBUM",
        payload: {
            id: id,
            title: title
        }
    }
}

export function setAlbums(arrayOfAlbums) {
    return {
        type: "SET_ALBUMS",
        payload: arrayOfAlbums
    }
}

export function getAlbums() {                                   //thunk a passed function action
    return function(dispatch) {
        request('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                dispatch(setAlbums(response.body))
            })
    }
}

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

