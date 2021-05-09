import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    state = {}
    
    render(){
        const seeDetails = ()=>{  
            const itemBody = document.querySelector('.Item-body');
            itemBody.classList.toggle('hide');
        }
        const isDone = this.props.done ? <i className="fas fa-check-double"></i>  : <i className="fas fa-hourglass-end"></i>;

        return(
            <div className="Item">
             <div className="Item-title">
                 <p className="Item-text">{this.props.title}</p>
                 <p className="Item-details">See Task Details <i onClick={seeDetails} className="fas fa-arrow-circle-down"></i> </p>
                 <button>Edit</button>
                 <button>Delete</button>
              </div>
              <div className="Item-body hide">
                 <p className="Item-text"> Task details: {this.props.body}</p>
                 <p className="Item-text">Dead line: {this.props.date}</p>
                 <p className="Item-text">Priority: {this.props.priority}</p>
                 <p className="Item-text">{isDone}</p>
              </div>
            </div>
        )
    }
}

export default Item