import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={todoListName: props.name, taskName: '', tasks:[]};
  }

  myTaskChangeHandler = (event) =>{
    this.setState({taskName: event.target.value});
    // console.log('myTaskChangeHandler', event.target.value);
  }
  
  addTask = () =>{
    // console.log('addTask', this.state.taskName);
    if(this.state.taskName === ''){
      return;
    }
    const id= this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({id, name, done:false}); //đưa giá trị vào mảng
    this.setState({taskName: ''});
  }

  deleteTask = (id) => {
    // console.log('list', this.state.tasks);
    // console.log('delete Task', e);
    const tasks = this.state.tasks.filter((tasks) => tasks.id !== id);
    this.setState({tasks});
  }

  completeTask = (id) => {
    // console.log('completeTask',id);
    const tasks = this.state.tasks;
    tasks.forEach(task => {
      if(task.id === id){
        task.done = true;
      }
    })
    // console.log('task muon complete', tasks);
    this.setState({tasks});
  }


  render(){
    return (
      <div className="App">
        <br />
        {this.state.todoListName}
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
            {this.state.tasks.map((value,index)=>{ //de lay gia tri o contructor
                // return <li key={index}>{value}</li>
                // console.log('map', value);
                return (
                <Todo
                ref='todo' 
                key={index} 
                id={value.id} 
                value={value.name}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
                />);
            })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
