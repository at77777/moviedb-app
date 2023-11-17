import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterface";
import {IPagination} from "../../interfaces/paginationInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IPagination<IMovie>, void>(
    'movieSlice/getALL',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results
        })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getALL: getAll
}

export {
    movieReducer,
    movieActions
}