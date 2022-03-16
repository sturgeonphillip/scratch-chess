import { useState } from 'react';


function RookImage() {
	return (
		<>
		<h1>Rook</h1>
		<div>
			<img src="https://i.ibb.co/2Sr3VHg/wRook.png" alt="wRook" className="h-24" />
		</div>
				</>
	)
}
const Empty = () => <div className={'h-9 w-9'}></div>;


export default function Rook() {
	const [show, setShow] = useState<boolean>(false);
	const handleClick = () => {
		if (show === true) return setShow(false);
		if (show === false) return setShow(true);
	}
	return (
		<>
		<button className={'border-2 border-slate-500 text-2xl'}
		onClick={handleClick}>
			<div>
				{show ? <RookImage /> : <Empty />}
			</div>
			</button>
				</>
	)
}
