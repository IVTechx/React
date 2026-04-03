// import { useState } from 'react'
import UseStateComponent from './components/use-state-components'


const CreateCards = () =>{
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");

    };
    // const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1 style={{display:'block', textAlign: "center"}}>Form</h1>
            <div style={{display:'flex', justifyContent: "center"}}>
              <form className='formConatainer' onSubmit={handleSubmit}>
                  <div className='formPart'>
                      <span>Profile Picture: </span>
                      <select name="picture" id="img">
                        <option value="" hidden>Select Picture</option>
                        <option value="../src/assets/1.png">Alex</option>
                        <option value="../src/assets/2.png">Jordan</option>
                        <option value="../src/assets/3.png">Samantha</option>
                      </select>
                  </div>
                  <div className='formPart'>
                      <label htmlFor="firstName">Name: </label>
                      <input type="text" name="name" id="firstName" />
                  </div>
                  <div className='formPart'>
                      <label htmlFor="title">Title: </label>
                      <input type="text" name="title" id="title" />
                  </div>
                  <div className='formPart'><button type="submit">Submit</button></div>
              </form>
            </div>
        </div>
    )

}

const App = () => {

  console.log("Parent rendered")
  return(
    <div >
    <CreateCards />
    <div style={{display:'flex', justifyContent: "center"}}>
      <UseStateComponent i = {1} name="Alex" title="Developer"/>
      <UseStateComponent i = {2} name="Jordan" title="Project Manager"/>
      <UseStateComponent i = {3} name="Samantha" title="Designer"/>
    </div>
    </div>
)
}
export default App



// // ID, title, completed
// interface ToDo{
//   id: number,
//   title:string,
//   content?:string,
//   isCompleted: boolean
// }

// const App = () => {

  
//   const [todos, setTodos] = useState<ToDo[]>([]);
//   const [inputValue, setInputValue] = useState("")

//   const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
//     setInputValue(e.target.value);
//   }

//   const addToDo = () =>{
//     const newToDO:ToDo={
//       id:Date.now(),
//       title:inputValue,
//       isCompleted:false
//     }
//     setTodos([...todos, newToDO])
//     setInputValue('');
//     console.log(todos)
//   }

//   const deleteToDo = (id: number) =>{
//     const newState = todos.filter((todos:ToDo) => todos.id !== id)
//     setTodos(newState);
//   }

//     const completeToDo = (id: number) =>{
//     const newState = todos.map((todo:ToDo) => {
//       return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} :todo
//     })
//     setTodos(newState);
//   }

//   return (
//     <div>
//       <div>To Do List</div>
//       <div>
//         <input type="text" onChange={onInputChange} value={inputValue} />
//         <button onClick={addToDo}>Add</button>
//       </div>
//       <div>
//         {
//           todos.map((todo, index) => {
//             return(
//               <div key={todo.id} style={
//                 {
//                   backgroundColor: todo.isCompleted ? "green":'gray',
//                   margin: "4px",
//                   display: "flex",
//                   justifyContent: "space-between"
//                 }
//               }>
//                 <h2>{todo.title}</h2>
//                 <button onClick={() => {deleteToDo(todo.id)}}>Delete</button>
//                 <button onClick={() => {completeToDo(todo.id)}}>Completed</button>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default App