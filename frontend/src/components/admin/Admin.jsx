import React, { useEffect, useState } from 'react';
import './Admin.css'
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contact');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
 

  return (
    <div className='admin-panel'>
        {users.map((user)=>(
               <div className="admin-section" key={user.id}>
                  <div className="user-details">
                   <span><b>Name:</b>{user.name}</span>
                   <span><b>Email:</b>{user.email}</span>
                   <span><b>Message:</b>{user.message}</span>
                  </div>
               </div>
        ))}
      
    </div>
  );
};

export default Admin;
