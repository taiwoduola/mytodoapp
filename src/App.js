import "./App.scss";
import MyTodoApp from "./components/MyTodoApp/MyTodoApp";

function App() {
  const tasksData = [
    {
      id: "t1",
      taskName: "study",
      taskDate: new Date(),
      startTime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(7, 0, 0);
        return date.toLocaleTimeString();
      },

      endtime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(9, 30, 0);
        return date.toLocaleTimeString();
      },
    },
    {
      id: "t2",
      taskName: "Meditate",
      taskDate: new Date(),
      startTime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(14, 0, 0);
        return date.toLocaleTimeString();
      },

      endtime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(14, 30, 0);
        return date.toLocaleTimeString();
      },
    },
    {
      id: "t3",
      taskName: "Code",
      taskDate: new Date(),
      startTime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(15, 0, 0);
        return date.toLocaleTimeString();
      },

      endtime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(18, 30, 0);
        return date.toLocaleTimeString();
      },
    },
    {
      id: "t4",
      taskName: "Rest",
      taskDate: new Date(),
      startTime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(19, 0, 0);
        return date.toLocaleTimeString();
      },

      endtime: function (timeString) {
        let date = new Date(timeString);
        date.setHours(20, 30, 0);
        return date.toLocaleTimeString();
      },
    },
  ];

  return (
    <div className="App">
      <div className="mytodoapp">
        {/* Passing Data to other components */}
        {/* Passing the whole task data(one big whole array of objects) as attribute.
         The data will be received as props by the child component.  (parent to child)*/}
        <MyTodoApp tasksData={tasksData} />
      </div>
    </div>
  );
}

export default App;
