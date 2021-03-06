import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchProductFullText: (
      state: SearchState,
      action: PayloadAction<string>,
    ) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchProductFullText } = searchSlice.actions;

export default searchSlice.reducer;
