export default function Square():JSX.Element {

return (
	<>
  {/* // test */}
  <button className={`bg-blue-800 m-1`}>Move Piece</button>
  <div className={`grid grid-rows-8 grid-cols-8 gap-1`}>
  <div className="text-black bg-lime-800">1</div> 
   <div className="text-black bg-blue-800">2</div>
   <div className="text-black bg-lime-800">3</div>
   <div className="text-black bg-blue-800">4</div>
   <div className="text-black bg-lime-800">5</div> 
   <div className="text-black bg-blue-800">6</div>
   <div className="text-black bg-lime-800">7</div>
   <div className="text-black bg-blue-800">8</div>
   <div className="text-black bg-lime-800">9</div> 
   <div className="text-black bg-blue-800">10</div>
   <div className="text-black bg-lime-800">11</div>
   <div className="text-black bg-blue-800">12</div>
  </div>

	</>
)
}

 // <div className={`container mx-auto`}>
//   <div className={`grid grid-cols-4 gap-6`}>
//     <div className={`flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100`}>1</div>
//     <div>2</div>
//     <div>3</div>
//     <div>4</div>
//   </div>
// </div>


