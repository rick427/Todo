import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state ={
    items: JSON.parse(localStorage.getItem('todo')),
    id: uuid(),
    title: '',
    editItem: false 
  }

  handleChange = e => {
    this.setState({title: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const {title, items, id} = this.state;
    const newItem = { id, title}

    const updatedItems = [...items, newItem];
    this.setState({
      items: updatedItems, 
      title: '', 
      id: uuid(), 
      editItem: false
    });
    localStorage.setItem('todo', JSON.stringify(updatedItems))
  }

  clearList = () => {
    this.setState({items: []})
  }

  handleDelete = id => {
    const {items} = this.state;
    const filtered = items && items.filter(item => item.id !== id);
    this.setState({items: filtered});
    localStorage.setItem('todo', JSON.stringify(filtered));
  }

  handleEdit = id => {
    const {items} = this.state;
    const filtered = items && items.filter(item => item.id !== id);
    const selected = items && items.find(item => item.id === id)
    this.setState({id, items: filtered, title: selected.title, editItem: true});
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">write a todo</h3>
            <TodoInput 
              title={this.state.title} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
