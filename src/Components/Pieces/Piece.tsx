import { useState } from 'react';

export interface PieceProps {
  name: string; //  name: 'bQBishop' // color[0] + side + pieceType
  piece: string;
  color: string;
  side: string;
  image: string;
  position: [number, number]; //PositionProps;
}

const Piece = (piece: PieceProps) => {
  const [hover, setHover] = useState(false);
  piece.name = `${piece.color} - ${piece.side} - ${piece.piece}`;
  return (
    <>
      <div>
        <div className={hover ? 'block' : 'hidden'}>
          <h1>{piece.piece}</h1>
          <p>{piece.name}</p>
          <p>{piece.position}</p>
        </div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src={piece.image} alt={piece.name} />
        </div>
      </div>
    </>
  );
};

export default Piece;

// // https://github.com/tailwindlabs/tailwindcss/discussions/1507
// <div
//   className={
//     'w-full flex-grow lg:flex lg:items-center lg:w-auto ' +
//     (expanded ? 'block' : 'hidden')
//   }
// ></div>;
