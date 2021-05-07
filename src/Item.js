import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    render(){
        return(
            <div className="Item">
                <p className="Item-text">{this.props.text}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Item