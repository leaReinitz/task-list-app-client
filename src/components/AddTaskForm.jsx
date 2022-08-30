import React from 'react';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="card row">
        <div className="card-body col">
          <h3 className="card-title text-center">Add Task</h3>
          <div className="row">
          <div className="form-floating col-6 p-1">
            <input onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} value={newTask.title} className="form-control" placeholder="Title" />
            <label className="form-control-label ">Title</label>
          </div>
          <div className="form-floating col-6 p-1">
            <input onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} value={newTask.description} className="form-control" placeholder="Description" />
            <label className="form-control-label">Description</label>
          </div>
</div>
          
          <div  className="row justify-content-center">
            <div className="form-floating col-3 p-1">
              <input onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })} value={newTask.deadline} className="form-control height " type="date" placeholder="Date" />
              <label className="form-control-label">Deadline</label>
            </div>
            <div className="form-floating col-3 p-1">
              <select value={newTask.frequency} onChange={(e) => setNewTask({ ...newTask, frequency: e.target.value })} className="form-control height form-select-lg mb-3 " placeholder="Frequency" >
                <option selected defaultValue="0">select frequency</option>
                <option value="1">day</option>
                <option value="2">week</option>
                <option value="3">month</option>
                <option value="4">year</option>
              </select>
              <label className="form-control-label">Frequency</label>
            </div>
            <div className="form-floating col-3 p-1">
              <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} className="form-control height form-select-lg mb-3" placeholder="Priority" >
                <option selected defaultValue="0">select priority</option>
                <option value="1">high</option>
                <option value="2">low</option>
                <option value="3">normal</option>
              </select>
              <label className="form-control-label">Priority</label>
            </div>
          </div>
          <button
            onClick={addTask}
            className="btn btn-success"
          >Add Task</button>
        </div>
      </div>

      <br />
    </>
  )
}

export default AddTaskForm;