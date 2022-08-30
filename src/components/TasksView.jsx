import React, { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm.jsx';
import UpdateForm from './UpdateForm.jsx';
import Tasks from './Tasks.jsx';
import service from '../service/taskService';
import Schedule from '../components/schedule.jsx';
import Task from '../models/task';
import { BrowserRouter as Router, Route , Routes} 
from "react-router-dom";



function TasksView() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(new Task());
    const [updateData, setUpdateData] = useState(new Task());
    
    useEffect(() => {
        service.getAllTasks.then(res => {
            setTasks(res.data.tasks)
        }).catch(err => {
            alert(err)
        })
    }, [])

    const addTask = () => {
        if (newTask.title) {
            service.saveTask(newTask).then(res => {
                setTasks([...tasks, res.data.newTask]);
                setNewTask(new Task());
            }).catch(err => {
                console.log(err);
            });
        }
    }

    const deleteTask = (id) => {
        service.deleteTask(id).then(() => {
            let newTasks = tasks.filter(task => task._id !== id)
            setTasks(newTasks);
        }).catch(err => {
            console.log(err);
        });

    }
    // Mark task as done or completed
    const markDone = (id) => {
        var newTasks ;
         tasks.forEach(task => {
            if (task._id == id) {
                task.status=!task.status
                newTasks= task;
                return
            }
        })
        service.updateTask(newTasks);
        setUpdateData({...newTasks});
        setUpdateData(new Task());
        debugger
    }
    const cancelUpdate = () => {
        setUpdateData(new Task());
    }
    // Change task for update
    const changeTask = (e) => {
        tasks.forEach((Task) => {
            if (Task._id == e._id)
                setUpdateData(e);
        })
    }
    const updateTask = () => {
        debugger
        service.updateTask(updateData).then(res => {
            let filterRecords = [...tasks].filter(task => task._id !== updateData._id);
            let updatedObject = [...filterRecords, updateData]
            setTasks(updatedObject);
            setUpdateData(new Task());
        }).catch(err => {
            console.log(err);
        });
    }

    const handleFilter = () => {
        let filtered = tasks.filter(task => {
            return !task.status;
        });
        setTasks(filtered);
    }
    return (<>
      <Router>
            <Routes>
                <Route exact path="/" element={<div className="container ">
            <br />
            <h2> Task  List </h2>
            <br />
            {updateData && updateData._id ? (
                <UpdateForm
                    updateData={updateData}
                    changeTask={changeTask}
                    updateTask={updateTask}
                    cancelUpdate={cancelUpdate}
                />
            ) : (
                <AddTaskForm
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addTask={addTask}
                />
            )}
            <Tasks
                tasks={tasks}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
                handleFilter={handleFilter}
            />
        </div>} />

             <Route path="/Schedule" element={tasks.length>0 && <Schedule tasks={tasks} />} />
            </Routes>
        </Router>
        
        
        
        
        
        </>
        
    );
}
export default TasksView;
