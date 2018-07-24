import React from "react";
import {render} from "react-dom";
import {observer} from 'mobx-react';
import { observable, configure, action } from 'mobx';
configure({enforceActions: true});

class MyState {
  @observable num = 0;
  @action addNum = () => {
    this.num++;
  };
}

const newState = new MyState();

@observer
class App extends React.Component{

  render(){
    return (
      <div>
        <p>{newState.num}</p>
        <button onClick={newState.addNum}>+1</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
