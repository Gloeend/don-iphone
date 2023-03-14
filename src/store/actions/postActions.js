import * as types from "../types"


export const fetchPosts = () => async dispatch => {
    const response = await axios.get('http://localhost:8000/get_posts')
    
    dispatch({
        type: types.GET_POSTS,
        payload: response
    })
}