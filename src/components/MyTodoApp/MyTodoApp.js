import "./mytodoapp.scss";

//components
import TaskFormContainer from "../TaskFormContainer/TaskFormContainer";
import TaskItem from "../TaskItems/TaskItem";

const MyTodoApp = (props) => {
  // Receiving data via parameter(props) from App comp. (React will ensure we get one parameter in every component)
  //The props will be an object which holds the attributes(key/value pairs) received as properties.
  return (
    <div className="myTodoApp">
      <h1 className="todoApp__header">My Todos</h1>
      <div className="myTodoApp__taskForm">
        <TaskFormContainer />
      </div>
      <div className="myTodoApp__tasks">
        <h1>Today's Tasks</h1>
        {/* Re-usable components. We can make a component re-usable with props */}
        <TaskItem
          taskName={props.tasksData[0].taskName}
          taskDate={props.tasksData[0].taskDate}
          startTime={props.tasksData[0].startTime}
          endTime={props.tasksData[0].endtime}
        />
        <TaskItem
          taskName={props.tasksData[1].taskName}
          taskDate={props.tasksData[1].taskDate}
          startTime={props.tasksData[1].startTime}
          endTime={props.tasksData[1].endtime}
        />
        <TaskItem
          taskName={props.tasksData[2].taskName}
          taskDate={props.tasksData[2].taskDate}
          startTime={props.tasksData[2].startTime}
          endTime={props.tasksData[2].endtime}
        />
        <TaskItem
          taskName={props.tasksData[3].taskName}
          taskDate={props.tasksData[3].taskDate}
          startTime={props.tasksData[3].startTime}
          endTime={props.tasksData[3].endtime}
        />
      </div>
    </div>
  );
};

export default MyTodoApp;
