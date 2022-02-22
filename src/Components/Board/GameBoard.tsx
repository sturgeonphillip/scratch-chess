import WhiteSquare from './WhiteSquare'
import BlackSquare from './BlackSquare'

// import grid from './grid';
export default function GameBoard() {
	return (
		<>
		<div className={`container mx-auto`}>
		<div className={`grid grid-rows-8 grid-cols-8 border-4 border-stone-600`}>
{/* 	<WhiteSquare />
			<BlackSquare />
			<WhiteSquare />
			<BlackSquare />
			<WhiteSquare />
			<BlackSquare />
			<WhiteSquare />
			<BlackSquare />	 */}
		</div>
		</div>
			{/* <Square /> */}
		</>
	)
}