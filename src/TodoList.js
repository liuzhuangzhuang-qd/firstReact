import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TodeItem from './TodoItem';
import axios from 'axios'
import './style.css';

class TodoList extends Component {
    // 组件初始化时运行constructor
    // 当一个组件的state或props发生变化的时候，render函数就会重新执行
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
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        axios.get('/api/todList').then((res) => {
            console.log(res.data)
            this.setState(() => {
                return{
                    list: [...res.data],
                }
            })
        }).catch(() => {
            alert('error')
        })
    }
    // componentWillReceiveProps(){}
    // 组件被更新前执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件被更新前,会自动执行，但是在shouldComponentUpdate之后
    // 如果shouldComponentUpdate 返回时true，他才执行，false不执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    // 组件被更新完成之后执行
    componentDidUpdate(){
        console.log('componentDidUpdate')
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
                        ref={(input) => {this.input = input}}
                    />
                    <button className='firstBtn' onClick={this.handleBtnClick}>提交</button>
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
                <div key={ index + item } className='TodoListDiv'>
                    <TodeItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>
            )
        })
    }
    // input值发生变化的时候调用handleInputChange
    handleInputChange(e) {
        // 最新的写法
        // 因为方法变成异步的方法了，所以要先定义e.target.value值
        // e.target 对应元素的dom节点
        console.log(e)
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
TodoList.proptypes = {
    content: PropTypes.string
}

export default TodoList;
