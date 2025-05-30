import { BoardConfig } from "./abstractBoard/boardFactory";

export interface MulticolorStone {
  colors: string[];
  annotation?: "CR" | "MA";

  // currently only supported on grid board
  background_color?: string;
  disable_move?: true;
}

/**
 * The config type in the client.
 */
export type DefaultBoardConfig = {
  board: BoardConfig;
};

export type DefaultBoardState = {
  board: MulticolorStone[] | MulticolorStone[][];
  backgroundColor?: string;
  // TODO: we should probably merge this into board
  // score would be some field on MulticolorStone
  score_board?: (string[] | null)[] | (string[] | null)[][];
};
