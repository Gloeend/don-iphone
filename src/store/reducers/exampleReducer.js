import * as types from "../types"

const initialState = new Map()

initialState.set('test',  'some_value')

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                state
            }
        default: return state
    }
}

export default exampleReducer