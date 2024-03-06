import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import { getTodosGroupedByColumn } from '../../lib/utils/getTodosGroupedByColumn';

interface BoardState{
    board: Board;
    getBoard:()=>void;
    setBoardState: (board: Board) => void;
}
const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async() => {
    const board= await getTodosGroupedByColumn();
    set({board});
  },
  setBoardState:(board) => set({board})
}))
export default useBoardStore;