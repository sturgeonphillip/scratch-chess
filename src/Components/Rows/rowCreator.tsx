import WhiteSquare from '../Board/WhiteSquare'
import BlackSquare from '../Board/BlackSquare'

export const whiteRow = (arr:string[]) => {
  return (
		<>
		<div>
		{
			arr.map((el, idx) => {
				if (idx % 2 === 0) {
					return <div key={el}><WhiteSquare coordinate={el}/></div>
				} else {
					return <div key={el}><BlackSquare coordinate={el} /></div>
				}
			})
		}
		</div>
		</>
	)
}

const blackRow = (arr:string[]) => {
	return (
		<>
		<div>
		{
			arr.map((el, idx) => {
				if (idx % 2 === 0) {
					return <div key={el}><BlackSquare coordinate={el} /></div>
				} else {
					return <div key={el}><WhiteSquare coordinate={el} /></div>
				}
			})
		}
		</div>
		</>
	)
}


export default blackRow;