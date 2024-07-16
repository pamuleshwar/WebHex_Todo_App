import TodoDisplay from "./TodoDisplay"
import TodoForm from "./TodoForm"

const Body = () => {
  return (
    <div className="my-5 mx-5 p-5 rounded-3xl bg-gray-300">
        <h1 className="border w-[50%] mx-auto text-center text-5xl font-bold py-4 mb-4 rounded-3xl bg-gray-400 ">To Do App</h1>
        <TodoForm />
        <TodoDisplay />

        <div className="mt-20 mb-2 text-center">
          <p className="uppercase text-base font-semibold">incomplete tasks..</p>
          <ul>
            <li>Mark as done - ✅</li>
            <li>Remove task - ⛔</li>
            <li>Update task - 📝</li>
          </ul>

          <p className="uppercase text-base font-semibold mt-4">complete tasks</p>
          <ul>
            <li>Remove task - ⛔</li>
          </ul>
        </div>
    </div>
  )
}

export default Body