import { createSlice } from "@reduxjs/toolkit";

export type TComments = {
  id: number;
  body: string;
  color: string;
};

export type TItem = {
  id: number;
  name: string;
  comments: TComments[];
};

export interface I_Items {
  items: TItem[];
  selectedItem: number | null;
}

const initialState: I_Items = {
  items: [],
  selectedItem: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    createItem: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    setSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
    addComment: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === state.selectedItem) {
          return {
            ...item,
            comments: [...item.comments, payload],
          };
        }
        return item;
      });
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { createItem, deleteItem, setSelectedItem, addComment, setItems } =
  itemsSlice.actions;
export default itemsSlice.reducer;
