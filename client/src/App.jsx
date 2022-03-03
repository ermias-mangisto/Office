
import './App.css'
import {GetAllEmployees} from './Service/employees'
function App() {
function getData(){
  GetAllEmployees()
  .then((data) =>console.log(data))
  .catch((err) => console.log(err))
}

  return (
    <div className="App">
   
          <button type="button" onClick={getData}>go</button>
     
      
    </div>
  )
}

export default App

