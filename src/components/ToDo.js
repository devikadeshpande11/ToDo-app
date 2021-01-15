import { useState } from "react";

function Todo() {
  const [myData, setMyData]=useState([
      {title:"Workout", complete: "true"},
      {title:"Revision", complete:"false"},
      {title:"office work", complete:"true"},
      {title:"post jobs", complete:"false"},
      {title:"reading", complete:"false"}
  ]);
  const [userInput,setUserInput]=useState("");
//   const myData = [
//     { title: "Workout", complete: false },
//     { title: "Revision", complete: false },
//     { title: "Office Work", complete: false },
//   ];
  // console.log(myData)
  const handleChange=(e)=>{
    setUserInput(e.currentTarget.value)
    //console.log(e.currentTarget.value)
  }
  return (
    <div >
      <div>
      <input placeholder="new Task" value={userInput} onChange={handleChange} />
        <button>Add</button>

      </div>
       
        <table border={2} cellPadding={5}>
           <thead>
              <tr>
                <td>title</td>
                <td>complete</td>
              </tr>
           </thead>
           <tbody>
              {
                  
                 myData.map(function (item) {
                     return <tr>
                       <td>{item.title}</td>
                       <td>{item.complete}</td>
                     </tr>
                  })
              }
           </tbody>
        </table>
        
    </div>
  );
}
export default Todo;
