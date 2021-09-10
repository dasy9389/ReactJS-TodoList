import { render } from '@testing-library/react';
import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props){
    super(props);
    // console.log('props', props);
    // this.state={id: props.id, value: props.value, done: props.done};
    this.state={data: props.data};
  }

  static getDerivedStateFromProps(props,state){ //khi parent thay doi thi goi ham nay
    // console.log('getDerivedStateFromProps', props);
    return{data: props.data};
  } //se ko goi constructor nua..ma se build len render moi

  // completeTask  = () =>{
  //   //   console.log('todo completeTask', this.props.id);
  //     // this.setState({done:true});
  //     this.props.completeTask(this.state.data.id);
  // }

   render(){
    // console.log('render');
    let checkDone = '';
    if(!this.state.data.done){
        checkDone = (
            <img 
                src='./assets/checked.png'
                alt='Hoàn thành'
                width='30' style={{cursor: 'pointer'}}
                title='Bấm để hoàn thành'
                onClick={()=>this.completeTask(this.props.data.id)}
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
            onClick={()=>this.props.deleteTask(this.props.data.id)}
        />
        &nbsp;&nbsp;
        <span className={this.state.data.done ? 'done' : ''}>
            {this.state.data.name}
        </span>
      </div>
    );
  }
}

export default Todo;
