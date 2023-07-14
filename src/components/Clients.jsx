function Clients() {
  return (
      <div className="border-l-8 border-l-emerald-700 bg-white shadow-xl rounded-lg my-10 py-8 px-3">
        {/*petName*/}
        <div className=" mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >PET NAME: {' '}
            <span
                className={'font-normal normal-case'}>Molly
              </span>
          </p>
        </div>
        {/*clientName*/}
        <div className="petName mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >CLIENT NAME: {' '}
            <span
                className={'font-normal normal-case'}>jHON dOE
              </span>
          </p>
        </div>
        {/*emailName*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >Email: {' '}
            <span
                className={'font-normal normal-case'}>jdoe@gmail.com
              </span>
          </p>
        </div>
        {/*enterPet*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          > Date Enter Pet: {' '}
            <span
                className={'font-normal normal-case'}>01/07/2023
              </span>
          </p>
        </div>
        {/*triagePet*/}
        <div className="mb-5">
          <p
              className={'block text-gray-700 font-bold uppercase'}
          >Triage Pet: {' '}
            <span
                className={'font-normal normal-case'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur autem, commodi cum cupiditate dicta doloremque, earum error exercitationem fuga fugit incidunt inventore iste libero magni perferendis quae quis reiciendis tenetur voluptate?
              </span>
          </p>
        </div>
      </div>
  );
}

export default Clients;