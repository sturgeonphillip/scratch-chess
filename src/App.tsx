// import Board from './Components/Board/Board'
import Square from './Components/experiment/Squares'
import Rook from './Components/Pieces/Rook'
import Bishop from './Components/Pieces/Bishop'


export default function App() {
	return (
		<>
		<h1>Chess from Scratch</h1>
		<Bishop />
		<Rook />
		<Square />
		{/* <Board /> */}
		
		</>
	)
}