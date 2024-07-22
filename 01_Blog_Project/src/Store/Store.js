import {configureStore} from '@reduxjs/toolkit'
import blogReducer from '../ReduxToolkit/BlogSlice'

const store = configureStore({
    reducer: blogReducer
})

export default store;