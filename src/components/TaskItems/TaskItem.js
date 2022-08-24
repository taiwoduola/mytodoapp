import "./TaskItem.scss";

const TaskItem = (props) => {
  //Receiving data as props from myTodoapp comp.

  return (
    <div className="taskItem">
      <span className="taskName">
        Task <span className="taskName--name">{props.taskName}</span>
      </span>
      <span className="taskDate">
        Date
        <span className="taskDate--date">{props.taskDate.toDateString()}</span>
      </span>
      <span className="startTime">
        Start
        <span className="startTime--start">{props.startTime(new Date())}</span>
      </span>
      <span className="endTime">
        End <span className="endTime--end">{props.endTime(new Date())}</span>
      </span>
    </div>
  );
};

export default TaskItem;
