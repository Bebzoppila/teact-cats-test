import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
export type CatItem = {
  url: string;
  id: number;
};

type CatsState = {
  allCats: CatItem[];
  likedCats: CatItem[];
};
const initialState: CatsState = {
  allCats: [],
  likedCats: [],
};

export const upoadSomeCats = createAsyncThunk(
  "cats/upoadSomeCats",
  async (_, thunkAPI) => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15&height=255",
      {
        headers: {
          "x-api-key": "e75b97c5-db0b-4cae-8dc6-435dc6dfaa8a",
        },
      }
    );
    if (!response.ok) {
      return thunkAPI.rejectWithValue([]);
    }
    return await response.json();
  }
);

export const catsSlice = createSlice({
  name: "cats",
  initialState,

  reducers: {
    addLikedCats: (state, action: PayloadAction<CatItem>) => {
      state.likedCats.push(action.payload);
    },

    deleteLikedCats: (state, action: PayloadAction<number>) => {
      console.log(state, action.payload);
      
      state.likedCats = state.likedCats.filter(
        (cat) => cat.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(upoadSomeCats.fulfilled, (state, action) => {
      state.allCats = state.allCats.concat(action.payload);
    });
  },
});

export const { addLikedCats, deleteLikedCats } = catsSlice.actions;
export default catsSlice.reducer;
