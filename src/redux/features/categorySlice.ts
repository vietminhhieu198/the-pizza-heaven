import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from 'common/types/category.model';
import appService from 'services/appService';

export const getCategoryList = createAsyncThunk(
  'category/getCategoryList',
  async () => {
    const response = await appService.getCategoryList();
    return response;
  },
);

export const deleteCategoryById = createAsyncThunk(
  'category/deleteCategoryById',
  async (categoryID: number) => {
    const response = await appService.deleteCategoryById(categoryID);
    return response;
  },
);

export const getCategoryDetailById = createAsyncThunk(
  'category/getCategoryDetailById',
  async (categoryID: number) => {
    const response = await appService.getCategoryDetailById(categoryID);
    return response;
  },
);

export const updateCategoryById = createAsyncThunk(
  'category/updateCategoryById',
  async (params: { updatedCategory: ICategory; categoryID: number }) => {
    const response = await appService.updateCategoryById(
      params.updatedCategory,
      params.categoryID,
    );
    return response;
  },
);

export const addNewCategoryToDB = createAsyncThunk(
  'category/addNewCategoryToDB',
  async (newCategory: ICategory) => {
    const response = await appService.addNewCategory(newCategory);
    return response;
  },
);

export interface CategoryState {
  categoryList: ICategory[];
  newCategory: ICategory | null;
  editedCategory: ICategory | null;
  categoryDetail: ICategory;
  isLoading: boolean;
}

const initialState: CategoryState = {
  categoryList: [],
  newCategory: null,
  editedCategory: null,
  categoryDetail: {
    id: 0,
    categoryName: '',
  },
  isLoading: true,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    //getCategoryList
    [getCategoryList.pending.toString()]: (state: CategoryState) => {
      state.isLoading = true;
    },
    [getCategoryList.fulfilled.toString()]: (
      state: CategoryState,
      action: PayloadAction<ICategory[]>,
    ) => {
      if (state.newCategory) {
        state.categoryList = [state.newCategory, ...action.payload];
        state.isLoading = false;
      }
      if (state.editedCategory) {
        const updatedCategoryList = state.categoryList.map(
          (categoryItem: ICategory) => {
            if (categoryItem.id === state.editedCategory?.id)
              return state.editedCategory;
            return categoryItem;
          },
        );
        state.categoryList = updatedCategoryList;
        state.isLoading = false;
      }
      state.categoryList = [...action.payload];
      state.isLoading = false;
    },
    [getCategoryList.rejected.toString()]: (state: CategoryState) => {
      state.isLoading = false;
    },

    //deleteCategoryById
    [deleteCategoryById.pending.toString()]: (state: CategoryState) => {
      state.isLoading = true;
    },
    [deleteCategoryById.fulfilled.toString()]: (
      state: CategoryState,
      action: PayloadAction<number>,
    ) => {
      const categoryListAfterDeleting = state.categoryList.filter(
        (categoryItem: ICategory) => categoryItem.id !== action.payload,
      );
      state.categoryList = [...categoryListAfterDeleting];
      state.isLoading = false;
    },
    [deleteCategoryById.rejected.toString()]: (state: CategoryState) => {
      state.isLoading = false;
    },

    //getCategoryDetailById
    [getCategoryDetailById.pending.toString()]: (state: CategoryState) => {
      state.isLoading = true;
    },
    [getCategoryDetailById.fulfilled.toString()]: (
      state: CategoryState,
      action: PayloadAction<ICategory>,
    ) => {
      state.categoryDetail = { ...action.payload };
      state.isLoading = false;
    },
    [getCategoryDetailById.rejected.toString()]: (state: CategoryState) => {
      state.isLoading = false;
    },

    //updateCategoryById
    [updateCategoryById.pending.toString()]: (state: CategoryState) => {
      state.isLoading = true;
    },
    [updateCategoryById.fulfilled.toString()]: (
      state: CategoryState,
      action: PayloadAction<ICategory>,
    ) => {
      state.editedCategory = { ...action.payload };
      state.isLoading = false;
    },
    [updateCategoryById.rejected.toString()]: (state: CategoryState) => {
      state.isLoading = false;
    },

    //addNewCategory
    [addNewCategoryToDB.pending.toString()]: (state: CategoryState) => {
      state.isLoading = true;
    },
    [addNewCategoryToDB.fulfilled.toString()]: (
      state: CategoryState,
      action: PayloadAction<ICategory>,
    ) => {
      state.newCategory = { ...action.payload };
      state.isLoading = false;
    },
    [addNewCategoryToDB.rejected.toString()]: (state: CategoryState) => {
      state.isLoading = false;
    },
  },
});

export default categorySlice.reducer;