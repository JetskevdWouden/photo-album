import * as request from 'superagent'

export function setPhotos(arrayOfPhotos) {
    return {
        type: 'SET_PHOTOS',
        payload: {
            photos: arrayOfPhotos
        }
    }
}

export function getPhotosByAlbum(albumId) {
    return function(dispatch) {
        request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`) 
        .then(response => {
            console.log("Album id:", albumId)
            console.log("RESPONSE", response.body)
            dispatch(setPhotos(response.body))
        })
    }
}

export const SET_PHOTOS = 'SET_PHOTOS'