import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }); 
      
      console.log('Response:', response.data);
      localStorage.setItem('user',JSON.stringify(response.data));
      setUsername('');
      setPassword('');
      
      navigate('/profile')
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message); 
    }
  }

  return (
    <div className="app">

      <div className='login__container'>
        <p className='login__welcome'>Welcome back👋</p>
        <h3 className='login__header'>Sign in to your Account</h3>

        <form className='input__box' onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label>
          <input type="text" placeholder='email'name='email' 
            value={username} onChange={(e) => setUsername(e.target.value)}/>

          <label htmlFor="password">Your Password</label>
          <input type="password"placeholder='password'name='password' 
            value={password} onChange={(e) => setPassword(e.target.value)}/>

          <button type='submit'>Continue</button>
        </form>
        <p className='login__forgot'><a href="">Forgot your password?</a></p>
      </div>

      <div className='signup__container'>
        <p>Don't have an Account <a href="">Sign Up</a></p>
      </div>
    </div>
  )
}

export default App
