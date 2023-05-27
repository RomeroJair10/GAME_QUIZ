import React from 'react'

const Guardado = ({resul, resul1, resul2, resulchecked, GuarResulButton} ) => {
  
  const GuarResul = () => {
    document.querySelectorAll(`input[name="respuesta"]`).forEach(element => {
      if(element.value === resulchecked) {
          element.checked = true;
      }
    });
  }
  return (
    <div className="dropdown">
        <a onClick={GuarResul} className="btn btn-outline-success dropdown-toggle fw-lighter" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
        Select { }
        <i class="bi bi-ui-checks"></i>
        </a>
        <ul className="dropdown-menu">
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="guardado" value={resul} name="resul"/>
                <input type='radio' value={resul} name="respuesta"></input>
              </div>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="text" value={resul1} name="resul"/>
                <input type='radio' value={resul1} name="respuesta"></input>
              </div>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="guardado" value={resul2} name="resul"/>
                <input type='radio' value={resul2} name="respuesta"></input>
              </div>
            </div>
            <div className="input-group">
            <button onClick={GuarResulButton} type="button" className="btn btn-outline-success btn-sm text-center">
            { }
            <i class="bi bi-check2-circle"></i>
            </button>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Guardado