import { GET_ALL_USER, GET_ALL_POST, GET_COMMENT, GET_ALL_ALBUMS, GET_PHOTOS } from '../types'
const initialState = {
    posts: null,
    users: null,
    comments: null,
    albums:null,
    photos:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER :
            return{
                ...state,
                users: action.payload
            }
        case GET_ALL_POST :
            return {
                ...state,
                posts: action.payload
            }   
        case GET_COMMENT :
            return {
                ...state,
                comments: action.payload
            }   
        case GET_ALL_ALBUMS :
            return {
                ...state,
                albums: action.payload
            } 
        case GET_PHOTOS :
            return {
                ...state,
                photos: action.payload
            }         
        default:
            return state;
    }
}
export default reducer