import { FunctionComponent } from 'react';

export interface SquareProps {
  coordinates: string;
  x: number;
  y: number;
  color?: string;
}
const Square: FunctionComponent<SquareProps> = (props) => {
  const { coordinates, x, y, color } = props;

  return (
    <div className={color} key={coordinates}>
      <p className={'text-2xl'}>
        {coordinates}
        {`[${x}, ${y}]`}
      </p>
    </div>
  );
};

export default Square;
