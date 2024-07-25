import {createSlice} from '@reduxjs/toolkit'

//3 things we need to do Here
// create and export slice
// export all reducers
// export reducer methods 

const initialState = {
    userData : null,
    status : false
}

const blogSlice = createSlice({
    name: 'Blog',
    initialState :initialState,
    reducers: {
        // Adding login session here
        // Get Login Session id

        login : (state, action) => {
            state.status = true,
            state.userData = action.payload.userData
        },

        logout : (state, action) => {
             state.status = false
             state.userData = null
        }

    }
})

export const {login, logout} = blogSlice.actions
export default blogSlice.reducer