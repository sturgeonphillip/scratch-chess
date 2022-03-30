import { useState } from 'react';
// import './bBishop.sprite.css';

const Hover = () => {
  const [shown, setShown] = useState<boolean>(false);
  // const piece = 'Bishop';

  return (
    <>
      <div
        className='w-24 h-24 m-2 text-red-800 bg-blue-400 place-content-center'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        HOVER
        <div className={shown ? 'block' : 'hidden'}>REVEAL!</div>
        {/*         
        <button
          type='button'
          className='
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
  '
          data-bs-toggle='popover'
          data-bs-placement='top'
          data-bs-content='Top popover'
        >
          Popover on top
        </button> */}
        {/* {shown && (
          <div
            className='
    px-6
    py-2.5
    border-gray-400
    border
    bg-zinc-300
    text-teal-500
    font-medium
    text-xs
    leading-tight
    rounded
    shadow-md
    hover:bg-stone-50 hover:shadow-lg
    focus:bg-stone-50 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-stone-50 active:shadow-lg
    transition
    duration-300
    ease-in-out
  '
            data-bs-toggle='popover'
            data-bs-placement='right'
            data-bs-content='Right popover'
          >
            Popover on right
          </div>
        )} */}
      </div>
    </>
  );
};
export default Hover;
{
  /* 
/**
 * 
      <div className='inline-block px-2 py-1 ml-2 font-serif leading-none border-2 border-gray-400 
rounded bg-neutral-100'>
        <div className='flex mb-1 border-b border-gray-400'>
          <h1 className='text-xl text-gray-600 grow'>{piece}</h1>
          {/* <span className='object-contain'> 
//   <img
//     src='https://i.ibb.co/LxR7zNM/bBishop.png'
//     alt='bBishop'
//     className='object-contain w-6 h-6 pr-1'
//   />
//   {/* </span> */
}
// </div>

// <div className='object-contain pl-2 text-xs list-disc list-outside'>
//   <p>
//     <span className='inline-flex items-center justify-center flex-shrink w-2 h-2 mr-1 bg-gray-400 
rounded-sm'>
//       {/* <svg
//         fill='none'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeWidth='2.5'
//         className='w-3 h-3'
//         viewBox='0 0 24 24'
//       > */}
//       {/* <path d='M20 6L9 17l-5-5'></path> */}

//       {/* </svg> */}
//       <img
//         src='https://img.icons8.com/material/24/000000/rounded-square.png'
//         alt='square-filled'
//       />
//     </span>
//     Producer
//   </p>
//   <p>
//     <span className='inline-flex items-center justify-center flex-shrink w-2 h-2 mr-1 bg-gray-400 
rounded-sm'>
//       <img
//         src='https://img.icons8.com/material/24/000000/rounded-square.png'
//         alt='square-filled'
//       />
//     </span>
//     erin@film.com
//   </p>
//   <p>
{
  /* <span className='inline-flex items-center justify-center flex-shrink w-2 h-2 mr-1 bg-gray-400 
rounded-sm'>
              <img
                src='https://img.icons8.com/material/24/000000/rounded-square.png'
                alt='square-filled'
              />
            </span>
            Kangaroo Jack IX
          </p>
        </div>
      </div> */
}

