
import { useNavigate } from 'react-router-dom';
import './App.css';
import List from './components/list/List';



function App() {
  const navigate = useNavigate();
  return (
    <div className='main-container'>
       
      <h1 >My To-Do List</h1>
        
      <div className='box'>
        <List />
        <div className='add-task'>
          <button id="add-btn" onClick={()=>navigate('/new')}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
