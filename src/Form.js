import React , {Component} from 'react'

class Form extends Component {
    state = {
        title: "",
        body: "",
        priority: "" ,
        deadLine : "",
        done: false
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        function getDate(){
            let today = new Date();
        
          document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        }
        return(
            <form>
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
                <label>DeadLine <i className="fas fa-hourglass-half"></i></label>
                <input
                type="date"
                value={this.state.deadLine}
                onChange={this.handleChange}
                />
                <button> Submit </button>
            </form>
        )
    }
}

export default Form