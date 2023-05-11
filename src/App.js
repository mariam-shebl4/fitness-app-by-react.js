import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Footer from './components/Footer';
import Home from './page/Home';
import ExerciseDetail from './page/ExerciseDetail';
import Error from './page/Error';
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">

    
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </Box>
  );
}

export default App;
