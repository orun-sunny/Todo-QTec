export default function TaskActions({ onAddClick, onDeleteAllClick, tasks }) {
  const totalTasks = tasks.length;
  console.log(totalTasks);
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold p-4">Your Tasks</h2>
      <div className="mb-4 flex text-white items-center space-x-6 ">
        <button className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold ">
          Total Task: {totalTasks}
        </button>
        <button className="rounded-md bg-green-500 px-3.5  py-2.5 text-sm font-semibold ">
          completed task: {completedTasks}
        </button>
      </div>
      <div className="mb-4 flex items-center space-x-8 pl-4">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold "
          onClick={onAddClick}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={onDeleteAllClick}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
