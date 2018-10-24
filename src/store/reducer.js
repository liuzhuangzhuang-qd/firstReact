import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST, INIT_LIST_ACTION } from './actiontype'

const defaultState = {
    inputValue: '',
    list: ['11', '222', '333', '444'],
}

// redurcer 可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    // state 指的是上一次存储的数据，action 指用户传过来的那句话
    // console.log(state, action)
    if(action.type === CHANGE_INPUT_VALUE ) {
        // JSON.parse(JSON.stringify(state)) json深copy
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === ADD_LIST_ITEM ) {
        const newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue.length > 0) {
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            console.log(newState)
            return newState
        }
    }
    if (action.type === DELETE_TODO_LIST ) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1);
        return newState
    }
    if (action.type === INIT_LIST_ACTION ) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data;
        return newState
    }
    return state;
}