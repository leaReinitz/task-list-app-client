const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="card row">
        <div className="card-body col">
          <h3 className="card-title text-center">Update Task</h3>
          <div className=" row">
          <div className="form-floating col-6 p-1">
            <input onChange={(e) => changeTask({ ...updateData, title: e.target.value })} value={updateData && updateData.title} className="form-control" placeholder="Title" />
            <label className="form-control-label ">Title</label>
          </div>
          <div className="form-floating col-6 p-1">
            <input onChange={(e) => changeTask({ ...updateData, description: e.target.value })} value={updateData && updateData.description} className="form-control" placeholder="Description" />
            <label className="form-control-label">Description</label>
          </div>
          </div>
          <div className="row justify-content-center">
            <div className="form-floating col-3 p-1">
              <input onChange={(e) => changeTask({ ...updateData, deadline: e.target.value })} value={updateData && updateData.deadline} className="form-control height " type="date" placeholder="Deadline" />
              <label className="form-control-label">Deadline</label>
            </div>
            <div className="form-floating col-3 p-1">
              <select value={updateData && updateData.frequency} onChange={(e) => changeTask({ ...updateData, frequency: e.target.value })} className="form-control height form-select-lg mb-3 " placeholder="Frequency" >
                <option selected defaultValue="0">select priority</option>
                <option value="1">day</option>
                <option value="2">week</option>
                <option value="3">month</option>
                <option value="4">year</option>
              </select>
              <label className="form-control-label">Frequency</label>
            </div>
            <div className="form-floating col-3 p-1">
              <select value={updateData && updateData.priority} onChange={(e) => changeTask({ ...updateData, priority: e.target.value })} className="form-control height form-select-lg mb-3" placeholder="Priority" >
                <option selected defaultValue="0">select priority</option>
                <option value="1">high</option>
                <option value="2">low</option>
                <option value="3">normal</option>
              </select>
              <label className="form-control-label">Priority</label>
            </div>
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-success mr-20"
            >Update</button>
            <button
              onClick={cancelUpdate}
              className="btn btn-warning"
            >Cancel</button>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default UpdateForm;