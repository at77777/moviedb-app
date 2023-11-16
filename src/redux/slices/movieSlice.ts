import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterface";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
})

const {reducer: movieReducer} = movieSlice;

const movieActions = {

}

export {
    movieReducer,
    movieActions
}