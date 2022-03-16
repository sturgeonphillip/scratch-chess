import { useState } from "react";
import Rook from './Rook';




export default function Empty() {
  const [piece, updatePiece] = useState(false);

  return (
    <>
        <div>
      <button onClick={() => updatePiece(true)}>

        {
          piece ? <Rook /> : null
        }
      </button>
        </div>
    </>
  );
}
