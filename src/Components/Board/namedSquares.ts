console.log("before");
function create() {
  const letters = Array.from({ length: 8 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  const board = [];
  for (let i = 0; i < letters.length; i++) {
    let column = letters[i];
    for (let j = 0; j < 8; j++) {
      let row = j + 1;
      board.push(column + row);
    }
  }
  return board;
}

console.log(create());
console.log("after");
