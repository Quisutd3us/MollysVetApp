import PropTypes from 'prop-types';

function Client({patient}) {
  const {petName, clientName, clientEmail, enterPet, triagePet} = patient
  return (
      <div className="border-l-8 border-l-emerald-700 bg-white shadow-xl rounded-lg my-10 py-8 px-3">
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
      </div>
  );
}

Client.propTypes = {
  patient:PropTypes.object,
  petName: PropTypes.string,
  clientName: PropTypes.string,
  clientEmail: PropTypes.string,
  enterPet: PropTypes.string,
  triagePet: PropTypes.string
};
export default Client;