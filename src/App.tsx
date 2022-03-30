import Square from './Components/Board/Square';
import Bishop from './Components/Pieces/Bishop';
import Board from './Components/Board/Board';
import grid from './Components/Board/grid';
// import Piece from './Components/Pieces/Piece';
import Hover from './Components/experiment/Hover-exp';
import PopTart from './Components/experiment/PopTart';

export default function App() {
  return (
    <>
      <h1 className='my-6 text-3xl font-extrabold'>Chess from Scratch</h1>

      <Hover />
      <PopTart />
      <div className='max-w-xs p-5 max-h-xs'>
        <Square coordinates={'B4'} x={1} y={5} color={'white-square'} />
      </div>
      <Bishop />
      <Board grid={grid} />
      {/* <Piece /> */}
    </>
  );
}
