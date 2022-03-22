import { FunctionComponent } from 'react';
import Square, { SquareProps } from './Square';

const Board: FunctionComponent<{ grid: SquareProps[] }> = ({ grid }) => {
  // const arr = Object.values(grid);
  return (
    <>
      <div className={`container mx-auto p-5`}>
        <div
          className={`mt-5 grid grid-cols-8 border-4 border-stone-600 bg-stone-600`}
        >
          {grid.map((square) => {
            return (
              <Square
                key={square.coordinates}
                coordinates={square.coordinates}
                x={square.x}
                y={square.y}
                color={square.color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
