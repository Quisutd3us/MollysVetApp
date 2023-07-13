function Form() {
  return (
      <div className={'md:w-1/2 lg:w-1/3 mx-2'}>
        <h4 className={'text-3xl text-black'}>Process Clients</h4>
        <p className={'my-5'}>Add Clients and
          <span className={'text-indigo-600 font-bold'}> Managed</span>
        </p>
        <form className="bg-white shadow-lg rounded-lg my-10 py-8 px-3">
          {/*petName*/}
          <div className="petName mb-7">
            <label
                className={'block text-gray-700 font-bold uppercase'}
                htmlFor={'petName'}
            >Name Pet</label>
            <input
                id={'petName'}
                className={'border-2 rounded-md border-indigo-600 w-full p-2 mt-2 placeholder-indigo-400'}
                type={'text'}
                placeholder={'Ej.Molly'}
                required={true}
            />
          </div>
          {/*clientName*/}
          <div className="clientName mb-7">
            <label
                className={'block text-gray-700 font-bold uppercase'}
                htmlFor={'clientName'}
            >Name Client</label>
            <input
                id={'clientName'}
                className={'border-2 rounded-md border-indigo-600 w-full p-2 mt-2 placeholder-indigo-400'}
                type={'text'}
                placeholder={'Ej. Jon Doe'}
                required={true}
                maxLength={20}
            />
          </div>
          {/*emailClient*/}
          <div className="clientEmail mb-7">
            <label
                className={'block text-gray-700 font-bold uppercase'}
                htmlFor={'clientEmail'}
            >Email Client</label>
            <input
                id={'clientEmail'}
                className={'border-2 rounded-md border-indigo-600 w-full p-2 mt-2 '}
                type={'email'}
                placeholder={'Ej. name@email.com'}
                required={true}
            />
          </div>
          {/*enterPet*/}
          <div className="enterPet my-5">
            <label
                className={'block text-gray-700 font-bold uppercase'}
                htmlFor={'enterPet'}
            >Enter Date</label>
            <input
                id={'enterPet'}
                className={'border-2 rounded-md border-indigo-600 w-full p-2 mt-2 placeholder-indigo-400'}
                type={'date'}
                required={true}
            />
          </div>
          {/*triagePet*/}
          <div className="triagePet mb-5">
            <label
                className={'block text-gray-700 font-bold uppercase'}
                htmlFor={'triagePet'}
            >Triage Pet</label>
            <textarea
                className={'border-2 rounded-md border-indigo-600 w-full p-2 mt-2 placeholder-indigo-400'}
                id={'triagePet'}
                required={true}
                rows={5}
                cols={33}
                maxLength={200}
                minLength={50}
                placeholder={'Molly have pop fiber'}
            ></textarea>
          </div>

          {/*Submit*/}
          <input
              type={'submit'}
              className={'bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-700 transition-colors'}
              value={'Add Pet'}
          />
        </form>
      </div>
  );
}

export default Form;
