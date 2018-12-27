import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(todo) {
    return () => this.props.markCompleted({
      ...todo,
      completed: !todo.completed
    });
  }
  render() {
    const { todos } = this.props;
    return (
      <div className="listContainer">
        <h1>Todo List</h1>
        <ul className="list">
          {todos.map(todo => (
            <li key={todo.text} onClick={this.handleClick(todo)} className={todo.completed ? 'checked' : null}>
              <input type="checkbox" disabled checked={todo.completed} />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
