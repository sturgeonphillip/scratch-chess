export interface SquareProps {
  coordinates: string;
  x: number;
  y: number;
  color: string;
}

const grid: SquareProps[] = [];
const createGrid = () => {
  const xAxis: string[] = Array.from({ length: 8 }, (val, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );
  // Array.from({ length: 8 }, (val, i) =>
  //   String.fromCharCode('A'.charCodeAt(0) + i)
  // );

  for (let y = 7; y >= 0; y--) {
    for (let x = 0; x < xAxis.length; x++) {
      const location = xAxis[x] + String([y + 1]);
      const color = (x + y) % 2 === 0 ? 'white-square' : 'black-square';
      const Square: SquareProps = {
        coordinates: location,
        x: x,
        y: y,
        color: color,
      };

      grid.push(Square);
    }
  }

  return grid;
};

createGrid();
console.log(grid);

export default grid;
