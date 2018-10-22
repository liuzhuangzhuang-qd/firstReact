import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List  } from 'antd';
import store from '../store/index'
import { getInputChangeAction, handleBtnClickAction, handleItemDeleteAction } from '../store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST } from '../store/actiontype'

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
        store.subscribe(this.handleStoreChange)
        // console.log(store.getState())
    }
    render(){
        return(
            <div style={{width: '500px',padding: '20px'}}>
                <Input
                    value={this.state.inputValue}
                    placeholder="Basic usage"
                    style={{width: '300px',marginRight: '20px'}}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                <List
                    style={{marginTop: '20px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
    handleInputChange(e) {
        // const action = {
        //     // type 类型：我们要干什么
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value,
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        // console.log(e.target.value())
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
        const action = handleItemDeleteAction(index)
        store.dispatch(action)
    }
}
export default TodoLost