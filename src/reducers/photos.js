import { SET_PHOTOS } from '../actions/photos'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case { SET_PHOTOS } :
            return [
                ...action.payload.photos
            ]
        default:
            return reduxState;
    }
}