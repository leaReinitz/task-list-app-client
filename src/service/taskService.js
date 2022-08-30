import axios from 'axios';

var api=axios.create({
    // baseURL: "http://localhost:4000/"
  })
  
var service = {
    saveTask :(newTask)=>{ return api.post("saveTask", newTask) },
    getAllTasks:api.get("getAllTasks"),
    updateTask :(updateTask)=>{ return api.post("updateTask", updateTask) },
    deleteTask:(id)=>{ return api.delete(`deleteTask/${id}`)}
}
export default service;

