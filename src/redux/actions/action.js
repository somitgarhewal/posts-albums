import { GET_ALL_USER,  GET_ALL_POST, GET_COMMENT, GET_ALL_ALBUMS, GET_PHOTOS } from '../types'
import axios from 'axios'

export const getAllUser = () => {
    return async dispatch => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("response", response)
        dispatch({
          type: GET_ALL_USER,
          payload:response.data
        })
      }
      catch(error) {
        console.log("error occured: ",error);
      }
    }
  }
  
  export const getAllPost = () => {
    return async dispatch => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log("response posts", response)
        dispatch({
            type: GET_ALL_POST,
            payload:response.data
        })
      }
      catch(error) {
        console.log("error occured: ",error);
      }
    }
  }
   
  
  export const getComment = (postId) => {
    return async dispatch => {
      try{
        console.log("id", postId)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        console.log("response", response)
        dispatch({
          type: GET_COMMENT,
          payload:response.data
        })
      }
      catch(error) {
        console.log("error occured: ",error);
      }
    }
  }  

    export const getAllAlbums = () => {
      return async dispatch => {
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
          console.log("response albums", response)
          dispatch({
              type: GET_ALL_ALBUMS,
              payload:response.data
          })
        }
        catch(error) {
          console.log("error occured: ",error);
        }
      }
    }
  
  
    export const getPhotos = (albumId) => {
      return async dispatch => {
        try{
          console.log("id", albumId)
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${albumId}/photos`)
          console.log("response photos", response)
          dispatch({
            type: GET_PHOTOS,
            payload:response.data
          })
        }
        catch(error) {
          console.log("error occured: ",error);
        }
      }
    }  