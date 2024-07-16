import CompletedTodo from "./CompletedTodo"
import IncompleteTodo from "./IncompleteTodo"

const TodoDisplay = () => {
  return (
    <div className="border my-5 py-3 px-3 flex flex-row">
        <IncompleteTodo />
        <CompletedTodo />
    </div>
  )
}

export default TodoDisplay