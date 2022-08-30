import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Tasks = ({ tasks, markDone, setUpdateData, deleteTask ,handleFilter}) => {
  return(
    <>
    <Link className="btn link" to="/Schedule">Schedule task</Link>
    <button className="btn btn-success" onClick={handleFilter}>Clear Completed</button>
    
       <br></br><br></br>
      {tasks && tasks
      .sort((a, b) => a._id > b._id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task._id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task._id) }
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({...task}) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task._id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default Tasks;