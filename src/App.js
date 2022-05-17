import './App.css';
import {useState} from 'react';

function App() {
  let[task,settask] = useState("")
  let [todo, setToDo] = useState([
    {
      Work:"Create theme",
     status:false
    },
    {
      Work:"Work on wordpress",
     status:false
    },
    {
      Work:"Organize office main department",
     status:false
    },
    {
      Work:"Error solve in HTML template",
     status:false
    }
  ])

  let handlechange=(e)=>{
    let update = [...todo];

    // console.log(update==todo)
    
    let item = e;
  item.status=!item.status
  todo.splice(update.indexOf(e),1,update)
  console.log(update)
  setToDo(update)
 
  }

//   let add =()=>{
// if (task)
// {
//   let newArr = [...todo];
//   newArr.push({
//     work:task,
//     status:false
//   })
//   settask("");
//   setToDo(newArr)
// }
//   }

// let add=(Text)=>{

// }

let add=() =>
{
  if (task)
  {
    let newArr = [...todo];
    newArr.push({
      Work:task,
      status:false
    })
    settask("");
    setToDo(newArr)
  }
}

  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                    {/* <form action="javascript:void(0);"> */}
                        {/* <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{
                          settask(e.target.value) */}
                          {/* // console.log(task) */}
                        
                         {/* /> */}

                         <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{settask(e.target.value)} }
                          onKeyDown ={(e)=>{
                           if (e.key === "Enter"){
                             add()
                           }
                         }}
                         />                             
                        {/* <button classNameName='btn btn-success' onClick={()=> add()}>Create</button> */}
                    {/* </form> */}
                    <ul className="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                        <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                        <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                    </ul>
                    <div className="todo-list">
                       {
                         todo.map((e,index)=>{
                           return <div className="todo-item" key={index}>
                           <div className="checker"><span className=""><input type="checkbox" defaultChecked= {e.status} onChange={()=>handlechange(e)}/></span></div>
                           {/* <span>{e.Work}</span> */}
                          {e.status?<span><s>{e.Work}</s></span>: <span>{e.Work}</span>}
                       </div>
                         })
                       }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default App;
