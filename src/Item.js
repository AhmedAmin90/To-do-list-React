import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    state = {
        edited: false,
        title: this.props.title,
        body: this.props.body,
        priority: this.props.priority ,
        deadLine : this.props.date,
        done: false
    }

    // Main functions associated with props::
    deleteTask = (e)=>{
        this.props.delete(this.props.id)
    }

    makeDone =(e)=>{
        this.props.taskDone(this.props.id)
    }

    edit = (e)=> {
        this.props.editTask(this.props.id)
    }

    updateTask = (e)=>{
        e.preventDefault();
        this.props.update(this.props.id , {
            edited: false,
            title: this.state.title,
            body: this.state.body,
            priority: this.state.priority ,
            deadLine : this.state.deadLine,
            done: false
        })
        this.setState({edited: false})
    }

    // Main associated with state:
    editForm = ()=>{
        this.setState({edited : !this.state.edited})
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        // Toggle to see the details of the task:
        const seeDetails = ()=>{  
            const itemBody = document.getElementById(`${this.props.id}`);
            itemBody.classList.toggle('hide');
            document.querySelector('.Item-edit-btn').classList.remove('hide')
        }
        // To see Status of the Task:
        const isDone = this.props.done ? <div> <i className="fas fa-check-double"> Done !</i> <button className="Item-not-done-btn" onClick={this.makeDone}> Not Done !</button> </div> : <div className="Item-underprogress"> <i className="fas fa-hourglass-end"> Underprogress </i>  <button onClick={this.makeDone}> Make it Done !</button></div> ;
        // To toggle between Edit and cancel Button:
        const isEdited = this.state.edited? "Cancel" : "Edit"
        // To toggle between The task and the form of the edit task:
        let showContent;
            if (!this.state.edited) {
                // Task:
                showContent = 
                <div>
                <div className="Item-task-text"> Task details:<p className="Item-task-p"> {this.props.body}</p> </div>
                <div className="Item-task-text">Dead line: <p className="Item-task-p">{this.props.date}</p> </div>
                <div className="Item-task-text">Priority: <p className="Item-task-p"> {this.props.priority}</p></div>
                {isDone}
                </div>
            }
            else {
                // Form:
                showContent = 
                <div className="Item-edit-div">
                    <form onSubmit={this.updateTask} className="Item-edit-form">
                        <p className="Form-error  hide">Must Fill Title and Description</p>
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
                        <button>Update</button>
                     </form>
                </div>
                
            }

        return(
            <div className="Item">
             <div className="Item-title">
                 <p className="Item-text">{this.props.title}</p>
                 <p className="Item-details">See Task Details <i onClick={seeDetails} className="fas fa-arrow-circle-down"></i> </p>
                 <div className="Item-delete-btn"> <button onClick={this.deleteTask}>Delete</button> </div>
                 
              </div>
              <div className="Item-body hide" id={this.props.id}>
              <button className="Item-edit-btn hide" onClick={this.editForm}>{isEdited}</button>
                {showContent}
              </div>
            </div>
        )
    }
}

export default Item