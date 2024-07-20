import{configureStore} from '@reduxjs/toolkit'
import todoReducer from '../ReduxSlice/TodoSlice'

export const store = configureStore({
    reducer: todoReducer
})