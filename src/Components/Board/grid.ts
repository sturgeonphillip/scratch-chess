// import { GridTypes } from "../../types/SquareTypes"

const createGrid = () => {
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

const gridArray = createGrid();
export default gridArray;
