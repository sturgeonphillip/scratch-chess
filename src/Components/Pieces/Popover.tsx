export interface Popover {
  piece: string;
  coordinates: string;
  grid: string;
  side?: string;
}

export default function Popover({ piece, coordinates, grid, side }: Popover) {
  // piece = 'bishop';
  return (
    <>
      <div className='absolute inline-block px-2 pb-1 font-serif leading-snug border-2 border-gray-400 rounded bg-neutral-100'>
        {/* <div className='flex p-1 border-b mb-0.5 border-gray-400'> */}
        <h1 className='text-lg text-gray-600 underline underline-offset-2 grow'>
          {piece}
        </h1>
        {/* </div> */}

        <div className='flex-col flex-1 text-xs list-disc'>
          <div className='flex'>
            <img
              src='https://img.icons8.com/material/24/000000/rounded-square.png'
              alt='square-filled'
              className='inline-flex items-center justify-center w-2 h-2 mr-1 bg-gray-400 rounded-sm'
            />
            <p className='max-w-auto'>{side}</p>
          </div>
          <div className='flex'>
            <img
              src='https://img.icons8.com/material/24/000000/rounded-square.png'
              alt='square-filled'
              className='inline-flex items-center justify-center w-2 h-2 mr-1 bg-gray-400 rounded-sm'
            />
            <p className='max-w-auto'>{coordinates}</p>
          </div>
          <div className='flex'>
            <img
              src='https://img.icons8.com/material/24/000000/rounded-square.png'
              alt='square-filled'
              className='inline-flex items-center justify-center w-2 h-2 mr-1 bg-gray-400 rounded-sm'
            />
            <p className='max-w-auto'>{grid}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
