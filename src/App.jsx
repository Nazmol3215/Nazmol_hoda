import './App.css'
import {HashRouter as Router, Route, Routs} from 'react-router-dom';
import About from './Components/About';







function App() {

  return (
    <>


<Router>
  <Routs>
    <Route path='/' element={<About/>}/>

  </Routs>
</Router>




    </>
  )
}

export default App
