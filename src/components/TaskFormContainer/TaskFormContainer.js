import TaskForm from "../TaskForm/TaskForm";
import "./taskFormContainer.scss";

const TaskFormContainer = () => {
  return (
    <div className="taskFormContainer">
      <h1 className="taskHeader"> add tasks</h1>
      <div className="taskFormComp">
        <TaskForm />
      </div>
    </div>
  );
};

export default TaskFormContainer;
