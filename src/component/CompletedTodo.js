import { useSelector } from "react-redux"
import CompleteTodoCard from "./CompleteTodoCard"

const CompletedTodo = () => {
  //subscribe the store to get the data
  const taskData = useSelector((store) => store.task.completeTask);

  return (
    <div className="border w-[45%] bg-gradient-to-tr from-red-100 via-sky-100 to-yellow-100">
      <p className="text-xl uppercase text-center font-semibold my-2 p-2">Completed Tasks..</p>
      {taskData.map((e) => <CompleteTodoCard key={e?.id} id={e?.id} input={e?.input}/>)}
    </div>
  )
}

export default CompletedTodo