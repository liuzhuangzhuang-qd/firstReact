import React, { Component, Fragment } from 'react';
import TodeItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    // 组件初始化时运行constructor
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div className='firstDiv'>
                    <label htmlFor="inserArea">输入内容</label>
                    <input
                        id='inserArea'
                        className='input'
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        // 存在循环，需要加一颗key值区分，key要加载循环的最外层,key最好不要用index
        return this.state.list.map((item, index) => {
            return(
                // console.log(index + item),
                <div key={ index + item }>
                    <TodeItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>
            )
        })
    }
    handleInputChange(e) {
        // 最新的写法
        // 因为方法变成异步的方法了，所以要先定义e.target.value值
        const value = e.target.value
        this.setState(() => ({
                inputValue: value,
        })
    )
        // // 之前的写法
        // this.setState({
        // inputValue: e.target.value
        // })
    }
    handleBtnClick() {
        // prevState 修改之前的那一次数据
        this.setState((prevState) => ({
            // list: [...this.state.list, this.state.inputValue],
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }
    handleItemDelete(index) {
        // es6中（list：list） === list
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        });
    }

}

export default TodoList;
