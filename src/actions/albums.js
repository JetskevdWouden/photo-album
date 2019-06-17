export function addAlbum(id, title) {
    return {
        type: "ADD_ALBUM",
        payload: {
            id: id,
            title: title
        }
    }
}

export function setAlbums(newArrayOfAlbums) {
    return {
        type: "SET_ALBUMS",
        payload: [
            ...newArrayOfAlbums
        ]
    }
}

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'