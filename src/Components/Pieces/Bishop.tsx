// /** created to implement and test design */
import { useState } from 'react';
import Popover from './Popover';

const Bishop = () => {
  const [shown, setShown] = useState<boolean>(false);
  const piece = 'Bishop';
  const side = 'Queen';
  const board = `${side}'s side`;
  const coordinates = 'C8';
  const x = 2;
  const y = 7;
  const grid = `[${x}, ${y}]`;

  return (
    <>
      <div
        className='relative block ml-12'
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {/* <div> */}
        <img
          src='https://i.ibb.co/LxR7zNM/bBishop.png'
          alt='bBishop'
          className='z-10 h-20'
        />
        <div
          className={`absolute w-full -top-20 -right-7 ${
            shown ? 'block' : 'hidden'
          }`}
        >
          <Popover
            piece={piece}
            side={board}
            coordinates={coordinates}
            grid={grid}
          />
        </div>
      </div>
    </>
  );
};

export default Bishop;

// <a href='https://icons8.com/icon/fSDw_RjPHpcS/rounded-square'>
// <img
//   src='https://img.icons8.com/material-outlined/24/000000/rounded-square.png'
//   alt='square-rounded'
// />{' '}
// Rounded Square icon by Icons8
// </a>
