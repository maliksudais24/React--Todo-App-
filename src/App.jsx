 import { useEffect, useState } from 'react'
 import Navbar from './componenets/navbar';
 import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if(todostring){
    let todos = JSON.parse(localStorage.getItem("todos"))
  settodos(todos)
    }
  }, [])
  const togglefinished =(e)=>{
    setshowfinished(!showfinished)
  }

  const handleAdd=()=>{
    if(todo.trim()!==""){
    settodos([...todos,{id: uuidv4(),todo, iscompleted:false}])
    settodo("")
    savetols()
    }
  }
  const savetols = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  
const handleChange =(e)=>{
  settodo(e.target.value)
}
const handleEdit =(e,id)=>{
let t = todos.filter(i=>i.id ===id)
settodo(t[0].todo)
let newtodos = todos.filter(item=>{
  return item.id!== id 
})
settodos(newtodos)
savetols()
}
const handleDelte =(e, id)=>{
  let index = todos.findIndex(item=>{
  return item.id===id
})
let newtodos =todos.filter(item=>{
  return item.id!==id
  
})
settodos(newtodos)
savetols()
}
const handleCheckbox=(e)=>{
let id = e.target.name
let index = todos.findIndex(item=>{
  return item.id===id
})
let newtodos = [...todos]
newtodos[index].isCompleted = !newtodos[index].isCompleted
settodos(newtodos)
savetols()
}
  return (
    <>
    <Navbar/>
  <div className="main my-5 mx-auto max-w-[80%] rounded-xl p-5 bg-slate-500 text-white min-h-[80vh]">
  <div className="addtodo mb-4">
    <h2 className="text-xl font-semibold text-slate-950">Add a Todo</h2>
  </div>
  
  <div className="input flex gap-3">
    <input onChange={handleChange} value={todo}
      type="text" 
      placeholder="Your Todo" 
      className="flex-1 px-3 py-2 rounded-md text-black outline-none" 
    />
    <button onClick={handleAdd} className="bg-slate-900 px-4 py-2 rounded-md hover:bg-slate-800 transition-all">
      Add
    </button>
  </div>
  <div className="yourtodos ">
   <div className="flex items-center gap-2 mt-3 mb-2">
  <input 
    type="checkbox" 
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
    onChange={togglefinished} 
    checked={showfinished} 
  />
  <label className="text-black font-bold text-lg">Show finished</label>
</div>

    <h2 className='mt-3 mb-2 font-bold text-lg text-black '>Your Todo's</h2>
    {todos.length===0 && <div className='text-black text-[17px] sm:w-[60%] font-bold'>NO todos to display</div> }
    {todos.map(item=>{
    return (showfinished || !item.isCompleted)&& <div key={item.id} className="todo flex flex-col break-all sm:flex-row sm:items-center sm:justify-between gap-4 mt-3 p-3 bg-white rounded-md shadow-md">
      <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
      onChange={handleCheckbox} name={item.id} type="checkbox" value={item.iscompleted}  id="" />
 <div
  className={`text text-black text-[17px] sm:w-[60%] ${item.isCompleted ? "line-through" : ""}`}
>
  {item.todo}
</div>

  <div className="buttons flex gap-2">
    <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-slate-900 text-white px-4 py-1 rounded-md hover:bg-slate-800 transition-all'>
      Edit
    </button>
    <button onClick= {(e)=>{handleDelte(e,item.id)}} className='bg-slate-900 text-white px-4 py-1 rounded-md hover:bg-slate-800 transition-all'>
      Delete
    </button>
  </div>
</div>
 })}
  </div>
</div>

    </>
  )
}

export default App
