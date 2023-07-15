import Client from "./Client.jsx";
import PropTypes from "prop-types";

function ListClients({patients}) {
  return (
      <div className={'md:w-1/2 lg:w-2/3 mx-2'}>
        <h4 className={'text-3xl font-black text-right'}>List Clients</h4>
        <p className={'mt-5 text-right'}>Manage your
          <span className={'text-indigo-600 font-bold'}> Clients and Dates</span>
        </p>
        <div className={'md:h-screen overflow-y-scroll'}>
          {/*Client INFO*/}
          {patients.map((patient, index) =>
              (
                  <Client
                      key={index}
                      patient={patient}
                  />
              )
          )}
        </div>
      </div>
  );
}

ListClients.propTypes = {
  patients: PropTypes.array
}

export default ListClients;
