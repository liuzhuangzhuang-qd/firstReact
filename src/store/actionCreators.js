import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST, INIT_LIST_ACTION, GET_INIT_LIST } from './actiontype'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})
export const handleBtnClickAction = (value) => ({
    type: ADD_LIST_ITEM,
})
export const handleItemDeleteAction = (index) => ({
    type: DELETE_TODO_LIST,
    index,
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data: data,
})

export const getTodoList = () => {
    return  (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}
export const getInitList = (data) => ({
    type: GET_INIT_LIST,
})