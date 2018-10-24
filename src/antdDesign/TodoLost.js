import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index'
import { getInputChangeAction, handleBtnClickAction, handleItemDeleteAction, getTodoList } from '../store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST } from '../store/actiontype'
import TodoListUI from '../store/TodoListUI'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];
class TodoLost extends Component {
    constructor(props) {
        super(props)
        this.state =  store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
        // console.log(store.getState())
    }
    render(){
        return(
            <TodoListUI
                inputValue = {this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                list = {this.state.list}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }
    componentDidMount(){
        // axios.get('/list.json').then((res) => {
        //     let data = res.data
        //     const action = initListAction(data)
        //     console.log(action)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }
    handleInputChange(e) {
        // const action = {
        //     // type 类型：我们要干什么
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value,
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(e) {
        this.setState(store.getState())
    }
    handleBtnClick() {
        // const action = {
        //     type: ADD_LIST_ITEM,
        // }
        const action = handleBtnClickAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_LIST,
        //     index
        // }
        console.log(index)
        const action = handleItemDeleteAction(index)
        store.dispatch(action)
    }
}
export default TodoLost