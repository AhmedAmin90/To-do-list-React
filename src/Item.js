import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    deleteTask = (e)=>{
        this.props.delete(this.props.id)
    }
    render(){
        const seeDetails = ()=>{  
            const itemBody = document.querySelectorAll('.Item-body');
            itemBody.forEach(item => {
                item.classList.toggle('hide');
            })
        }

        const isDone = this.props.done ? <i className="fas fa-check-double"> Done !</i>  : <i className="fas fa-hourglass-end"> Underprogress </i>;

        return(
            <div className="Item">
             <div className="Item-title">
                 <p className="Item-text">{this.props.title}</p>
                 <p className="Item-details">See Task Details <i onClick={seeDetails} className="fas fa-arrow-circle-down"></i> </p>
                 <button>Edit</button>
                 <button onClick={this.deleteTask}>Delete</button>
              </div>
              <div className="Item-body hide">
                 <p className="Item-text"> Task details: {this.props.body}</p>
                 <p className="Item-text">Dead line: {this.props.date}</p>
                 <p className="Item-text">Priority: {this.props.priority}</p>
                 <p className="Item-text">Status: {isDone}</p>
                 <button> Make it Done !</button>
              </div>
            </div>
        )
    }
}

export default Item