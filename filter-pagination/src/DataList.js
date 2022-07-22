import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataList = () => {
  const [userList, setUserList] = useState([]);
  
  const columns = [
    { dataField: 'id', text: 'Id' },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'username', text: 'Username' },
    {dataField: 'email', text: 'Email'},
  ];

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
        <BootstrapTable keyField='id' data={userList} columns={columns} /> 
      </div>
      )
}

export default DataList;
