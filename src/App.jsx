import { useEffect, useState } from 'react'
import API from './src/api/index';

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState(0);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataUserInsert, setDataUserInsert] = useState([]);

  // Connect to API
  const fetchDataUsers = async () => {
    try{
      const response = await API.get('/user'); 
      setDataUsers(response.data);
    } catch(err){
      console.error('Error: ', err);
    }
  }

  const addDataUser = async() => {
    try{
      const response = await API.post('/user', dataUserInsert).then(response => setData(response.data));
      return response.data;
    } catch(err){
      console.error("Error: ", err);
    }
  }

  // Function for handling UI Action
  const handleInsertUser = async() => {
    
  }
  
  useEffect(() => {
    fetchDataUsers();
  });

  return (
    <>
      <h1>Testing POS API</h1>
      <table>
        <thead>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {dataUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.name_user}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Input User</h1>
      <form action="#">
        <label htmlFor="">Username</label>
        <input type="text" name="userame"/>
      </form>
    </>
  );
}

export default App
