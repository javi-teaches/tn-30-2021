import MainBox from "./MainBox";

function MainBoxes({ loadingHandler }) {
  const dataBoxes = [
    {
      title: "Movies in data base",
      amount: 21,
      iconName: "fa-film",
      styles: ["border-left-primary", "text-primary"]
    },
    {
      title: "Total awards",
      amount: 79,
      iconName: "fa-award",
      styles: ["border-left-success", "text-success"]
    },
    {
      title: "Actors quantity",
      amount: 49,
      iconName: "fa-user",
      styles: ["border-left-warning", "text-warning"]
    }
  ];

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
     
      <div className="row">
        {
          dataBoxes.map((dataBox, i) => <MainBox key={i} dataBox={dataBox} />)
        }
        
      </div>

      <button
        className="btn btn-danger my-5"
        onClick={loadingHandler}
      >Haceme Click</button>
    </div>
  )
}

export default MainBoxes;