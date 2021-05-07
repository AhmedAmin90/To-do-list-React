import React , {Component} from 'react'
import Item from './Item'

class List extends Component {
    state = {
        text: "First ITEM"
    }

    render(){
        return (
            <Item text={this.state.text}/>
        )
    }
}

export default List