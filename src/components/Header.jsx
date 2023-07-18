function Header() {
  return (
      <div className={'flex flex-col align-middle justify-evenly'}>
        <h1 className={'font-black text-5xl text-center'}>{'Molly\'s'} App</h1>
        <h4 className={'text-indigo-600 text-3xl text-center'}>Vet Control</h4>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
            <div className="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 dark:bg-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-gray-100 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
        </div>
      </div>

  )
}

export default Header;