import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const User = (props) => {
    const deleteUser=async ()=>{
        try{
            await axios.delete('http://localhost:8800/users',{
                params:{id:props.id}
            })
            const res = await axios.get('http://localhost:8800/users')
            props.setUsers(res.data);
        }catch(err){
            console.log(err);
        }
    }
    const colors=['#222222'];
  return (
    <div className='User' style={{backgroundColor:colors[props.id%colors.length]}}>
        <div className="upper">
            <div className='displayElements'>Name: {props.name}</div>
            <div className='displayElements'>Age: {props.age}</div>
            <div className='displayElements'>Email: {props.email}</div>
        </div>

        <div className="lower">
            <button className='updateBtn'><Link to="/edit" state={{ user: { id: props.id, name: props.name, age: props.age, email: props.email } }}>Update</Link></button>
            <button className='deleteBtn' onClick={deleteUser}>Delete</button>
        </div>
    </div>
  )
}

export default User
