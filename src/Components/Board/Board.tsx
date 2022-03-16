import blackRow, { whiteRow } from "../Rows/rowCreator";
import gridArray from "./grid";
// import grid, {gridArray} from './grid'
// console.log(grid())
// const {A, B, C, D, E, F, G, H } = grid;

// console.log(gridArray);
export default function Board() {
  return (
    <>
      <div className={`container mx-auto p-10`}>
        <div
          className={`mt-10 grid grid-rows-8 grid-cols-8 border-4 border-stone-600`}
          // className={`mt-10 grid grid-cols-8 border-4 border-stone-600`}
        >
          {gridArray.map((arr, idx) => {
            
            if (idx % 2 !== 0) {
              return (
                <>        
              <div key={idx}>{whiteRow(arr)}</div>
              </>
              )
            } else {
              return (
                <>        
              <div key={idx}>{blackRow(arr)}</div>
              </>
              )
            }
          })}
        </div>
      </div>
    </>
  );
}

/**
   		if (idx % 2 === 0) {
					return <div key={el}><WhiteSquare coordinate={el} /></div>
				} else {
					return <div key={el}><BlackSquare coordinate={el} /></div>
				}
 */