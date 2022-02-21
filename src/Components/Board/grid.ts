const grid = () => {
  // const board: string[] = [];
  const letters: string[][] = Array.from({ length: 8 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  ).map((x) => {
    const column: string[] = [];
    let i = 0;
    while (i < 8) {
      column.push(x.concat((i + 1).toString()));
      i++;
    }
    return column;
  });
  return letters;
};

console.log(grid());
console.log("hello!");
export default grid;

/**
 * function create() {
  const letters = Array.from({ length: 8 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  const board = [];
  for (let i = 0; i < letters.length; i++) {
    const column: string = letters[i];
    for (let j = 0; j < 8; j++) {
      const row = String(j + 1);
      board.push(column + row);
    }
  }
  return board;
}
console.log(create());

// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports

// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports


/**
 * // export interface SquareProps {

// function makeBoard() {
//   const grid = [];
//   const letters: string[] = Array.from({ length: 8 }, (_, i) =>
//     String.fromCharCode("A".charCodeAt(0) + i)
//   );
//   const sqColor = (i: number, j: number): string => {
//     if (i % 2 === 0 && j % 2 === 0) return "black";
//     if (i % 2 !== 0 && j % 2 !== 0) return "black";
//     return "white";
//   };
//   for (let i = 0; i < letters.length; i++) {
//     const row: object[] = [];
//     for (let j = 0; j < 8; j++) {
//
//       row.push(square);
//     }
//     grid.push(row);
//   }
//   return grid;
// }
// const allSquares = makeBoard();
// // console.log(typeof allSquares);
// // console.log(allSquares);
// export default allSquares;

 */
