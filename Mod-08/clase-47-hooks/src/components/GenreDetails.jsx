import { Component } from 'react';

class GenreDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      genreInfo: null,
      isError: false
    }
  }

  componentDidMount () {
    const genreID = this.props.match.params.id;

    const apiCall = async () => {
      const response = await fetch("/api/genres/" + genreID).then(response => response.json());
      return response;
    }

    apiCall()
      .then(data => {
        if (data.status === 200) {
          this.setState({genreInfo: data.genreInfo});
        }
        if (data.status === 404) {
          this.setState({isError: true});
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    const { genreInfo, isError } = this.state;
    return (
      <>
        <h2>Genre Detail</h2>
        { genreInfo && (
          <>
            <h4>Nombre: { genreInfo.name }</h4>
            <p>Ranking: { genreInfo.ranking }</p>
            <p>Me estás pidiendo el género con ID: {this.props.match.params.id}</p>
          </>
        )}
        {
          isError && <h4 className="alert alert-danger">No se encontró nada con ese ID</h4>
        }
      </>
    )
  }
}

export default GenreDetails;