import { useState } from "react";

export default function TaskActions({
  onAddClick,
  onDeleteAllClick,
  tasks,
  onFilterChange,
}) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // Add state for current priority filter
  const [currentPriorityFilter, setCurrentPriorityFilter] = useState("");

  function handlePriorityFilterButtonClick() {
    // You need to define priority filters or get them from props
    const priorityFilters = ["High", "Medium", "Low"];

    onFilterChange((prevFilters) => {
      const newIndex =
        (prevFilters.indexOf(currentPriorityFilter) + 1) % prevFilters.length;
      setCurrentPriorityFilter(prevFilters[newIndex]);
      return prevFilters;
    });
  }

  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold p-4">Your Tasks</h2>
      <div className="mb-4 flex text-white items-center space-x-6 ">
        <button
          className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold "
          onClick={handlePriorityFilterButtonClick}
        >
          {currentPriorityFilter} Priority
        </button>
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
