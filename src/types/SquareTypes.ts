export type Style = 'black-square' | 'white-square';

export type PieceType =
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king'
  | null;

export interface ChessPiece {
  empty: null;
  pawn: string;
  rook: string;
  knight: string;
  bishop: string;
  queen: string;
  king: string;
}

export interface GridItem {
  // style: string;
  coordinate: string;
}

export interface GridTypes {
  [index: string | number]: string | string[] | number;
}
