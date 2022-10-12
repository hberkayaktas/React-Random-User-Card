import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

//Components 
import SingleUser from './c/SingleUser'

// https://randomuser.me/api/?resut=6 
// https://randomuser.me/api/?results=6


function App() {
  const [users, setUser] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=6')
    setUser(response.data.results)
  }

  useEffect (() => {
    fetchUsers()
  },[])

  return (
   <div className='matilda'>
    {users.map((user,idx) => (
      <li>
        {' '}
        <SingleUser user={user} key={idx} />{' '}
      </li>
    ))}
   </div>
  );
}

export default App;
