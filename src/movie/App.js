import React, {useReducer, useEffect} from 'react';
import './App.css';
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const API_KEY = '4a3b711b'
const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null
      }
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}

const App = () => {
  // const [loading, setLoading] = useState(true)
  // const [movies, setMovies] = useState([])
  // const [errorMessage, setErrorMessage] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(json => {
        // setMovies(json.Search)
        // setLoading(false)
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: json.Search
        })
      })
  }, [])

  const search = searchValue => {
    // setLoading(true)
    // setErrorMessage(null)
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    })

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      if (json.Response === 'True') {
        // setMovies(json.Search)
        // setLoading(false)
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: json.Search
        })
      } else {
        // setErrorMessage(json.Error)
        // setLoading(false)
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: json.Error
        })
      }
    })
  }

  const {loading, movies, errorMessage} = state

  return (
    <div className="App">
      <Header text="HOOKED"/>
      <Search search={search}/>
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}


export default App;
