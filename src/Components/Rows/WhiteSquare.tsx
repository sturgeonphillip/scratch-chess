import { GridItem } from '../../types/SquareTypes';
// import Piece from

// const Piece: PieceType = "queen";

export default function WhiteSquare({ coordinate }: GridItem): JSX.Element {
  return (
    <>
      <div className={`white-square`}>
        <div className={`m-1`}>{coordinate}</div>
      </div>
    </>
  );
}
