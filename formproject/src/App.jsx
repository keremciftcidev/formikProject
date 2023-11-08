import './App.css'
import { Route,Routes } from 'react-router-dom'
import GeneralFrom from './components/GeneralFrom'
import PortalFrom from './components/PortalFrom'
function App() {
 

  return (
  
      <div className="App">
        <Routes>
          <Route path='/' element={<GeneralFrom/>}/>
          <Route path='/portal' element={<PortalFrom/>}/>
        </Routes>
      </div>
  )
}

export default App
