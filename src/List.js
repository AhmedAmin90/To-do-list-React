import React , {Component} from 'react'
import Item from './Item'
import Form from './Form'
import './List.css'
class List extends Component {
    state = {
        tasks : []
    }

    addItem = (newTask)=> {
        this.setState({tasks: [...this.state.tasks, newTask]})
    }

    delete = (id)=>{
        const deletedElem = this.state.tasks.filter( task => task.id !== id);
        this.setState({tasks: [...deletedElem]})
    }

    done = (id)=>{
        let doneElem = this.state.tasks.find( task => task.id === id);
        // Toggle between done and not done !
        doneElem.done = !doneElem.done;
        this.setState({tasks: [...this.state.tasks]});

    }

    edit = (id , editedTask)=>{
        const updatedTasks = this.state.tasks.map(task=> {
            if (task.id === id) {
                return {...task , title: editedTask.title, body: editedTask.body, priority: editedTask.priority , deadLine: editedTask.deadLine }

            }
            return task

        })
        this.setState({tasks: updatedTasks})
    }

    render(){
        return (
            <div>
                <h1> SIMPLE TO DO LIST- React Based </h1>
                {this.state.tasks.map(task=> 
                    <Item key={task.id}
                     id={task.id} 
                     title={task.title}
                     body={task.body} 
                     date={task.deadLine} 
                     priority={task.priority} 
                     done={task.done} 
                     delete={this.delete} 
                     taskDone={this.done} 
                     update={this.edit}/>
                )}
                <Form addNew={this.addItem}/>
            </div>
        )
    }
}

export default List