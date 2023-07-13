import Clients from "./Clients.jsx";

function ListClients() {
  return (
      <div className={'md:w-1/2 lg:w-2/3 mx-2'}>
        <h4 className={'text-3xl font-black text-right'}>List Clients</h4>
        <p className={'my-5 text-right'}>Manage your
          <span className={'text-indigo-600 font-bold'}> Clients and Dates</span>
        </p>
        {/*Client INFO*/}
        <Clients/>
        <Clients/>
        <Clients/>
      </div>
  );
}

export default ListClients;