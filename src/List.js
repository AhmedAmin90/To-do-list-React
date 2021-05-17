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
        const deletedElem = this.state.tasks.find( task => task.id === id);
        this.setState({tasks: [...this.state.tasks.splice(1, deletedElem)]})
        // Another way:
        // const deletedElem = this.state.tasks.filter( task => task.id !== id);
        // this.setState({tasks: [...deletedElem]})
    }

    render(){
        return (
            <div>
                {this.state.tasks.map(task=> 
                    <Item key={task.id} id={task.id} title={task.title} body={task.body} date={task.deadLine} priority={task.priority} done={task.done} delete={this.delete}/>
                )}
                <Form addNew={this.addItem}/>
            </div>
        )
    }
}

export default List