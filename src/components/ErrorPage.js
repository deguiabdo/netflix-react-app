import React from 'react'

function ErrorPage() {
  return (
    <>
      <div className='w-full h-full text-white grid place-items-center  text-center'>
        <div className=' md:w-[50%] w-[80%]'>
          <h1 className=' mt-[20%] text-8xl'>404</h1>
          <h1 className='mt-4 text-4xl'>Sorry, the page not found</h1>
          <p className='mt-2 text-lg'>
            The link you followed probably broken, or the page has been removed
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage