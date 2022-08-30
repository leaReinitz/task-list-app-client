import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FrequencyType from "../models/FrequencyType"
import { Link} from "react-router-dom";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);


function ReactBigCalendar({ tasks }) {

  const [monthTask, setMonthTask] = useState([])
  
  function pushTaskToScheduleTaskArray(ScheduleTaskArray, date, task) {
    let newTaskDate = new Date(date);
    let newTask = {
      end: newTaskDate,
      start: newTaskDate,
      title: task.title
    };
    ScheduleTaskArray.push(newTask);
  }

  function FillScheduleTaskArray() {
    var ScheduleTaskArray = [];
    tasks.forEach(task => {
      let date = new Date(task.end);
      let startDate = new Date(task.start)
      while (date >= startDate) {
        if (task.frequency == FrequencyType.Week) {
          pushTaskToScheduleTaskArray(ScheduleTaskArray, date, task);
          date.setDate(date.getDate() - 7);
        }
        else if (task.frequency == FrequencyType.Month) {
          pushTaskToScheduleTaskArray(ScheduleTaskArray, date, task)
          date.setMonth(date.getMonth() - 1);
        }
        else if (task.frequency == FrequencyType.Year) {
          pushTaskToScheduleTaskArray(ScheduleTaskArray, date, task)
          date.setFullYear(date.getFullYear() - 1);
        }
        else {
          let newTask = {
            end: task.end,
            start: task.start,
            title: task.title
          };
          ScheduleTaskArray.push(newTask);
          break;
        }
      }
    });
    setMonthTask(ScheduleTaskArray);
  }

  useEffect(() => {
    FillScheduleTaskArray();
  }, [])


  return (
    <div >
      <Link to="/" className="btn link">task list</Link>
     <Calendar
        views={["month"]}
        localizer={localizer}
        defaultDate={new Date()}
        events={monthTask}
        style={{ height: "100vh" }}
      />
      
    </div>
  );
}
export default ReactBigCalendar;
