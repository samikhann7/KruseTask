import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age || '');
  const [email, setEmail] = useState(user?.email || '');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setAge(user.age || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const editUserValue = async () => {
    if (name.trim() === '' || +age < 1 || email.trim() === '') {
      alert("Please enter valid user data.");
      return;
    }

    try {
      await axios.put('http://localhost:8800/users', {
        name,
        age,
        email,
        id: user.id
      });
      alert("User updated successfully!");
      navigate('/'); // Only navigate after success
    } catch (err) {
      console.log(err);
      alert("Failed to update user.");
    }
  };

  return (
    <div className='edit'>
      <div className='editTitle'>Edit User</div>
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
                <button className='updateBtn' onClick={editUserValue}>Done</button>
                <button className='deleteBtn' onClick={() => navigate('/')}>Cancel</button>
            </div>
      </div>
    </div>
  );
};

export default EditUser;
