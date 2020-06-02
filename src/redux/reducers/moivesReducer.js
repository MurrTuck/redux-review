const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
};

const SET_MOVIE_INFO = "SET_MOVIE_INFO";
const CONFIRM_MOVIE = "CONFIRM_MOVIE"

export function setMovieInfo(title, poster, rating) {
    return {
        type: SET_MOVIE_INFO,
        payload: { title, poster, rating }
        // payload: { title: title, poster: poster, rating: rating }
    }
}

export function confirmMovie(movieObj) {
    return {
        type: CONFIRM_MOVIE,
        payload: movieObj
    }
}

export default function movieReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MOVIE_INFO:
            const { title, poster, rating } = payload;
            return { ...state, title, poster, rating }
        case CONFIRM_MOVIE:
            return { ...state, movies: [...state.movies, payload] }
        default:
            return state
    }
}