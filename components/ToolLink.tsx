export const ToolLink = (props: { title: string; description: string }) => {
    return (
      <div className='float-left mb-2 mr-2'>
        <a className='transform hover:scale-95 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-300 shadow-full inline-block border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md p-3 dark:text-gray-500 dark:bg-gray-800 dark:border-gray-700'>
          <h1 className='font-semibold text-sm sm:text-regular'>{props.title}</h1>
          <p className='text-xs'>{props.description}</p>
        </a>
      </div>
    );
  }