// Assets
import './App.scss';
import WalterWhite from "./images/walter-white.jpg";

// Components
import InfoBox from './InfoBox';

function App() {
  const actualDate = "23/03/2022";
  const day = "jueves";

  return (
    <div className="App">
      <h2>Today is {actualDate}</h2>
      <img src="/images/baby-yoda.jpg" alt="" />
      <img src={WalterWhite} alt="" />
      {
        day === "miércoles" ?
        <InfoBox /> : 
        <p>Hola</p>
      }

      { day === "miércoles" && <InfoBox /> }

      <InfoBox />
      <InfoBox />
      <InfoBox />
    </div>
  );
}

export default App;