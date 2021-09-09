import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props){
    super(props);
    // console.log('props', props);
    this.state={id: props.id, value: props.value, done: props.done};
  }

  completeTask  = () =>{
    //   console.log('todo completeTask', this.props.id);
      this.setState({done:true});
      this.props.completeTask(this.props.id);
  }

   render(){
    let checkDone = '';
    if(!this.state.done){
        checkDone = (
            <img 
                src='./assets/checked.png'
                alt='Hoàn thành'
                width='30' style={{cursor: 'pointer'}}
                title='Bấm để hoàn thành'
                onClick={()=>this.completeTask(this.props.id)}
            />
        )
    }
    return (
      <div className="App aligned">
        {checkDone}
        &nbsp;
        <img 
            src='./assets/delete.png'
            alt='Xóa'
            width='30' style={{cursor: 'pointer'}}
            title='Bấm để xóa task'
            onClick={()=>this.props.deleteTask(this.props.id)}
        />
        &nbsp;&nbsp;
        <span className={this.state.done ? 'done' : ''}>
            {this.state.value}
        </span>
      </div>
    );
  }
}

export default Todo;
