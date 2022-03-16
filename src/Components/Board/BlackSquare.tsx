import {GridItem} from '../../types/SquareTypes'

// const Piece:PieceType = 'bishop';


export default function BlackSquare({coordinate}:GridItem):JSX.Element {

  return (
    <>
      <div className={`black-square`}>
        <div className={`m-1`}>{coordinate}</div>
      </div>
    </>
  );
}
