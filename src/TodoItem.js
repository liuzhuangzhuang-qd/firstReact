import React, { Component } from 'react';

class TodoItem extends Component {
    // 代码一开始时运行constructor（props）{super（props）}
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
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

export default TodoItem;