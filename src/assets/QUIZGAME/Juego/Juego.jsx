import { useState } from "react"
import LisCapture from "./components/LisCapture";
import Swal from "sweetalert2";

function App () {

  const [listCaptures, setListCaptures] = useState(
    JSON.parse (localStorage.getItem("listCaptures")) || []
  );

  const CheckedGuarda = () => {
    var correct = [];
    var incorret = [];
    listCaptures.map((i) => (
      document.querySelectorAll(`input[id="${i.id}"]`)
       .forEach(element => {
        if (element.checked && i.resulchecked === element.value) {
          correct.push(element.value);
          console.log(element.value);
        } else if (element.checked && i.resulchecked !== element.value) {
          incorret.push(element.value);
          console.log(element.value);
        } else {
          console.log(element);
        }
       })
    ));
    var npregunt = 0;
    for (const key in listCaptures) {
      const element = listCaptures[key];
      npregunt++;
    }

    Swal.fire({
      title: "Resultado?",
      width: 400,
      padding:'3em',
      color: ' #4ecefe  ',
      background: '#006',
      backdrop: `rgba(  23, 32, 42  ,0.4)`,
      text: `"El numero de respuestas corecta son: ${correct.length}/${npregunt}"                
             "El numero de malas son: ${incorret.length}/${npregunt}"`,
      icon: "question",
    });

  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-auto"></div>
        <div className="col">
          <h1>JUGAR AHORA</h1>
        </div>
      </div>
    <hr />
    {
      listCaptures.length === 0 && (
      <h3>
        Agrege una nueva pregunta
      </h3>
      )
    }
    {
    listCaptures.map((lisCapture)=>(
    <LisCapture
     key={lisCapture.id}
     item={lisCapture}
     listCaptures={listCaptures}
    setListCaptures={setListCaptures} />
    ))
    }

    <button onClick={CheckedGuarda} >
      FIN
      <i class="bi bi-device-hdd"></i>
    </button>

    </div>
    
  )
}

export default App