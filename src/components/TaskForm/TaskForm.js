import "./taskform.scss";

const TaskForm = () => {
  return (
    <form>
      <div className="taskForm">
        <div className="taskForm__inputs">
          <div className="userTaskInput">
            <label htmlFor="taskInput"> Task name</label>
            <input type="text" className="taskInput" id="taskInput" />
          </div>

          <div className="userTaskDate">
            <label htmlFor="taskDate"> Task date</label>
            <input type="date" className="taskdate" id="taskDate" />
          </div>

          <div className="userTaskTime--start">
            <label htmlFor="taskStart"> Start time</label>
            <input type="time" className="taskStart" id="taskStart" />
          </div>

          <div className="userTaskTime--end">
            <label htmlFor="taskEnd"> End time</label>
            <input type="time" className="taskEnd" id="taskEnd" />
          </div>

          <div className="userAddBtn">
            <input
              type="submit"
              className="addBtn"
              id="addBtn"
              value="Add task"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
