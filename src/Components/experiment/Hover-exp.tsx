import { useState } from 'react';

const Hover = () => {
  const [shown, setShown] = useState<boolean>(false);

  return (
    <>
      <div
        className='w-24 h-24 p-1 font-serif text-2xl bg-blue-400 border-2 border-red-600 place-content-center'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {shown ? <p>Dog House</p> : false}
      </div>
    </>
  );
};

export default Hover;

// <div>
//           HOVER
//           <div className={shown ? 'inline-block' : 'hidden'}>REVEAL!</div>
//         </div>
//       </div>
