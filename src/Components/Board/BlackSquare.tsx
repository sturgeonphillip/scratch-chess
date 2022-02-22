import {GridItem} from '../../types/SquareTypes'

export default function BlackSquare({coordinate}:GridItem):JSX.Element {
  return (
    <>
      <div className={`black-square`}>
        <div className={`m-1`}>{coordinate}</div>
      </div>
    </>
  );
}
