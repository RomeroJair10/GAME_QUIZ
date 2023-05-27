import "/src/App.css"

function App() {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <h1>CAPTURA PR</h1>
          <a href="../Add.html" class="btn btn-outline-info btn-sm mt-1 me-1">
            PREGUNTAS
            </a>
        </div>
        <div className="col">
          <h1>JUEGO</h1>
          <a href="../Juego.html" class="btn btn-outline-danger btn-sm mt-1 me-1">
            JUGAR
            </a>
        </div>
        <div className="col-2 text-end"></div>
      </div>
      <hr />
    </div>
  )
}

export default App;