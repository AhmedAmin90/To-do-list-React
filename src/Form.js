import React , {Component} from 'react'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
    state = {
        title: "",
        body: "",
        priority: "Important" ,
        deadLine : "",
        done: false
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let newTask = {id: uuidv4(), title: this.state.title, body: this.state.body , priority: this.state.priority, deadLine: this.state.deadLine, done: false}
        this.props.addNew(newTask)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Add Task</label>
                <input 
                type="title"
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                id="title"
                />
                <label htmlFor="priority">Priority</label>
                <select value={this.state.priority}
                        onChange={this.handleChange}
                        name="priority"
                        id="priority"
                >
                    <option>Important</option>
                    <option>Meidum</option>
                    <option>Normal</option>
                </select>
                <label htmlFor="body">Task Details</label>
                <input 
                type="text"
                value={this.state.body}
                onChange={this.handleChange}
                name="body"
                id="body"
                />
                <label htmlFor="deadLine">DeadLine <i className="fas fa-hourglass-half"></i></label>
                <input
                type="date"
                value={this.state.deadLine}
                onChange={this.handleChange}
                name="deadLine"
                />
                <button className="Form-submit"> Submit </button>
            </form>
        )
    }
}

export default Form