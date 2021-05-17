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

    showForm = (e)=>{
        document.querySelector('form').classList.remove('hide');
        document.querySelector('.Form-show').classList.add('hide')
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e)=>{
        e.preventDefault();
        let newTask = {id: uuidv4(), title: this.state.title, body: this.state.body , priority: this.state.priority, deadLine: this.state.deadLine, done: false}
        this.props.addNew(newTask);
        this.setState({
        title: "",
        body: "",
        priority: "Important" ,
        deadLine : "",
        done: false}
        );
        document.querySelector('form').classList.add('hide');
        document.querySelector('.Form-show').classList.remove('hide')
    }

    render() {
        return(
            <div>
                <button className="Form-show" onClick={this.showForm}>Add Task </button>
            <form className="hide" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Add Task</label>
                <input 
                type="text"
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
                <textarea 
                type="text"
                value={this.state.body}
                onChange={this.handleChange}
                name="body"
                id="body"
                >
                </textarea>
                <label htmlFor="deadLine">DeadLine <i className="fas fa-hourglass-half"></i></label>
                <input
                type="date"
                value={this.state.deadLine}
                onChange={this.handleChange}
                name="deadLine"
                id="deadLine"
                />
                <button onClick={this.clearValues} className="Form-submit"> Submit </button>
            </form>
            </div>
        )
    }
}

export default Form