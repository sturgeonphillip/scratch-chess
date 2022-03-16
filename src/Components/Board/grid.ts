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
    return column.reverse();
  });
  return letters;
};

const gridArray = createGrid();
console.log(gridArray);
export default gridArray;

// const griddir = [['A1', 'A2', '...'], ['B1', 'B2', '...'], ['C', '...'], ['d']];
/**
 * // white row
   		if (idx % 2 === 0) {
					return <div key={el}><WhiteSquare coordinate={el} /></div>
				} else {
					return <div key={el}><BlackSquare coordinate={el} /></div>
				}

  // black row
   		if (idx % 2 === 0) {
         return <div key={el}><BlackSquare coordinate={el} /></div>
      } else {
        return <div key={el}><WhiteSquare coordinate={el} /></div>
				}
 
 // board:
        if (idx % 2 === 0) {
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
 */
