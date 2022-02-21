// import Square from './Square'
// import grid from './grid'
// console.log(grid())

const grid: string[][] = Array.from({ length: 8 }, (_, i) =>
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
	 console.log(grid[0]);

export default function Board() {

	return (
		<>
		<ul>
			{
				grid.map((x) => {
					// const rowKey = x[0][0].split('')[0];
					const row = x;
					return (
						
							row.map(s => <h2 key={s}>{s}</h2>)
					)
				})
			}
		</ul>
		</>
	)
}
// const gridLetters:string[][] = grid.map((x) => {
// 	for ( let i = 0; i < grid.length; i++ ) {
// 		console.log(`row: ${i + 1}`)
// 		console.log(grid[i])
		
// 	}

// })
// console.log(gridLetters);