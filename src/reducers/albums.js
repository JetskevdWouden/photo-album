import { ADD_ALBUM } from '../actions/albums'
import { SET_ALBUMS } from '../actions/albums'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case ADD_ALBUM:
            return [
                ...reduxState.concat(action.payload)
            ]
        case SET_ALBUMS:
            return [
                ...action.payload
            ]
        default:
            return reduxState
    }
}
