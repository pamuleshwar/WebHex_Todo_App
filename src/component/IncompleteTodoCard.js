import { useDispatch, useSelector } from "react-redux"
import { addCompleteTask, addTask, updateTodo } from "../utils/todoSlice";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const IncompleteTodoCard = ({id, taskComplete, input}) => {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState(true);
  const [editInput, setEditInput] = useState(input);

  //get all todoTask from store
  const allTask = useSelector((store) => store.task.todoTask);

  const handleClick = (id) => {
    //incomplete tasks
    const incompleteTask = allTask.filter((t) => t.id !== id);

    //complete tasks
    const completeTask = allTask.find((t) => t.id === id);

    //update the todoTask
    dispatch(updateTodo(incompleteTask));

    //update the complete task
    dispatch(addCompleteTask(completeTask));
  }

  const handleEdit = (id) => {
    setEditValue(!editValue);
  }

  const handleEditClick = (id) => {
    //incomplete tasks
    const incompleteTask = allTask.filter((t) => t.id !== id);
    //update the todoTask
    dispatch(updateTodo(incompleteTask));

    dispatch(addTask({
      input: editInput, id : uuidv4(), taskComplete:  false
    }))

    setEditValue(!editValue);
  }

  
  const handleRemove = (id) => {
    //incomplete tasks
    const incompleteTask = allTask.filter((t) => t.id !== id);
    //update the todoTask
    dispatch(updateTodo(incompleteTask));

  }




  return (
    <div className="border m-2 p-2 flex flex-row justify-between bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
        {
          editValue ? <p className="text-wrap mr-3">{input}</p> : 
          <div className="flex mx-auto">
            <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} className="mr-4 border p-3 border-black rounded-lg"/>
            <span onClick={() => handleEditClick(id)} className="my-auto cursor-pointer p-2 rounded-full border bg-green-200 hover:bg-green-300">✔️</span>
          </div>
        }
        {
            editValue && <div className="flex flex-row my-auto mr-2 py-2">
            <span onClick={() => handleClick(id)} className="h-[50%] p-2 rounded-full cursor-pointer border bg-green-200 hover:bg-green-300">✅</span>
            <span onClick={() => handleRemove(id)} className="h-[50%] p-2 rounded-full cursor-pointer ml-3 border bg-red-200 hover:bg-red-300">⛔</span>
            <span onClick={() => handleEdit(id)} className="h-[50%] p-2 rounded-full cursor-pointer ml-3 border bg-blue-200 hover:bg-blue-300">📝</span>
          </div>
        }
    </div>
  )
}

export default IncompleteTodoCard