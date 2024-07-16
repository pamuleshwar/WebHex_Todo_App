import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTask} from "../utils/todoSlice";
uuidv4();

const TodoForm = () => {
  const [inputTask, setInputTask] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if(inputTask.length > 0){
        dispatch(addTask({
        input: inputTask, id : uuidv4(), taskComplete:  false
      }))
    }

    setInputTask("");
  }
  return (
    <div className="mx-auto text-center w-[50%] rounded-xl bg-gray-400">
      <input type="text" placeholder="What is your task today?" value={inputTask} onChange={(e) => setInputTask(e.target.value)} className="my-4 py-3 px-2 w-[70%] rounded-xl" />
      <button onClick={handleClick} className="border bg-gray-400 my-2 mx-2 py-3 px-3 rounded-xl hover:bg-gray-500">Add Task</button>
    </div>
  )
}

export default TodoForm