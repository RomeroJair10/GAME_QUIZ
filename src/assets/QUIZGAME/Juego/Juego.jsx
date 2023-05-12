import { useState } from "react"
import LisCapture from "./components/LisCapture";
import ReturnButton from "../../components/ReturnButton";


function App() {
  
    const [listCaptures, setListCaptures] = useState(
        JSON.parse (localStorage.getItem("listCaptures")) || []
    );

  
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-auto"></div>
        <div className="col">
          <h1 className="fw-lighter">Add Questions</h1>
          <ReturnButton handleButton={""} />
        </div>
      </div>
    <hr />
    {
      listQuestions.length === 0 && (
      <h3>
        Empty list...
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
    </div>
    
  )
}

export default App