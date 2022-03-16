import Rook from '../../Components/Pieces/Rook';
// import Piece from '../../Components/Pieces/Piece'
import { useState } from 'react';

export default function Square():JSX.Element {

	
	const blueBorder = `max-w-xs max-h-xs h-50 w-50 bg-black border-8 border-blue-400 aspect-square text-white flex`
	const	blackBorder = `max-w-xs max-h-xs h-50 w-50 bg-black border-4 border-slate-400 aspect-square text-white flex`
	const	coordinate = 'A3'
	

	/**
	 * if button is active (clicked) change style to active, else if inactive style is inactive
	 * handle click looks at true / false for active
	 * 
	 */

	
	const [activeColor, setActiveColor] = useState(blackBorder);
	const [active, setActive] = useState(false);
	const handle = () => {
		if (active === false) setActive(true)
		if (active === true)  setActive(false)

		if (active === true) setActiveColor(blueBorder);
		if (active === false) setActiveColor(blackBorder)
	}

  return (
    <>
      {/* <div className={'max-w-xs max-h-xs h-50 w-50 bg-black border-8 border-slate-400 aspect-square text-white'}> */}
			
				<div className={activeColor}>
			<button onClick={handle} className={'grow'}>
        <div className={`m-1 grow`}>{coordinate}</div>
					{/* <Piece /> */}
				
					<Rook />			
			</button>
					</div>
    </>
  );
}
