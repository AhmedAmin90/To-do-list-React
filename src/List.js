import React , {Component} from 'react'
import Item from './Item'
import Form from './Form'
class List extends Component {
    state = {
        title: "First ITEM",
        body: "This is a test task",
        date: "",
        priority: "Importatn",
        done: true
    }


    render(){
        return (
            <div>
                <Item title={this.state.title} body={this.state.body} date={this.state.date} priority={this.state.priority} done={this.state.done}/>
                <Form />
            </div>
        )
    }
}

export default List