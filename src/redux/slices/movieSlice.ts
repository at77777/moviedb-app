import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movieInterface";
import { IPagination } from "../../interfaces/paginationInterface";
import { IGenre } from "../../interfaces/genresInterface";
import { movieService } from "../../services/movieService";
import { AxiosError } from "axios";

interface IState {
  movies: IMovie[];
  genres: IGenre[];
}

const initialState: IState = {
  movies: [],
  genres: [],
};

const getMovies = createAsyncThunk<IPagination<IMovie>, void>(
  "movieSlice/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await movieService.getMovies();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);

const getGenres = createAsyncThunk<IGenre, void>(
  "movieSlice/getGenres",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await movieService.getGenres();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload.genres;
      }),
});

const { reducer: movieReducer, actions } = movieSlice;

const movieActions = {
  ...actions,
  getMovies: getMovies,
  getGenres: getGenres,
};

export { movieReducer, movieActions };
