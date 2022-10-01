import './App.css'
import mainImg from './assets/Dall-E-2-sunset.png';
import { useState } from 'react';

const App = () => {
  
  const [currTask, setCurrTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, currTask]);
    setCurrTask('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your todo-task
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCurrTask(e.target.value)}
            value={currTask}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{marginBottom: "20px"}}>
          Submit
        </button>
      </form>

      <div className="card" style={{ width: "40rem", marginBottom: '20px' }}>
        <img src={mainImg} className="card-img-top" alt="..." style={{width:"40rem", height:"20rem", objectFit:"cover"}} />
        <div className="card-body">
          <h5 className="card-title">Todo List</h5>
          <p className="card-text">
            Following is my todo-list. Add items by filling the form above.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {tasks.map((task) => (
            <li className="list-group-item">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
