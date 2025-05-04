import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');


    const addNewUser = async()=>{
        if (name.trim() === '' || +age < 1 || email.trim() === '') {
            alert("Please enter valid user data.");
            return;
          }
      
          try {
            await axios.post('http://localhost:8800/users', {
              name,
              age,
              email,
            });
            alert("New user added successfully!");
            navigate('/'); // Only navigate after success
          } catch (err) {
            console.log(err);
            alert("Failed to add user.");
          }
    }
  return (
    <div className='edit'>
      <div className='editTitle'>Add User</div>
      <div className="editForm">
            <div className="formElement">
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="formElement">
                <label>Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="formElement">
                <label>Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="lower">
                <button className='updateBtn' onClick={addNewUser}>Done</button>
                <button className='deleteBtn' onClick={() => navigate('/')}>Cancel</button>
            </div>
      </div>
    </div>
  )
}

export default AddUser
