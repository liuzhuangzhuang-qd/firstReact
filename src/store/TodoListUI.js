import React from 'react'
import { Input, Button, List  } from 'antd';

// 无状态函数代替class TodoListUI extends Component{} ，更简洁
const TodoListUI = (props) => {
    return(
        <div style={{width: '500px',padding: '20px'}}>
            <Input
                value={props.inputValue}
                placeholder="Basic usage"
                style={{width: '300px',marginRight: '20px'}}
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{marginTop: '20px'}}
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item value={index} key={item} onClick={() => (props.handleItemDelete(index))}>{item}</List.Item>)}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{width: '500px',padding: '20px'}}>
//                 <Input
//                     value={this.props.inputValue}
//                     placeholder="Basic usage"
//                     style={{width: '300px',marginRight: '20px'}}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 <List
//                     style={{marginTop: '20px'}}
//                     // header={<div>Header</div>}
//                     // footer={<div>Footer</div>}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(item, index) => (this.props.handleItemDelete(item, index))}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI