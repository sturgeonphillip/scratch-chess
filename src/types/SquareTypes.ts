export type Style = "black-square" | "white-square";

export interface GridItem {
  coordinate: string;
}

export interface GridTypes {
  [index: string | number]: string | string[] | number;
}
