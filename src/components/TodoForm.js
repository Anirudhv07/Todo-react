import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState('')
    const handleSubmit =e=>{
        e.preventDefault();
        const regex = /^\S+$/;

       if(value.length>0 && regex.test(value)){
         addTodo(value)
         toast.success('Successfully Added')
       }else{
        toast.error('Please Enter Valid Task')
       }

       setValue('')
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today"
        onChange={(e)=> setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add Task</button>
      <ToastContainer />
    </form>
  );
}
