import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import NoTasksFound from "./NoTasksFound";
import AddTaskModal from "./AddTaskModal";

// Function to get tasks from local storage
// const getTasksFromLocalStorage = () => {
//   const storedTasks = localStorage.getItem("tasks");
//   return storedTasks ? JSON.parse(storedTasks) : [];
// };

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",

    status: "Incomplete",
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [priorityFilters, setPriorityFilters] = useState([
    "High",
    "Medium",
    "Low",
  ]); // Array of priority filters
  const [currentPriorityIndex, setCurrentPriorityIndex] = useState(0); // Index of the current priority filter

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    handleCloseClick();
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function filterTasksByPriority(priority) {
    if (!priority) {
      return tasks; // If no priority filter selected, return all tasks
    }
    return tasks.filter((task) => task.priority === priority); // Filter tasks based on selected priority
  }

  // Function to cycle through priority filters when the button is clicked
  function handlePriorityFilterButtonClick() {
    setCurrentPriorityIndex(
      (currentPriorityIndex + 1) % priorityFilters.length
    ); // Increment index, cycling through the array
  }

  function handleFavorite(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  }

  function handleSearch(searchTerm) {
    console.log(searchTerm);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onEdit={handleEditTask}
          onSave={handleAddEditTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            tasks={tasks}
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleDeleteAllClick}
            onFilterChange={setPriorityFilters}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
            />
          ) : (
            <NoTasksFound />
          )}
        </div>
      </div>
    </section>
  );
}
