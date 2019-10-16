import React from 'react';

const TodoInput = ({title, handleChange, handleSubmit, editItem}) => {
    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input onChange={handleChange} value={title} type="text" className="form-control" placeholder="Add a todo item"/>
                </div>
                <button className={editItem ? 'btn btn-block btn-warning' : 'btn btn-block btn-success'} type="submit">
                   {editItem ? 'Edit Item' : 'Add Item' }
                </button>
            </form>
        </div>
    )
}

export default TodoInput;
