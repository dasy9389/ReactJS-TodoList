import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={taskName: '', tasks:[]};
  }

  myTaskChangeHandler = (event) =>{
    this.setState({taskName: event.target.value});
    // console.log('myTaskChangeHandler', event.target.value);
  }
  
  addTask = () =>{
    console.log('addTask', this.state.taskName);
    if(this.state.taskName === ''){
      return;
    }
    this.state.tasks.push(this.state.taskName); //đưa giá trị vào mảng
    this.setState({taskName: ''});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <br />
          Todo List
          <br />
          <div className='aligned'>
            <img 
              src='./assets/add.png'
              alt='Add Task'
              width='35' style={{cursor: 'pointer'}}
              title='Bấm để thêm task'
              onClick={()=>this.addTask()}
              />
              &nbsp;
            <input 
              type='text'
              value={this.state.taskName}
              onChange={this.myTaskChangeHandler} />
          </div>
          <ul style={{padding: '0'}}>
            {this.state.tasks.map((value,index)=>{
              return <li key={index}>{value}</li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
