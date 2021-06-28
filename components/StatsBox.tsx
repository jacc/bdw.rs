export const StatsBox = (props: { title: string, description: string, background: string, color: string }) => {
  return (
    <div className='float-left mb-2 mr-2'>
      <a className={`text-${props.color} hover:bg-${props.background} shadow-full inline-block border transition ease-in-out bg-${props.background} hover:bg-red-50 rounded-md p-3`}>
        <h1 className='font-semibold text-sm sm:text-regular'>{props.title}</h1>
        <p className='text-xs'>{props.description}</p>
      </a>
    </div>
  );
}