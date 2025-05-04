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
  return (
    <div className='User'>
        <div className="upper">
            <div className="container">
                <div className='displayElements'>Name: </div><div className='dataElements'>{props.name}</div>
            </div>
            <div className="container">
                <div className='displayElements'>Age: </div><div className='dataElements'> {props.age}</div>
            </div>
            <div className="container">
                <div className='displayElements'>Email: </div><div className='dataElements'> {props.email}</div>
            </div>
        </div>

        <div className="lower">
            <button className='updateBtn'><Link to="/edit" state={{ user: { id: props.id, name: props.name, age: props.age, email: props.email } }}>Update</Link></button>
            <button className='deleteBtn' onClick={deleteUser}>Delete</button>
        </div>
    </div>
  )
}

export default User
