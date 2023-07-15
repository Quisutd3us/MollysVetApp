import {useState} from "react";
import './App.css'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ListClients from "./components/ListClients.jsx";

function App() {
  // create patient state
  const [patients, setPatients] = useState([])
  const createPatients = (objPatient) => {
    const newPatient = [objPatient, ...patients]
    setPatients(newPatient)
  }
  return (
      <div className={"container mx-auto mt-20"}>
        <Header/>
        <div className={'mt-12 md:flex justify-between'}>
          <Form
              createPatients={createPatients}
          />
          <ListClients/>
        </div>
      </div>
  )
}

export default App
