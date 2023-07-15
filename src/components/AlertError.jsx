function AlertError({children}) {
  return (
      <div className={'bg-red-800 m-3 p-3 font-bold rounded-lg text-white text-center'}>
        <p>{children}</p>
      </div>
  );
}

export default AlertError;