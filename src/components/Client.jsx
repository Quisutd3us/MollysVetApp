import PropTypes from 'prop-types';

function Client({patient, setPatient, delPatient}) {
  const {petName, clientName, clientEmail, enterPet, triagePet} = patient
  const handleDel = () => {
    const rsp = confirm('Are you sure to delete this Record')
    if (rsp) {
      delPatient(patient)
    }
  }
  return (
      <div className="border-l-8 border-l-emerald-500 bg-white shadow-xl rounded-lg my-10 py-8 px-3">
        {/*petName*/}
        <div className=" mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >PET NAME: {' '}
            <span
                className={'font-normal normal-case'}>{petName}
              </span>
          </p>
        </div>
        {/*clientName*/}
        <div className="petName mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >CLIENT NAME: {' '}
            <span
                className={'font-normal normal-case'}>{clientName}
              </span>
          </p>
        </div>
        {/*emailName*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >Email: {' '}
            <span
                className={'font-normal normal-case'}>{clientEmail}
              </span>
          </p>
        </div>
        {/*enterPet*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          > Date Enter Pet: {' '}
            <span
                className={'font-normal normal-case'}>{enterPet}
              </span>
          </p>
        </div>
        {/*triagePet*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >Triage Pet: {' '}
            <span
                className={'font-normal normal-case'}>{triagePet}
              </span>
          </p>
        </div>

        {/*Action Button for Patient Registry*/}
        <div className={'flex flex-row justify-end'}>
          <div className={'inline-flex'}>
            {/*Edit Button*/}
            <button
                className="bg-yellow-400 hover:bg-indigo-400 text-black font-bold py-2 px-4 mx-3 rounded inline-flex items-center"
                onClick={() => setPatient(patient)}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
              </svg>
              <span>{` Edit Patient`}</span>
            </button>
          </div>
          <div className={'inline-flex'}>
            {/*Delete Button*/}
            <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={handleDel}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
              </svg>
              <span>{` Delete Patient`}</span>
            </button>
          </div>
        </div>

      </div>
  );
}

Client.propTypes = {
  id: PropTypes.object,
  patient: PropTypes.object,
  petName: PropTypes.string,
  clientName: PropTypes.string,
  clientEmail: PropTypes.string,
  enterPet: PropTypes.string,
  triagePet: PropTypes.string,
  setPatient: PropTypes.func,
  delPatient: PropTypes.func
};
export default Client;