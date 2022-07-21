import React,{useState, useEffect} from 'react'

const DataList = () => {
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => response.json(),
    ).then(
      result=>setUserList(result),
    )
      .catch(
        error=>console.log(error)
      )
  }, [])
    
  return (
      <div>
          <table>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
              </tr>
              {
                  userList && userList.length > 0 ?
                      userList.map(user =>
                          <tr>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                          </tr>
                      )
                      : 'Loading...'
              }
        </table>
        </div>
      )
}

export default DataList;
