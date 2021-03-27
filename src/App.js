import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      tasks: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickIndex = this.handleClickIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(event){
    this[event.target.name].bind(this)(event)
  }
  handleClickIndex(index, event){
    this[event.target.name].bind(this)(index, event)
  }
  handleChange(event){
    this[event.target.name].bind(this)(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks || []
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks||[]).map((task,index)=>(
      <li>
        {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>
    ))
    return (
      <div className="container">
        <h1>React</h1>
        <div>
          <ol>
            {tasks}
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ol>
          <div>
              <input name="task" value={this.state.task} onChange={this.handleChange}/>
              <button type="submit" name="addTask" onClick={this.handleClick}>Add</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Todo/>,
  document.getElementById('root')
);

export default Todo;
