// Deps
import { Component } from 'react';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
      isLoading: true
    }
  }

  // Life Cycle
  componentDidMount () {
    console.log("¡El componente se montó!");
    // Aquí hacemos los llamados asincrónicos
    fetch("http://localhost:5500/api/genres")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          this.setState({
            isLoading: false,
            genresList: data
          })
        }
      })
      .catch(error => console.error(error))
  }

  // Event Handler
  loadingIsTrueAgain () {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render () {
    return (
      <div id="wrapper">
        <Sidenav />
        <Layout>
          <div id="content">
            <Nav />
            <div className="container-fluid">
              <MainBoxes loadingHandler={ () => this.loadingIsTrueAgain() } />
              <div className="row">
                <LastMovie />
                { this.state.isLoading && <h3>Cargando...</h3> }
                { !this.state.isLoading && <Genres genresList={this.state.genresList} /> }
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default App;