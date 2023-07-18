import {useState} from "react";
import './App.css'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ListClients from "./components/ListClients.jsx";

function App() {
  // create patients state
  const [patients, setPatients] = useState([])

  // create patient state
  const [patient, setPatient] = useState({})

  // del patient
  const delPatient = (item) => {
    // Find and load array without patient to del
    const delArray = patients.filter((patientState) => patientState.id !== item.id)
    // Update patients Array
    setPatients(delArray)
  }
  return (
      <div className={"container mx-auto mt-20"}>
        <Header/>
        <div className={'mt-12 md:flex justify-between'}>
          <Form
              patients={patients}
              setPatients={setPatients}
              patient={patient}
              setPatient={setPatient}
          />
          <ListClients
              patients={patients}
              setPatient={setPatient}
              delPatient={delPatient}
          />
        </div>
      </div>
  )
}

export default App
