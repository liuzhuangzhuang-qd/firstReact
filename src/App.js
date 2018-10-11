import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './AppStyle.css'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
       show: true,
      }
      this.handleToggole = this.handleToggole.bind(this)
  }
  render() {
    return (
        <Fragment>
          <CSSTransition
          in = {this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
          onEnter={(el) => {
              el.style.color='blue'
          }}
          >
            <div>我是一个动画</div>
          </CSSTransition>
          <button onClick={this.handleToggole}>点击</button>
        </Fragment>
    );
  }
    handleToggole() {
    console.log('发生改变。。。。。。。。。。')
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default App;
