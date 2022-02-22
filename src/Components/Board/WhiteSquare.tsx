import {GridItem} from '../../types/SquareTypes'


export default function WhiteSquare({coordinate}:GridItem):JSX.Element {

  return (
    <>
      <div className={`white-square`}>
        <div className={`m-1`}>{coordinate}</div>
      </div>
    </>
  )
}

