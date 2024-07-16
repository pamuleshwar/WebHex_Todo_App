import {useSelector } from "react-redux"
import IncompleteTodoCard from "./IncompleteTodoCard";

const IncompleteTodo = () => {
  const data = useSelector((store) => store.task?.todoTask);

  return (
    <div className="border w-[55%] flex flex-col mr-3 bg-gradient-to-br from-yellow-100 via-sky-100 to-red-100">
      <p className="text-xl uppercase font-semibold text-center my-2 p-2">Incomplete Tasks..</p>
      {
        data?.map((task) => <IncompleteTodoCard key={task?.id} id={task?.id} taskComplete={task?.taskComplete} input={task?.input} />)
      }
    </div>
  )
}

export default IncompleteTodo