export interface SquareABProps {
  // border: string
  piece: JSX.Element;
  coordinate: string;
  handleClick?: () => void;
}

export const blueBorder = `max-w-xs max-h-xs h-50 w-50 bg-black border-8 border-blue-400 aspect-square text-white flex`;
export const blackBorder = `max-w-xs max-h-xs h-50 w-50 bg-black border-4 border-slate-400 aspect-square text-white flex`;

export default function SquareA({
  coordinate,
  piece,
}: SquareABProps): JSX.Element {
  return (
    <>
      <div className={'${blueBorder} white-square'}>
        <div className={`m-1 grow`}>{coordinate}</div>
        <div>{piece}</div>
      </div>
    </>
  );
}

export function SquareB({
  coordinate,
  piece,
  handleClick,
}: SquareABProps): JSX.Element {
  return (
    <>
      <div className={`${blueBorder} black-square`}>
        <button onClick={() => handleClick}>
          <div className={`m-1 grow`}>{coordinate}</div>
          <div>{piece}</div>
        </button>
      </div>
    </>
  );
}
