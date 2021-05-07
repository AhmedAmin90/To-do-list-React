import React , {Component} from 'react'
import './Item.css'

class Item extends Component {
    render(){
        return(
            <div className="Item">
                <p className="Item-text">Item</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Item