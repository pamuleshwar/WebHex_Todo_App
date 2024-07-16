import { useDispatch, useSelector } from "react-redux"
import {updateCompleteTask} from "../utils/todoSlice";

const CompleteTodoCard = ({id, input}) => {
  const dispatch = useDispatch();

  //subscribe the store
  const allTask = useSelector((store) => store.task.completeTask);

  const handleClick = (id) => {
    const presentCompleteTask = allTask.filter((e) => e.id !== id);

    //update the completeTask after removing some element
    dispatch(updateCompleteTask(presentCompleteTask));
  }
  return (
    <div className="border m-4 flex flex-row justify-between bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
        <p className="text-wrap p-2 w-[85%]">{input}</p>
        <div className=" w-[15%] my-auto">
            <span onClick={() => (handleClick(id))} className="h-[50%] p-2 rounded-full cursor-pointer ml-3 border bg-red-200 hover:bg-red-300">⛔</span>
        </div>
    </div>
  )
}

export default CompleteTodoCard