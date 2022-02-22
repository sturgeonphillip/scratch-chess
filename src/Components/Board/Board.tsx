import blackRow, { whiteRow } from "../Rows/rowCreator";
import { gridArray } from "./grid";
// import grid, {gridArray} from './grid'
// console.log(grid())
// const {A, B, C, D, E, F, G, H } = grid;

console.log(gridArray);
export default function Board() {
  return (
    <>
      <div className={`container mx-auto`}>
        <div
          className={`mt-10 grid grid-rows-8 grid-cols-8 border-4 border-stone-600`}
        >
          {gridArray.map((arr, idx) => {
            if (idx % 2 === 0) {
              return <>{whiteRow(arr)}</>;
            } else {
              return <>{blackRow(arr)}</>;
            }
          })}
        </div>
      </div>
    </>
  );
}
