import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const UserList = () => {

    const [users,setUsers]=useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        const fetchAllUsers= async ()=>{
            try{
                const res = await axios.get('http://localhost:8800/users')
                console.log(res.data);
                setUsers(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllUsers();
    },[])
    const colors=['#779ba1','#d6a780','#897a74'];
  return (
      <>
        <div className="title">User List</div>
        <div className='Users'>
            {users.map((user,idx)=>(
                <User backgroundColor={colors[idx%colors.length]}  key={user.id} {...user} setUsers={setUsers}></User>
            ))}
            <button className='addUserBtn' onClick={()=>{navigate("/add")}}><FontAwesomeIcon className='icon' size='4x' icon={faPlus} /></button>
            
        </div>
      </>
  )
}

export default UserList
