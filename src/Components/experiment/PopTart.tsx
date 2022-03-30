import { useState } from 'react';

const PopTart = () => {
  const [pop, setPop] = useState<boolean>(false);

  return (
    <>
      <div
        className='w-24 h-24 p-1 m-1 text-2xl border-2 border-blue-600 place-content-center'
        onMouseEnter={() => setPop(true)}
        onMouseLeave={() => setPop(false)}
      >
        {pop ? (
          <p className='text-white bg-black'>Hot and crispy.</p>
        ) : (
          'READY?'
        )}
      </div>
    </>
  );
};

export default PopTart;

// potential tooltip type hover as seen in Mike North's feMasters introTS v3 course:
`https://github.com/mike-north/ts-fundamentals-v3/blob/a0e52adc63b4269bdb3bea83202ff58302613add/packages/website/src/utils/setup-two-slash.ts`;
