import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({items, clearList, handleEdit, handleDelete}) => {
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todos</h3>
              {items.map(item => <TodoItem 
                 key={item.id} 
                 item={item} 
                 handleEdit={handleEdit}
                 handleDelete={handleDelete}/>)}
            <button onClick={clearList} type="button" className="btn btn-danger btn-block text-capitalize">
                clear list
            </button>
        </ul>
    )
}

export default TodoList
