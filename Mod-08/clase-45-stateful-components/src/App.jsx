// Assets
import './Fonts.css';
import './App.css';

// Layout
import Layout from './layout/Wrapper';

// Components
import Sidenav from './components/Sidenav';
import Nav from './components/Nav';
import MainBoxes from './components/MainBoxes';
import LastMovie from './components/LastMovie';
import Genres from './components/Genres';

function App () {
  const genresList = [
    {name: "Sci-Fi", rating: 5},
    {name: "Clásicos", rating: 8},
    {name: "Acción", rating: 7},
    {name: "Terror", rating: 5},
    {name: "Animación", rating: 3},
    {name: "Aventura"},
    {name: "Ciencia Ficción"},
    {name: "Comedia", rating: 9},
    {name: "Documental", rating: 4},
    {name: "Drama", rating: 8},
    {name: "Fantasia", rating: 8},
    {name: "Infantiles", rating: 8},
    {name: "Musical", rating: 7},
  ];

  return (
    <div id="wrapper">
      <Sidenav />

      <Layout>
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <MainBoxes />
            <div className="row">
              <LastMovie />
              <Genres
                genresList={genresList}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App;