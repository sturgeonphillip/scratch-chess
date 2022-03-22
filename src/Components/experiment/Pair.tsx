import { useState } from 'react';
import SquareA, { SquareB } from './SquareAB';
import Empty from '../Board/Empty';
import Bishop from '../Pieces/Bishop';

export default function Pair() {
  const [move, setMove] = useState(false);
  const [occupy, setOccupy] = useState<JSX.Element>(<Empty />);
  const handle = () => {
    if (move === false) setMove(true);
    if (move === true) setOccupy(<Bishop />);
  };
  return (
    <>
      <div className='container p-10 mx-auto'>
        <div className={'grid grid-cols-2'}>
          <SquareA coordinate={'A2'} piece={<Bishop />} />

          <SquareB coordinate={'A1'} piece={occupy} />
        </div>
      </div>
    </>
  );
}

/**
 * if squareProps.[???] === true, set piece to empty
 */
