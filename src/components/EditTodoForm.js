import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue]=useState(task.task)
    const handleSubmit =e=>{
        e.preventDefault();
        
       
        const regex = /^(\S+\s?)+$/;

       if(value.length>0 && regex.test(value)){
        editTodo(value,task.id)
         toast.success('Successfully Added')
       }else{
        toast.error('Please Enter Valid Task')
       }

       
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e)=> setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update Task</button>
      <ToastContainer />

    </form>
  );
}
