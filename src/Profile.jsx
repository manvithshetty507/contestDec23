import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Profile.css'

function Profile() {
    const [details,setDetails] = useState('');
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('user')).id;
        
        async function fetchUser() {
            const response = await axios.get(`https://dummyjson.com/users/${id}`)
            localStorage.setItem('userDetails',JSON.stringify(response.data));
            console.log(response.data);
            setDetails(response.data);
        }
        fetchUser();
    },[])
  return (
    <div className='profile__container'>
    {details ? (
      <div className='profile'>
        <img src={details.image} alt='Profile' />
        <h1>{details.firstName} {details.lastName}</h1>
        <p>Email: {details.email}</p>
        <p>Age: {details.age}</p>
        <p>Gender: {details.gender}</p>
        {/* Add more details as needed */}
      </div>
    ) : (
      <div>No user found</div>
    )}
  </div>
  )
}

export default Profile