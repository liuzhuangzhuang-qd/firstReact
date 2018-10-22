import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST } from './actiontype'

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