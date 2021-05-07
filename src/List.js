import React , {Component} from 'react'
import Item from './Item'
import Form from './Form'
class List extends Component {
    state = {
        text: "First ITEM"
    }


    render(){
        return (
            <div>
                <Item text={this.state.text}/>
                <Form />
            </div>
        )
    }
}

export default List