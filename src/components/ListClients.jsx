import Client from "./Client.jsx";
import PropTypes from "prop-types";

function ListClients({patients, setPatient, delPatient}) {
  return (
      <div className={'md:w-1/2 lg:w-2/3 mx-2'}>
        {patients && patients.length ? (
            <>
              <h4 className={'text-3xl font-black text-right'}>List Clients</h4>
              <p className={'mt-5 text-right'}>Manage your
                <span className={'text-indigo-600 font-bold'}> Clients and Dates</span>
              </p>
              <div className={'md:h-screen overflow-y-scroll'}>
                {/*Client INFO*/}
                {patients.map(patient =>
                    (
                        <Client
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            delPatient={delPatient}
                        />
                    )
                )}
              </div>
            </>
        ) : (
            <>
              <h4 className={'text-3xl font-black text-right'}>You Dont Have Patients for Now</h4>
              <p className={'mt-5 text-right'}>Uses The form For Add Patients
                <span className={'text-indigo-600 font-bold'}> And they show in this Section</span>
              </p>
            </>
        )}

      </div>
  )
}

ListClients.propTypes = {
  patients: PropTypes.array,
  setPatient: PropTypes.func,
  delPatient: PropTypes.func
}

export default ListClients;
