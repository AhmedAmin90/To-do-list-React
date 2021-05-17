import React , {Component} from 'react'
import Item from './Item'
import Form from './Form'
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
        let deletedElem = this.state.tasks.find( task => task.id === id);
        deletedElem.done = true;
        this.setState({tasks: [...this.state.tasks]});

    }

    edit = (id)=>{
        let deletedElem = this.state.tasks.find( task => task.id === id);
        
    }

    render(){
        return (
            <div>
                {this.state.tasks.map(task=> 
                    <Item key={task.id} id={task.id} title={task.title} body={task.body} date={task.deadLine} priority={task.priority} done={task.done} delete={this.delete} taskDone={this.done}/>
                )}
                <Form addNew={this.addItem}/>
            </div>
        )
    }
}

export default List