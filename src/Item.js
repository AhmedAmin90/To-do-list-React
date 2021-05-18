import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    state = {
        edited: false
    }
    deleteTask = (e)=>{
        this.props.delete(this.props.id)
    }

    makeDone =(e)=>{
        this.props.taskDone(this.props.id)
    }

    edit = (e)=> {
        this.props.editTask(this.props.id)
    }

    editForm = ()=>{
        this.setState({edited : !this.state.edited})
    }

    render(){
        const seeDetails = ()=>{  
            const itemBody = document.getElementById(`${this.props.id}`);
            itemBody.classList.toggle('hide');
            document.querySelector('.Item-edit-btn').classList.toggle('hide')
        }
        const isDone = this.props.done ? <i className="fas fa-check-double"> Done !</i>  : <div className="Item-underprogress"> <i className="fas fa-hourglass-end"> Underprogress </i>  <button onClick={this.makeDone}> Make it Done !</button></div> ;
        const isEdited = this.state.edited? "Cancel" : "Edit"
        let showContent;
            if (!this.state.edited) {
                showContent = 
                <div>
                <p className="Item-text"> Task details: {this.props.body}</p>
                <p className="Item-text">Dead line: {this.props.date}</p>
                <p className="Item-text">Priority: {this.props.priority}</p>
                {isDone}
                </div>
            }
            else {
                showContent = <div>
                    <form>
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
                    </form>
                </div>
                
            }

        return(
            <div className="Item">
             <div className="Item-title">
                 <p className="Item-text">{this.props.title}</p>
                 <p className="Item-details">See Task Details <i onClick={seeDetails} className="fas fa-arrow-circle-down"></i> </p>
                 <button onClick={this.deleteTask}>Delete</button>
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