import { useState } from "react";

function UserList(){
const [users,setUsers]=useState([
    {id:1,name:'abel',age:20},
    {id:2,name:'dawit',age:23},
    {id:3,name:'bekalu',age:22},
    {id:4,name:'niko',age:23}

])

const [edit,setEdit]=useState(null)

const handleChange=(e)=>{
     const {name,value}=e.target;
     setEdit((prev)=>({...prev,[name]:value}))
}

const handleSave=()=>{
    setUsers(prevUSers=>
        prevUSers.map((user) =>
            user.id === edit.id
              ? { ...user, name: edit.name, age: edit.age }
              : user

));
 setEdit(null);
};

const handleCancel=()=>{
    setEdit(null);
}
    return(
       
        <div>
             <h2>USerList</h2>

             <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {edit && edit.id===user.id?(
                       <div>
                       <input 
                       type="text"
                        name="name" id="name"
                        value={edit.name}
                         placeholder="enter your name.." 
                         onChange={handleChange}
                         />
                       <input 
                       type="number"
                        name="age" id="age"
                         value={edit.age}
                          placeholder="enter your age.." 
                         onChange={handleChange} />
                         <button onClick={handleSave}>Save</button>
                         <button onClick={handleCancel}>Cancel</button>
                </div>

                    ):(
                        <div>
                            <span>{user.name} (Age:{user.age})</span>
                            <button onClick={()=> setEdit(user)}>Edit</button>
                        </div>
                    )}
                </li>
        ))}
      </ul>
    </div>
  );
}


            
          


export default UserList;