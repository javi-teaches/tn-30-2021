import { useState, useEffect, useRef } from "react";

function Main () {
  const [ movie, setMovie ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ title, setTitle ] = useState(null);
  const [ error, setError ] = useState(false);

  const inputMovieTitle = useRef();

  // componentDidMount && componentDidUpdate && componentWillUnmount
  useEffect(() => {
    if (title) {
      fetch(`https://www.omdbapi.com/?t=${title}&apikey=17e96682`)
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          if (data.Response === "True") {
            setMovie(data);
            setError(false);
          }

          if (data.Response === "False") {
            setMovie(null);
            setError(true);
          }
        })
        .catch(err => console.log(err))
    }

    return console.log("Se desmontó el componente");
  }, [title]);

  const searchMovie = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTitle(inputMovieTitle.current.value);
    inputMovieTitle.current.value = "";
  }

  return (
    <>
      <form action="" onSubmit={searchMovie}>
        <label>
          Título: <br />
          <input type="text" name="movieTitle" ref={inputMovieTitle} />
        </label>
        <br />
        <button type="submit">Busca una película</button>
      </form>

      { isLoading && <p>Cargando datos para: {title}</p> }
      { error && <p>No obtuvimos resultados para: {title}</p> }
      { !isLoading && movie && (
        <>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} width="300" />
          <p>{movie.Year}</p>
        </>
      ) }
    </>
  )
}

export default Main;