import React , {Component} from 'react'

class Form extends Component {
    state = {
        text: "",
        priority: 1 ,
        edit: false
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return(
            <form>
                <label htmlFor="text">Add Item</label>
                <input 
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                name="text"
                id="text"
                />
                <label htmlFor="priority">Priority</label>
                <input 
                type="number"
                min={1}
                max={4}
                value={this.state.priority}
                onChange={this.handleChange}
                name="priority"
                id="priority"
                />
                <button> Submit </button>
            </form>
        )
    }
}

export default Form