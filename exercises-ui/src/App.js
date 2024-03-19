import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage'
import EditExercisePage from './pages/EditExercisePage'
import AddExercisePage from './pages/AddExercisePage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
        <Router>
          <header className="app-header">
            <h1>Exercise Tracker</h1>
            <p>Full Stack MERN App Demonstration</p>
          </header>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
            <Route path="/add-exercise" element={<AddExercisePage />}></Route>
          </Routes>
          <footer className="app-footer">
            <p>&copy; 2024 Richelle Thompson</p>
          </footer>
        </Router>
    </div>
  );
}

export default App;
