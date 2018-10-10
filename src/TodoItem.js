import React, { Component } from 'react';
import PropTypes from  'prop-types'

class TodoItem extends Component {
    // 代码一开始时运行constructor（props）{super（props）}
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // 判断我的content有没有变化，有变化才去重新渲染组件，没有就不去重新渲染
    // 提升组件性能，避免没有必要的render
    shouldComponentUpdate(nextProps, nextState) {
        // 接收两个参数,nextProps 指接下来我的props会变成什么样，nextState指接下来我的State会变成什么样
        if(nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    render() {
        const { content, text } = this.props;
        return (
            // JSX -> createElement -> 虚拟dom（js 对象） -> 真实的dom
            <div onClick={this.handleClick}>
                {text} - {content}
            </div>
        )
    }
    handleClick() {
        // this.props.deleteItem 调用父级传的方法，this.props，子父级传递参数方法的
        // this.props.deleteItem(this.props.index)
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}
// PropTypes属性接收时做校验，判断类型是否正确
TodoItem.porptypes = {
    text: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}
TodoItem.defaultProps = {
    text: 'hello word'
}
export default TodoItem;