import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import ReviewPage from './pages/ReviewPage.jsx';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="movie/:id" element={<MovieDetails />} />
        <Route path ="review" element={<ReviewPage />} />
      </Routes>
    </div>
  )
}

export default App
